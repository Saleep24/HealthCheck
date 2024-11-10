import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
// Import fetch if using Node.js version < 18
import fetch from 'node-fetch';

dotenv.config();

// Initialize Supabase client
const supabaseUrl = 'https://kliibxdjkxqnnzojijzs.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const port = 3001;



// Use the CORS middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/translate', async (req, res) => {
    const { selectedChecklist, checklistItems, selectedLanguage } = req.body;
    const title = selectedChecklist.title;

    // Format the checklist items into a readable string
    const formattedChecklistItems = checklistItems
        .map(item => `- ${item.item_description}`)
        .join('\n');

    console.log(title, formattedChecklistItems, selectedLanguage);
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: `You are a helpful assistant that translates text to ${selectedLanguage}.`
                        },
                        {
                            role: 'user',
                            content: `Translate the following checklist:\nTitle: "${title}"\nItems:\n${formattedChecklistItems}`
                        }
                    ],
                    max_tokens: 500,  // Adjust max tokens to fit longer responses if necessary
                    temperature: 0.3,
                }),
            });

        const data = await response.json();
        const translation = data.choices[0].message.content.trim();
        res.json({ translation });
    } catch (error) {
        console.error('Error translating text:', error);
        res.status(500).json({ error: 'Error translating text' });
    }
});

// Define the /api/create-checklist endpoint
app.post('/api/create-checklist', async (req, res) => {
    const checklistData = req.body;

    try {
        // Insert checklist data into Supabase
        const { data, error } = await supabase
            .from('checklists') // Ensure 'checklists' is your actual table name
            .insert([
                {
                    doctor_id: checklistData.doctor_id,
                    patient_username: checklistData.patient_username,
                    title: checklistData.procedure_title,
                }
            ]);

        if (error) {
            throw error;
        }

        // Respond to the client
        res.status(200).json({ message: 'Checklist created successfully', data });
    } catch (error) {
        console.error('Error creating checklist:', error);
        res.status(500).json({ message: 'Failed to create checklist', error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 
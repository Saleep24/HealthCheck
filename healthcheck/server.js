import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://kliibxdjkxqnnzojijzs.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsaWlieGRqa3hxbm56b2ppanpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNzQ0MzYsImV4cCI6MjA0Njc1MDQzNn0.uJGwDc-4WhYLQAXOXBmQmdjSu-pBLJbVgiDKFtXkfuc"
const supabase = createClient(supabaseUrl, supabaseKey);


const app = express();
const port = 3001;

// Use the CORS middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

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
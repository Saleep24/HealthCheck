import React, { useState } from 'react';

function CreateChecklistForm({ onSubmit }) {
    const [doctorId, setDoctorId] = useState('');
    const [patientUsername, setPatientUsername] = useState('');
    const [procedureTitle, setProcedureTitle] = useState('');
    const [checklistItems, setChecklistItems] = useState(['']);

    const handleAddItem = () => {
        if (checklistItems.length < 9) {
            setChecklistItems([...checklistItems, '']);
        }
    };

    const handleItemChange = (index, value) => {
        const newItems = [...checklistItems];
        newItems[index] = value;
        setChecklistItems(newItems);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const checklistData = {
            doctor_id: doctorId,
            patient_username: patientUsername,
            procedure_title: procedureTitle,
            items: checklistItems.filter(item => item.trim() !== '')
        };

        // Send data to API route
        const response = await fetch('http://localhost:3001/api/create-checklist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checklistData),
        });

        if (response.ok) {
            console.log('Checklist created successfully');
            onSubmit();
        } else {
            console.error('Failed to create checklist');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label>Doctor ID:</label>
                <input
                    type="text"
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                />
            </div>
            <div>
                <label>Patient Username:</label>
                <input
                    type="text"
                    value={patientUsername}
                    onChange={(e) => setPatientUsername(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                />
            </div>
            <div>
                <label>Procedure Title:</label>
                <input
                    type="text"
                    value={procedureTitle}
                    onChange={(e) => setProcedureTitle(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                />
            </div>
            <div>
                <label>Checklist Items:</label>
                {checklistItems.map((item, index) => (
                    <input
                        key={index}
                        type="text"
                        value={item}
                        onChange={(e) => handleItemChange(index, e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                    />
                ))}
                {checklistItems.length < 9 && (
                    <button type="button" onClick={handleAddItem} className="bg-blue-500 text-white p-2 rounded">
                        Add Item
                    </button>
                )}
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Submit
            </button>
        </form>
    );
}

export default CreateChecklistForm;
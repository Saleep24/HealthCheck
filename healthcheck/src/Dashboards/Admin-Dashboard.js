import React, { useState } from 'react';
import { IoMdOpen } from "react-icons/io";

function AdminDashboard() {
    const [selectedChecklist, setSelectedChecklist] = useState();
    const [selectedPatient, setSelectedPatient] = useState("judah");
    const [view, setView] = useState('showChecklists');

    const patients = [
        { username: "Judah", name: 'Patient 1', time: '10:00 AM' },
        { username: "Chris", name: 'Patient 2', time: '11:00 AM' },
        { username: "Saleep", name: 'Patient 3', time: '12:00 PM' }
    ];

    const checklists = [
        {   username: "Judah",
            patient: "Patient 1",
            doctor: "Dr. Judah",
            title: 'Procedural Checklist for Laparoscopic Appendectomy',
            lastUsed: 'May 9th, 2024',
            created: 'November 16th, 2020',
            completed: 10
        },
        {   username: "Judah",
            patient: "Patient 2",
            doctor: "Dr. Judah",
            title: 'Procedural Checklist for Laparoscopic Appendectomy',
            lastUsed: 'May 9th, 2024',
            created: 'November 16th, 2020',
            completed: 10
        },
        {
            username: "Chris",
            patient: "Patient 3",
            doctor: "Dr. Chris",
            title: 'Procedural Checklist for Laparoscopic Appendectomy',
            lastUsed: 'May 9th, 2024',
            created: 'November 16th, 2020',
            completed: 10
        },
        // Add more checklists as needed
    ];

   

    // Filter checklists based on selectedPatient
    const filteredChecklists = checklists.filter(checklist => checklist.username === selectedPatient);

    const handleCreateChecklist = () => {
        setView('createChecklist');
    };

    const handleOpenChecklist = (checklist) => {
        setSelectedChecklist(checklist);
        setView('openChecklist');
    };

    const handleShowChecklists = () => {
        setView('showChecklists');
    };

    return (
        <div className="flex flex-col md:flex-row h-screen gap-16">
            <div className="bg-blue-600 md:w-1/6 p-6 ml-3 rounded-lg">
                <div className="profile mb-4">
                    <img src="profile-image-url" alt="Admin" className="profile-image w-24 h-24 rounded-full mx-auto" />
                </div>
                <div className="patients-today mb-4">
                    <h2 className="text-white text-lg  font-bold mb-2">Patients Today</h2>
                    <ul>
                        {patients.map((patient, index) => (
                            <li key={index} className="mb-2 text-left">
                                <button 
                                    className={` w-[200px] text-white p-2 rounded ${selectedPatient === patient.username ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'}`}
                                    onClick={() => setSelectedPatient(patient.username)}
                                >
                                    {patient.username}
                                    <p className="text-xs text-gray-300">{patient.time}</p>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr></hr>
                <div className="created-checklists">
                    <h2 className="text-white text-lg font-bold mb-2">Created Checklists</h2>
                    <ul>
                        {checklists.map((checklist, index) => (
                            <li key={index} className="text-white mb-2">{checklist.username} | {checklist.title.slice(0,5)}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-slate-200 md:w-2/3 p-4 overflow-y-auto rounded-lg">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <img src="profile-image-url" alt="Admin" className="profile-image w-24 h-24 rounded-full mx-auto" />
                        <h2 className="text-gray-800 text-lg font-bold mb-4">Checklists for {selectedPatient}</h2>
                    </div>
                    <button 
                        className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700 h-1/2"
                        onClick={handleCreateChecklist}
                    >
                        Create Checklist +
                    </button>
                </div>

                {view === 'showChecklists' && (
                    <ul>
                        {filteredChecklists.map((checklist, index) => (
                            <li key={index} className="mb-4 p-4 bg-white shadow rounded">
                                <div className="w-full">
                                    <strong>Title:</strong> {checklist.title}
                                </div>
                                <hr className="my-2"></hr>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col justify-evenly">
                                        <div>
                                            <strong>Doctor:</strong> {checklist.doctor}
                                        </div>
                                        <div>
                                            <strong>Patient:</strong> {checklist.patient}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-evenly">
                                        <div>
                                            <strong>Created:</strong> {checklist.created}
                                        </div>
                                        <div>
                                            <strong>Last Used:</strong> {checklist.lastUsed}
                                        </div>
                                    </div>
                                    <button 
                                        className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700 h-1/2"
                                        onClick={() => handleOpenChecklist(checklist)}
                                    >
                                        Open Checklist <IoMdOpen />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {view === 'createChecklist' && (
                    <div>
                        <h3 className="text-gray-800 text-lg font-bold mb-4">Create a New Checklist for {selectedPatient}</h3>
                        {/* Add form or UI elements for creating a new checklist here */}
                        <button 
                            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700"
                            onClick={handleShowChecklists}
                        >
                            Back to Checklists
                        </button>
                    </div>
                )}

                {view === 'openChecklist' && selectedChecklist && (
                    <div>
                        <h3 className="text-gray-800 text-lg font-bold mb-4">Checklist Details</h3>
                        <div>
                            <strong>Title:</strong> {selectedChecklist.title}
                        </div>
                        <div>
                            <strong>Doctor:</strong> {selectedChecklist.doctor}
                        </div>
                        {/* Add more details or actions for the opened checklist here */}
                        <button 
                            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700"
                            onClick={handleShowChecklists}
                        >
                            Back to Checklists
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard;
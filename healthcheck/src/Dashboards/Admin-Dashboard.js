import React, { useState, useEffect } from 'react';
import { IoMdOpen } from "react-icons/io";
import supabase from '../utils/supabaseClient';
import CreateCheckListForm from '../components/CreateCheckListForm';
function AdminDashboard() {
    const [selectedChecklist, setSelectedChecklist] = useState();
    const [selectedPatient, setSelectedPatient] = useState("jdoe");
    const [view, setView] = useState('showChecklists');
    const [patients, setPatients] = useState([]);
    const [checklists, setChecklists] = useState([]);
    const [allChecklists, setAllChecklists] = useState([]);
    const [checklistItems, setChecklistItems] = useState([]);


    useEffect(() => {
        const fetchPatients = async () => {
            const { data, error } = await supabase
                .from('patients')
                .select('*')
                .eq('doctor_id', 1);
       

            if (error) {
                console.error("Error fetching patients:", error);
            } else {
                console.log("Fetched patients:", data);
                setPatients(data);
            }
        };
        const fetchChecklists = async () => {
            const { data, error } = await supabase
                .from('checklists')
                .select('*')
                .eq('patient_username', selectedPatient);

            if (error) {
                console.error("Error fetching checklists:", error);
            } else {
                setChecklists(data);
            }
        };
        const fetchAllChecklists = async () => {
            const { data, error } = await supabase
                .from('checklists')
                .select('*')
                .eq('doctor_id', 1);
            if (error) {
                console.error("Error fetching all checklists:", error);
            } else {
                setAllChecklists(data);
            }
        };
        const fetchChecklistItems = async () => {
            if (selectedChecklist) {
                const { data, error } = await supabase
                    .from('checklist_items')
                    .select('*')
                    .eq('checklist_id', 1);


                if (error) {
                    console.error("Error fetching checklist items:", error);
                } else {
                    console.log("Fetched checklist items:", data);
                    setChecklistItems(data);
                }
            }
        };
        fetchPatients();
        fetchAllChecklists();
        fetchChecklists();
        fetchChecklistItems();
    }, [selectedPatient, selectedChecklist]);

    

   

    // Filter checklists based on selectedPatie
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

    const handleChecklistCreated = () => {
        setView('showChecklists');
    };

    const toggleCompletionStatus = async (itemId, currentStatus) => {
        const { data, error } = await supabase
            .from('checklist_items')
            .update({ is_completed: !currentStatus })
            .eq('id', itemId);

        if (error) {
            console.error("Error updating checklist item:", error);
        } else {
            console.log("Updated checklist item:", data);
            // Update the local state to reflect the change
            setChecklistItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === itemId ? { ...item, is_completed: !currentStatus } : item
                )
            );
        }
    };

    const resetAllCompletionStatuses = async () => {
        const { data, error } = await supabase
            .from('checklist_items')
            .update({ is_completed: false })
            .eq('checklist_id', selectedChecklist.id);

        if (error) {
            console.error("Error resetting checklist items:", error);
        } else {
            console.log("Reset checklist items:", data);
            // Update the local state to reflect the change
            setChecklistItems((prevItems) =>
                prevItems.map((item) => ({ ...item, is_completed: false }))
            );
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen gap-16">
            <div className="bg-blue-600  p-6 ml-3 rounded-lg w-fit">
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
                        {allChecklists.map((checklist, index) => (
                            <li key={index} className="text-white mb-2">{checklist.username} | {checklist.title}</li>
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
                        {checklists.map((checklist, index) => (
                            <li key={index} className="mb-4 p-4 bg-white shadow rounded">
                                <div className="w-full">
                                    <strong>Title:</strong> {checklist.title}
                                </div>
                                <hr className="my-2"></hr>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col justify-evenly">
                                        <div>
                                            <strong>Doctor:</strong> {checklist.doctor_id}
                                        </div>
                                        <div>
                                            <strong>Patient:</strong> {checklist.patient_username}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-evenly">
                                        <div>
                                        <strong>Created:</strong> {new Date(checklist.created_at).toLocaleString()}
                                        </div>
                                        <div>
                                            <strong>Last Used:</strong> Yesterday
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
                        <CreateCheckListForm onSubmit={handleChecklistCreated} />
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
                        <div>
                            <strong>Items:</strong>
                            <ul>
                                {checklistItems.length > 0 ? (
                                    checklistItems.map(({ id, item_description, is_completed }) => (
                                        <li key={id} className="mb-2 p-2 bg-gray-100 rounded shadow">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <strong>Description:</strong> {item_description}
                                                </div>
                                                <button
                                                    className={`ml-4 p-2 rounded ${is_completed ? 'bg-green-500' : 'bg-red-500'} text-white`}
                                                    onClick={() => toggleCompletionStatus(id, is_completed)}
                                                >
                                                    {is_completed ? 'Completed' : 'Mark as Completed'}
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <li>No items found.</li>
                                )}
                            </ul>
                        </div>
                        <button 
                            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-700"
                            onClick={handleShowChecklists}
                        >
                            Back to Checklists
                        </button>
                        <button 
                            className="bg-yellow-500 text-white rounded-lg p-2 hover:bg-yellow-700"
                            onClick={resetAllCompletionStatuses}
                        >
                            Submit Completion Statuses
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard;
import React, {useState, useEffect} from 'react';
import supabase from '../utils/supabaseClient';

function PatientDashboard() {

    const [checklists, setChecklists] = useState([]);
    const [selectedChecklist, setSelectedChecklist] = useState();    
    const [view, setView] = useState('showChecklists');
    const [checklistItems, setChecklistItems] = useState([]);


    
    useEffect(() => {
        const fetchChecklists = async () => {
            const {data, error} = await supabase.from('checklists').select('*').eq('patient_username', 'jdoe');
            if (error) {
                console.error('Error fetching checklists:', error);
            } else {
                setChecklists(data);
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
        fetchChecklistItems();
        fetchChecklists();        
    }, [selectedChecklist]); 

    const handleOpenChecklist = (checklist) => {
        setSelectedChecklist(checklist);
        setView('openChecklist');
    };

    return (
<div className="flex flex-col md:flex-row h-screen gap-16">
        <div className="bg-blue-600  md:p-6 ml-3 rounded-lg  md:w-fit">
            <div className="profile mb-4">
                <img src="profile-image-url" alt="Admin" className="profile-image w-24 h-24 rounded-full mx-auto" />
            </div>
            <div className="patients-today mb-4">
                <h2 className="text-white text-lg  font-bold mb-2">Appointments Today</h2>
                <ul>
                    {checklists.map((checklist) => (
                        <li key={checklist.id} onClick={() => handleOpenChecklist(checklist)}>
                           <button 
                                    className={` w-[200px] text-white p-2 rounded ${selectedChecklist === checklist.id ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'}`}
                                    onClick={() => setSelectedChecklist(checklist.id)}
                                >
                                    {checklist.title}
                                </button>
                        </li>
                    ))}
                </ul>
           </div>
           <hr></hr>
        </div>
        <div className="bg-slate-200 md:w-2/3 p-4 overflow-y-auto rounded-lg">
                {view === 'openChecklist' && selectedChecklist ? (
                    <div>
                        <h2 className="text-gray-800 text-lg font-bold mb-4">{selectedChecklist.title}</h2>
                        <p>{selectedChecklist.description}</p>
                        {(checklistItems.map(({ id, item_description, is_completed }) => (
                                        <li key={id} className="mb-2 p-2 bg-gray-100 rounded shadow">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <strong>Description:</strong> {item_description}
                                                </div>
                                             {is_completed ? <p className="text-green-500">Completed</p> : <p className="text-red-500">Not Completed</p>}
                                            </div>
                                        </li>
                                    ))
                                )}
                        {/* Add more details about the checklist here */}
                    </div>
                ) : (
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <img src="profile-image-url" alt="Admin" className="profile-image w-24 h-24 rounded-full mx-auto" />
                            <h2 className="text-gray-800 text-lg font-bold mb-4">NO APPOINTMENTS TODAY</h2>
                        </div>
                    </div>
                )}
        </div>
    </div>
    );
}

export default PatientDashboard;


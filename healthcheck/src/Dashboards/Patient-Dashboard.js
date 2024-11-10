import React, {useState, useEffect} from 'react';
import supabase from '../utils/supabaseClient';
import image from '../img/jerry.jpeg'

function PatientDashboard() {
    const [selectedLanguage, setSelectedLanguage] = useState('es'); // Default to Spanish
    const [checklists, setChecklists] = useState([]);
    const [selectedChecklist, setSelectedChecklist] = useState();    
    const [view, setView] = useState('showChecklists');
    const [checklistItems, setChecklistItems] = useState([]);
    const [translatedChecklistItems, setTranslatedChecklistItems] = useState([]);
    const [isTranslated, setIsTranslated] = useState(false);

    
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
                    .eq('checklist_id', selectedChecklist.id);


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

    const translateCheckList = async (selectedChecklist, checklistItems, selectedLanguage) => {
        try {
            console.log(checklistItems, selectedChecklist, selectedLanguage);
            const response = await fetch('http://localhost:3001/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    selectedChecklist: selectedChecklist.title,
                    checklistItems: checklistItems,
                    selectedLanguage: selectedLanguage
                }),
            });

            const result = await response.json();
            console.log(result.translation);

            // Split the translated text into an array of items
            const lines = result.translation.split('\n');

// Filter out the undefined title line and any empty lines
            const items = lines
                .filter(line => line.startsWith('-')) // Keep only lines that start with "-"
                .map(line => line.trim().slice(2));  

            setIsTranslated(true);
            setTranslatedChecklistItems(items);
        } catch (error) {
            console.error('Error translating checklist:', error);
        }
    };

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const handleOpenChecklist = (checklist) => {
        setSelectedChecklist(checklist);
        setView('openChecklist');
    };

    return (
<div className="flex flex-col md:flex-row h-screen gap-16">
        <div className="bg-blue-600  md:p-6 ml-3 rounded-lg  md:w-fit">
            <div className="profile mb-4">
                <img src={image} alt="Admin" className="profile-image w-24 h-24 rounded-full mx-auto" />
            </div>
            <div className="patients-today mb-4">
                <h2 className="text-white text-lg  font-bold mb-2">Appointments Today</h2>
                <ul>
                    {checklists.map((checklist) => (
                        <li key={checklist.id} onClick={() => handleOpenChecklist(checklist)}>
                           <button 
                                    className={` w-[200px] text-white p-2 mb-2 rounded ${selectedChecklist === checklist.id ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'}`}
                                    onClick={() => { setSelectedChecklist(checklist.id); setIsTranslated(false);}}
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
                    <p className="text-gray-600 font-bold mb-2">User: Jdoe</p>
                {view === 'openChecklist' && selectedChecklist ? (
                    <div>
                        <div className="flex justify-between">
                        <h2 className="text-gray-800 text-lg font-bold mb-4">{selectedChecklist.title}</h2>
                        <div>
                            <select value={selectedLanguage} onChange={handleLanguageChange} className="mr-2">
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="zh">Chinese</option>
                                {/* Add more languages as needed */}
                            </select>
                            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => translateCheckList(selectedChecklist, checklistItems, selectedLanguage)}>
                                Translate
                            </button>
                        </div>
                        </div>
                        <hr className="my-2 bg-blue-100"></hr>
                        <div className="flex justify-between gap-4">
                            <div>
                            <p className="text-gray-800" >Doctor: Mr. Smith</p>
                            <p className="text-gray-600">Completed: 1/10</p>
                            </div>
                        
                            <div>
                            <p className="text-gray-600">Date Created: {new Date(selectedChecklist.created_at).toLocaleString().slice(0, 9)}</p>
                            <p className="text-gray-600">Last Used: Yesterday</p>
                            </div>
                            
                        </div>
                        <ol className="list-decimal pl-5 mt-4">
                        {(isTranslated ? translatedChecklistItems.map((item) => (
                            <li key={item} className="mb-2 p-2 bg-gray-100 rounded  shadow">
                                <div className="flex justify-between h-[50px] items-center">
                                    <div>
                                        <strong>Description:</strong> {item}
                                    </div>
                                </div>
                            </li>
                        )) : checklistItems.map(({ id, item_description, is_completed }) => (
                                        <li key={id} className="mb-2 p-2 bg-gray-100 rounded  shadow">
                                            <div className="flex justify-between h-[50px] items-center">
                                                <div>
                                                    <strong>Description:</strong> {item_description}
                                                </div>
                                                <div className="flex justify-end items-center">
                                                    {is_completed ? <p className="text-green-500">Completed</p> : <p className="text-red-500">Not Completed</p>}
                                                </div>
                                            </div>
                                           
                       
                                        </li>
                                    ))
                                )}
                        </ol>
                        
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


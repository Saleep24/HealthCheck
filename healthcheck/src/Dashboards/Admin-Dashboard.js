import React from 'react';
import './AdminDashboard.css'; // Create a CSS file for styling

function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <div className="profile">
                    <img src="profile-image-url" alt="Admin" className="profile-image" />
                    <p>Welcome, Admin Name!</p>
                </div>
                <div className="patients-today">
                    <h2>Patients Today</h2>
                    <ul>
                        <li>Patient 1</li>
                        <li>Patient 2</li>
                        <li>Patient 3</li>
                    </ul>
                </div>
            </aside>
            <main className="main-content">
                <div className="current-patient">
                    <img src="patient-image-url" alt="Current Patient" className="patient-image" />
                    <p>Current Patient Name and ID</p>
                </div>
                <div className="checklists">
                    <h2>Checklists</h2>
                    <div className="checklist-item">
                        <div className="checklist-info">
                            <div className="roles">
                                <span className="role doctor">Doctor</span>
                                <span className="role patient">Patient</span>
                            </div>
                            <div className="checklist-details">
                                <h3>Procedural Checklist for Laparoscopic Appendectomy</h3>
                                <p>Last Used: May 9th, 2024</p>
                                <p>Created: November 16th, 2020</p>
                                <p>Completed: 10</p>
                            </div>
                        </div>
                        <button className="open-checklist">Open Checklist</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;
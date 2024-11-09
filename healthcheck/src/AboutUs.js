import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

function AboutUs() {
    const teamMembers = [
        {
            name: 'Judah Boyce',
            role: 'Frontend Developer',
            description: 'A brief description about you.',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Saleep',
            role: 'Frontend Developer',
            description: 'A brief description about teammate 1.',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Christopher',
            role: 'Backend Developer',
            description: 'A brief description about teammate 2.',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Jerry',
            role: 'Backend Developer',
            description: 'A brief description about teammate 3.',
            linkedin: '#',
            github: '#'
        }
    ];

    return (
        <div className="about-us">
            <h1>About Us</h1>
            <p>Our mission is to increase communication between doctors and patients by using AI, checklists, and LLMs.</p>
            <div className="team">
                {teamMembers.map((member, index) => (
                    <div className="card" key={index}>
                        <div className="card-header"></div>
                        <div className="card-body">
                            <h2>{member.name}</h2>
                            <h3>{member.role}</h3>
                            <p>{member.description}</p>
                            <div className="social-icons">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href={member.github} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
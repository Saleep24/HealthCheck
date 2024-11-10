import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

import JudahImage from './img/Judah.jpeg';
import SaleepImage from './img/Saleep.jpeg';
import ChristopherImage from './img/Chris.jpeg';
import JerryImage from './img/jerry.jpeg';
import { AuthPKCEGrantCodeExchangeError } from '@supabase/supabase-js';

function AboutUs() {
    const teamMembers = [
        {
            name: 'Judah Boyce',
            role: 'Frontend Developer',
            description: 'A brief description about you.',
            linkedin: 'https://www.linkedin.com/in/judah-boyce-1a0b24301/',
            github: '#',
            image: JudahImage
        },
        {
            name: 'Saleep',
            role: 'Frontend Developer',
            description: 'A brief description about teammate 1.',
            linkedin: 'https://www.linkedin.com/in/saleepshrestha/',
            github: '#',
            image: SaleepImage
        },
        {
            name: 'Christopher',
            role: 'Backend Developer',
            description: 'A brief description about teammate 2.',
            linkedin: 'https://www.linkedin.com/in/christopherkhaing/',
            github: '#',
            image: ChristopherImage
        },
        {
            name: 'Jerry',
            role: 'Backend Developer',
            description: 'A brief description about teammate 3.',
            linkedin: 'https://www.linkedin.com/in/ximu-du-794581229/',
            github: '#',
            image: JerryImage
        }
    ];

    return (
        <div className="about-us">
            <h1 className="about-us-title">About Us</h1>
            <p className="about-us-mission">
                Our mission is to increase communication between doctors and patients by using AI, checklists, and LLMs.
            </p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <a 
                        key={index} 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="card-link"
                    >
                        <div className="card">
                            <div className="card-header">
                                <img src={member.image} alt={`${member.name}`} className="team-image" />
                            </div>
                            <div className="card-body">
                                <h2>{member.name}</h2>
                                <h3>{member.role}</h3>
                                <p>{member.description}</p>
                                <div className="social-icons">
                                    <i className="fab fa-linkedin"></i>
                                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default AboutUs;
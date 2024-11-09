// src/ContactProfessional.js

import React from 'react';
import './ContactProfessional.css'; // Import CSS for styling

function ContactProfessional() {
    const professionals = [
        {
            category: 'Healthcare Professionals',
            members: [
                {
                    name: 'Dr. Tara E. Rivera',
                    title: 'Primary Care Physician',
                    expertise: 'General Family Medicine',
                    profile: '#',           
                    schedule: '#',          
                    resources: 'https://www.princetonmedicine.com/'
                },
                {
                    name: 'Dr. Lisa S. Motavalli',
                    title: 'Cardiologist',
                    expertise: 'Adult Congenital Heart Disease',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/adult-congenital-heart-disease-achd'
                },
                {
                    name: 'Dr. Rajesh K. Patel',
                    title: 'Endocrinologist',
                    expertise: 'Diabetes and Thyroid Disorders',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.mayoclinic.org/tests-procedures/thyroid-function-tests/about/pac-20385088'
                },
                {
                    name: 'Dr. Ana M. Gomez',
                    title: 'Dermatologist',
                    expertise: 'Skin Cancer and Cosmetic Dermatology',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.aad.org/public'
                },
                {
                    name: 'Dr. Benjamin F. Carter',
                    title: 'Orthopedic Surgeon',
                    expertise: 'Sports Injuries and Joint Replacement',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.hopkinsmedicine.org/orthopaedic-surgery'
                },
                {
                    name: 'Dr. Sarah L. Nguyen',
                    title: 'Pediatrician',
                    expertise: 'Child and Adolescent Health',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.childrenshospital.org'
                }
            ]
        },
        {
            category: 'Therapists',
            members: [
                {
                    name: 'Michal Nina Saraf',
                    title: 'Psychologist, PsyD',
                    expertise: 'Cognitive Behavioral Therapy',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.mayoclinic.org/tests-procedures/cognitive-behavioral-therapy/about/pac-20384610'
                },
                {
                    name: 'Phil Smyth',
                    title: 'Clinical Counselor',
                    expertise: 'Adolescent/Teen Specialist',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.princetonmedicine.com/services/adolescent-health'
                },
                {
                    name: 'Dr. Jane T. Oliver',
                    title: 'Licensed Marriage and Family Therapist',
                    expertise: 'Marriage Counseling and Family Therapy',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.aamft.org'
                },
                {
                    name: 'Alexis Brown',
                    title: 'Licensed Art Therapist',
                    expertise: 'Expressive Therapy for Trauma',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://arttherapy.org'
                },
                {
                    name: 'Karen Lee',
                    title: 'Behavioral Health Specialist',
                    expertise: 'Mindfulness and Stress Management',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.mindful.org'
                },
                {
                    name: 'Dr. Thomas L. Freeman',
                    title: 'Psychoanalyst',
                    expertise: 'Personality and Mood Disorders',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.apa.org'
                }
            ]
        },
        {
            category: 'Mental Health Advisors',
            members: [
                {
                    name: 'Emma Wilson',
                    title: 'Mental Health Counselor',
                    expertise: 'Stress and Anxiety Management',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.mentalhealth.org.uk'
                },
                {
                    name: 'Michael Lee',
                    title: 'Addiction Specialist',
                    expertise: 'Substance Abuse Counseling',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.samhsa.gov'
                },
                {
                    name: 'Dr. Vanessa Y. Kim',
                    title: 'Clinical Psychiatrist',
                    expertise: 'Depression and Bipolar Disorders',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.nami.org'
                },
                {
                    name: 'David R. Evans',
                    title: 'Rehabilitation Counselor',
                    expertise: 'Mental Health in Rehabilitation',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.rehabcounseling.org'
                },
                {
                    name: 'Sophie R. Taylor',
                    title: 'Life Coach',
                    expertise: 'Personal Development and Motivation',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.lifecoach.com'
                },
                {
                    name: 'Dr. Carl A. Fisher',
                    title: 'Forensic Psychiatrist',
                    expertise: 'Criminal Behavior and Rehabilitation',
                    profile: '#',
                    schedule: '#',
                    resources: 'https://www.aapl.org'
                }
            ]
        }
    ];


    return (
        <div className="contact-professional">
            {/* Highlighted introduction section */}
            <div className="intro-section">
                <h1>Contact Our Health Professionals</h1>
                <p>Connect with a variety of healthcare, therapy, and mental health professionals for guidance and support.</p>
            </div>

            {/* Loop through each category */}
            {professionals.map((category, index) => (
                <div className="category-section" key={index}>
                    <h2>{category.category}</h2>
                    <div className="slider-container">
                        <div className="professional-list">
                            {category.members.map((professional, idx) => (
                                <div className="professional-card" key={idx}>
                                    <h3>{professional.name}</h3>
                                    <h4>{professional.title}</h4>
                                    <p className="expertise"><strong>Expertise:</strong> {professional.expertise}</p>
                                    <div className="contact-links">
                                        <a href={professional.profile} target="_blank" rel="noopener noreferrer">
                                            View Profile
                                        </a>
                                        <a href={professional.schedule} target="_blank" rel="noopener noreferrer">
                                            Schedule Appointment
                                        </a>
                                        <a href={professional.resources} target="_blank" rel="noopener noreferrer">
                                            Additional Resources
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContactProfessional;
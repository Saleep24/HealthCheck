// src/MentalHealth.js

import React from 'react';
import './MentalHealth.css'; // Import CSS for styling

function MentalHealth() {
    return (
        <div className="mental-health-container">
            <h1 className="title">Mental Health Resources and Support</h1>

            {/* Mental Health Organizations Section */}
            <section className="section">
                <h2>Mental Health Organizations</h2>
                <ul>
                    <li>
                        <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer">
                            National Alliance on Mental Illness (NAMI)
                        </a>
                    </li>
                    <li>
                        <a href="https://www.mentalhealthamerica.net" target="_blank" rel="noopener noreferrer">
                            Mental Health America (MHA)
                        </a>
                    </li>
                    <li>
                        <a href="https://www.psychiatry.org" target="_blank" rel="noopener noreferrer">
                            American Psychiatric Association
                        </a>
                    </li>
                </ul>
                <p>
                    These organizations provide resources, support, and guidance for individuals facing mental health challenges, promoting awareness and advocacy.
                </p>
            </section>

            {/* Educational Resources Section */}
            <section className="section">
                <h2>Educational Resources on Mental Health</h2>
                <ul>
                    <li>
                        <a href="https://www.mentalhealth.gov" target="_blank" rel="noopener noreferrer">
                            MentalHealth.gov
                        </a>
                    </li>
                    <li>
                        <a href="https://www.mayoclinic.org/tests-procedures/mental-health" target="_blank" rel="noopener noreferrer">
                            Mayo Clinic - Mental Health
                        </a>
                    </li>
                </ul>
                <p>
                    Learn more about mental health conditions, treatment options, and ways to support loved ones with these resources.
                </p>
            </section>

            {/* Support and Counseling Services Section */}
            <section className="section">
                <h2>Support and Counseling Services</h2>
                <ul>
                    <li>
                        <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer">
                            BetterHelp Online Counseling
                        </a>
                    </li>
                    <li>
                        <a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer">
                            Talkspace Online Therapy
                        </a>
                    </li>
                </ul>
                <p>
                    Access professional counseling services and mental health support with these trusted online platforms.
                </p>
            </section>

            {/* Mental Health Advocacy Section */}
            <section className="section">
                <h2>Mental Health Advocacy and Community Support</h2>
                <ul>
                    <li>
                        <a href="https://afsp.org" target="_blank" rel="noopener noreferrer">
                            American Foundation for Suicide Prevention (AFSP)
                        </a>
                    </li>
                    <li>
                        <a href="https://www.samhsa.gov" target="_blank" rel="noopener noreferrer">
                            Substance Abuse and Mental Health Services Administration (SAMHSA)
                        </a>
                    </li>
                </ul>
                <p>
                    These organizations work to support mental health advocacy, increase awareness, and reduce stigma surrounding mental health issues.
                </p>
            </section>
        </div>
    );
}

export default MentalHealth;

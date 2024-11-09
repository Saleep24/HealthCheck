import React from 'react';
import './PatientRights.css'; // Create a CSS file for styling

function PatientRights() {
  return (
    <div className="patient-rights-container">
      <h1 className="title">Patient Rights and Advocacy</h1>

      <section className="section">
        <h2>Patient Rights and Advocacy Organizations</h2>
        <ul>
          <li>
            <a href="https://apra-advocacy.org" target="_blank" rel="noopener noreferrer">
              American Patient Rights Association
            </a>
          </li>
          <li>
            <a href="https://www.npaf.org" target="_blank" rel="noopener noreferrer">
              National Patient Advocate Foundation
            </a>
          </li>
        </ul>
        <p>
          These links offer information on patient rights, helping patients understand their own rights and how to navigate complex healthcare systems.
        </p>
      </section>

      <section className="section">
        <h2>Educational Resources on Advocacy</h2>
        <ul>
          <li>
            <a href="https://pacboard.org" target="_blank" rel="noopener noreferrer">
              Patient Advocate Certification Board (PACB)
            </a>
          </li>
          <li>
            <a href="https://www.ahrq.gov/patients-consumers/index.html" target="_blank" rel="noopener noreferrer">
              Agency for Healthcare Research and Quality - Tools for Patient Advocacy
            </a>
          </li>
        </ul>
        <p>
          These provide educational resources to understand patient advocacy better, including tools for patients and advocates to improve communication and recognize patient needs.
        </p>
      </section>

      <section className="section">
        <h2>Nurse Advocacy Resources</h2>
        <ul>
          <li>
            <a href="https://www.nursingworld.org/practice-policy/advocacy/" target="_blank" rel="noopener noreferrer">
              American Nurses Association (ANA) - Advocacy Resources
            </a>
          </li>
          <li>
            <a href="https://www.thenurseadvocate.org" target="_blank" rel="noopener noreferrer">
              The American Association of Nurse Advocates
            </a>
          </li>
        </ul>
        <p>
          These can help patients and families understand how nurses advocate for patient care and why strong nurse-patient relationships are essential.
        </p>
      </section>

      <section className="section">
        <h2>Physician-Patient Partnership Support</h2>
        <ul>
          <li>
            <a href="https://participatorymedicine.org" target="_blank" rel="noopener noreferrer">
              Society for Participatory Medicine
            </a>
          </li>
        </ul>
        <p>
          This organization promotes collaboration and communication between patients and healthcare providers, emphasizing a team approach to care.
        </p>
      </section>

      <section className="section">
        <h2>Mental Health Advocacy and Support</h2>
        <ul>
          <li>
            <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer">
              National Alliance on Mental Illness (NAMI)
            </a>
          </li>
        </ul>
        <p>
          This can help address the risks of advocacy, particularly mental health challenges, for both patients and their advocates, providing resources for support and resilience.
        </p>
      </section>
    </div>
  );
}

export default PatientRights; 

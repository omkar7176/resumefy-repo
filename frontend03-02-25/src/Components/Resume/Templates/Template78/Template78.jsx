import React, { forwardRef } from "react";
import styles from "./Template78.module.css";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Template78 = forwardRef(({ information, activeColor }, ref) => {
  return (
    <div className={styles.resumeContainer} ref={ref} style={{ "--theme-color": activeColor }}>
      <div className={styles.leftPanel}>
        <h1>{information.basicInfo?.name || "Your Name"}</h1>
        <h2>{information.basicInfo?.title || "Your Job Title"}</h2>
        <p><FaEnvelope /> {information.basicInfo?.email || "your.email@example.com"}</p>
        <p><FaPhone /> {information.basicInfo?.phone || "(123) 456-7890"}</p>
        <p><FaLinkedin /> 
          <a href={information.basicInfo?.linkedin || "#"}>{information.basicInfo?.linkedin || "LinkedIn Profile"}</a>
        </p>
        
        <h3>Skills</h3>
        <ul>
          {information.skills?.length ? 
            information.skills.map((skill, i) => <li key={i}>{skill}</li>) : 
            <li>No skills added</li>
          }
        </ul>

        <h3>Certifications</h3>
        <ul>
          {information.certifications?.length ? 
            information.certifications.map((cert, i) => <li key={i}>{cert}</li>) : 
            <li>No certifications added</li>
          }
        </ul>

        <h3>Education</h3>
        <p><strong>{information.education?.degree || "Degree"}</strong></p>
        <p>{information.education?.university || "University Name"}</p>
        <p>{information.education?.years || "Years"} | {information.education?.location || "Location"}</p>
      </div>

      <div className={styles.rightPanel}>
        <h3>Work Experience</h3>
        {information.workExperience?.length ? information.workExperience.map((job, i) => (
          <div key={i}>
            <h4>{job.title || "Job Title"} - {job.company || "Company Name"}</h4>
            <p>{job.duration || "Start - End"} | {job.location || "Location"}</p>
            <ul>
              {job.points?.length ? job.points.map((point, j) => <li key={j}>{point}</li>) : 
              <li>No details provided</li>}
            </ul>
          </div>
        )) : <p>No work experience added</p>}
      </div>
    </div>
  );
});

export default Template78;

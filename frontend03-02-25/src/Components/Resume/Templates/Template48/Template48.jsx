import React, { forwardRef, useState } from "react";
import styles from "./Template48.module.css";


const Template48 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other: information[sections.other]?.other || [],
  };

  const extractYear = (date) => (date ? new Date(date).getFullYear() : "Present");

  return (
    <div
      className={styles.resumeWrapper}
      style={{ "--theme-color": activeColor }}
      ref={ref}
    >
      <div className={styles.leftSection}>
        <h1>{info.basicInfo.name || "Your Name"}</h1>
        <h2>{info.basicInfo.title || "Your Title"}</h2>

        <div className={styles.section}>
          <h3>Contact</h3>
          {info.basicInfo.email && <p>Email: {info.basicInfo.email}</p>}
          {info.basicInfo.phone && <p>Phone: {info.basicInfo.phone}</p>}
          {info.basicInfo.linkedin && (
            <p>
              LinkedIn: <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a>
            </p>
          )}
          {info.basicInfo.github && (
            <p>
              GitHub: <a href={info.basicInfo.github}>{info.basicInfo.github}</a>
            </p>
          )}
        </div>

        <div className={styles.section}>
          <h3>Skills</h3>
          <div className={styles.bubbles}>
            {info.skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>Languages</h3>
          <div className={styles.bubbles}>
            {info.languages.map((lang, i) => (
              <span key={i}>{lang}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.section}>
          <h3>Summary</h3>
          <p>{info.summary}</p>
        </div>

        <div className={styles.section}>
          <h3>Work Experience</h3>
          {info.workExperience.map((work, i) => (
            <div key={i}>
              <strong>{work.title}</strong> at {work.companyName} <br />
              ({extractYear(work.startDate)} - {extractYear(work.endDate)}) - {work.location}
              <ul>
                {work.points?.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Projects</h3>
          {info.projects.map((proj, i) => (
            <div key={i}>
              <strong>{proj.title}</strong>
              {proj.github && (
                <p>
                  <strong>GitHub:</strong> <a href={proj.github}>{proj.github}</a>
                </p>
              )}
              {proj.link && (
                <p>
                  <strong>Live Demo:</strong> <a href={proj.link}>{proj.link}</a>
                </p>
              )}
              <ul>
                {proj.points?.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Education</h3>
          {info.education.map((edu, i) => (
            <div key={i}>
              <strong>{edu.title}</strong> - {edu.college} <br />
              ({extractYear(edu.startDate)} - {extractYear(edu.endDate)})
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Achievements</h3>
          <ul>
            {info.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Other</h3>
          <ul>
            {info.other.map((otherItem, i) => (
              <li key={i}>{otherItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Template48;

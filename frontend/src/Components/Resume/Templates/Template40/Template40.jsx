import React, { forwardRef, useState } from "react";
import styles from "./Template40.module.css";

const Template40 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other: {
      sectionTitle: information[sections.other]?.sectionTitle || "Other", // ✅ Manual Title Input
      detail: information[sections.other]?.detail || "", // ✅ Manual Data Input
    }, 
  };

  const extractYear = (date) =>
    date ? new Date(date).getFullYear() : "Present";

  return (
    <div
      className={styles.resumeWrapper}
      style={{ "--theme-color": activeColor }}
      ref={ref}
    >
      <div className={styles.leftSection}>
        {info.basicInfo.name && <h1>{info.basicInfo.name}</h1>}
        {info.basicInfo.title && <h2>{info.basicInfo.title}</h2>}

        {(info.basicInfo.email || info.basicInfo.phone || info.basicInfo.linkedin || info.basicInfo.github) && (
          <div className={styles.section}>
            <h3>Contact</h3>
            {info.basicInfo.email && <p>Email: {info.basicInfo.email}</p>}
            {info.basicInfo.phone && <p>Phone: {info.basicInfo.phone}</p>}
            {info.basicInfo.linkedin && (
              <p>
                LinkedIn:{" "}
                <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a>
              </p>
            )}
            {info.basicInfo.github && (
              <p>
                GitHub:{" "}
                <a href={info.basicInfo.github}>{info.basicInfo.github}</a>
              </p>
            )}
          </div>
        )}

        {info.skills.length > 0 && (
          <div className={styles.section}>
            <h3>Skills</h3>
            <div className={styles.bubbles}>
              {info.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        )}

        {info.languages.length > 0 && (
          <div className={styles.section}>
            <h3>Languages</h3>
            <div className={styles.bubbles}>
              {info.languages.map((lang, i) => (
                <span key={i}>{lang}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={styles.rightSection}>
        {info.summary && (
          <div className={styles.section}>
            <h3>Summary</h3>
            <p>{info.summary}</p>
          </div>
        )}

        {info.workExperience.length > 0 && (
          <div className={styles.section}>
            <h3>Work Experience</h3>
            {info.workExperience.map((work, i) => (
              <div key={i}>
                <strong>{work.title}</strong> at {work.companyName} <br />( 
                {extractYear(work.startDate)} - {extractYear(work.endDate)}) -{" "}
                {work.location}
                {work.points?.length > 0 && (
                  <ul>
                    {work.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {info.projects.length > 0 && (
          <div className={styles.section}>
            <h3>Projects</h3>
            {info.projects.map((proj, i) => (
              <div key={i}>
                <strong>{proj.title}</strong>
                {proj.github && (
                  <p>
                    <strong>GitHub:</strong>{" "}
                    <a href={proj.github}>{proj.github}</a>
                  </p>
                )}
                {proj.link && (
                  <p>
                    <strong>Live Demo:</strong>{" "}
                    <a href={proj.link}>{proj.link}</a>
                  </p>
                )}
                {proj.points?.length > 0 && (
                  <ul>
                    {proj.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {info.education.length > 0 && (
          <div className={styles.section}>
            <h3>Education</h3>
            {info.education.map((edu, i) => (
              <div key={i}>
                <strong>{edu.title}</strong> - {edu.college} <br />( 
                {extractYear(edu.startDate)} - {extractYear(edu.endDate)})
              </div>
            ))}
          </div>
        )}

        {info.achievements.length > 0 && (
          <div className={styles.section}>
            <h3>Achievements</h3>
            <ul>
              {info.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Other Section */}
                  {info.other.detail && (
                    <section className={styles.section}>
                      <h3>{info.other.sectionTitle}</h3>
                      <p>{info.other.detail}</p>
                    </section>
                  )}
      </div>
    </div>
  );
});

export default Template40;

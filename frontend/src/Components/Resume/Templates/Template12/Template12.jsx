import React, { forwardRef } from "react";
import styles from "./Template12.module.css";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Template12 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [], // Standardized naming
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other: information[sections.other]?.detail || "",
  };

  // Helper function to extract the year from a date
  const extractYear = (date) => (date ? new Date(date).getFullYear() : "Present");

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resume} style={{ "--theme-color": activeColor }} ref={ref}>
        {/* Header - Name, Title, and Socials */}
        <div className={styles.header}>
          <h1 className={styles.name}>{info.basicInfo.name}</h1>
          <h2 className={styles.title}>{info.basicInfo.title}</h2>
          <div className={styles.socials}>
            {info.basicInfo.email && <p><FaEnvelope /> {info.basicInfo.email}</p>}
            {info.basicInfo.phone && <p><FaPhone /> {info.basicInfo.phone}</p>}
            {info.basicInfo.linkedin && (
              <p><FaLinkedin /> <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a></p>
            )}
            {info.basicInfo.github && (
              <p><FaGithub /> <a href={info.basicInfo.github}>{info.basicInfo.github}</a></p>
            )}
          </div>
        </div>

        <div className={styles.content}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Work Experience */}
            <div className={styles.section}>
              <h3>Experience</h3>
              {info.workExperience.map((job, index) => (
                <div key={index}>
                  <p>
                    <strong>{job.title}</strong> - {job.companyName} (
                    {extractYear(job.startDate)} - {extractYear(job.endDate)})
                  </p>
                  <ul>
                    {job.points?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className={styles.section}>
              <h3>Projects</h3>
              {info.projects.map((project, index) => (
                <div key={index} className={styles.project}>
                  <h4>{project.title}</h4>
                  {project.github && (
                    <p>
                      <strong>GitHub:</strong>{" "}
                      <a href={project.github} target="_blank" rel="noreferrer">
                        {project.github}
                      </a>
                    </p>
                  )}
                  {project.link && (
                    <p>
                      <strong>Live Demo:</strong>{" "}
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {project.link}
                      </a>
                    </p>
                  )}
                  <ul>
                    {project.points?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Achievements */}
            {info.achievements.length > 0 && (
              <div className={styles.section}>
                <h3>Achievements</h3>
                <ul>
                  {info.achievements.map((achievement, index) => <li key={index}>{achievement}</li>)}
                </ul>
              </div>
            )}

            {/* Others */}
            {info.other && (
              <div className={styles.section}>
                <h3>Others</h3>
                <p>{info.other}</p>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Summary */}
            <div className={styles.section}>
              <h3>Summary</h3>
              <p>{info.summary}</p>
            </div>

            {/* Skills */}
            <div className={styles.section}>
              <h3>Skills</h3>
              <div className={styles.skillContainer}>
                {info.skills.map((skill, index) => (
                  <span key={index} className={styles.skillBubble}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className={styles.section}>
              <h3>Education</h3>
              {info.education.map((edu, index) => (
                <p key={index}>
                  <strong>{edu.title}</strong> <br />
                  {edu.college} ({extractYear(edu.startDate)} - {extractYear(edu.endDate)})
                </p>
              ))}
            </div>

            {/* Languages */}
            <div className={styles.section}>
              <h3>Languages</h3>
              <div className={styles.languageContainer}>
                {info.languages.map((language, index) => (
                  <span key={index} className={styles.languageBubble}>{language}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Template12;

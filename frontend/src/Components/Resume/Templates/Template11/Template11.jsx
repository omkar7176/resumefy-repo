import React, { forwardRef } from "react";
import styles from "./Template11.module.css";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Template11 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExp: information[sections.workExp]?.details || [],
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

  // Extract first letter of the name
  const initial = info.basicInfo.name ? info.basicInfo.name.charAt(0).toUpperCase() : "";

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resume} style={{ "--theme-color": activeColor }} ref={ref}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.circle} style={{ backgroundColor: activeColor }}>
            <p className={styles.bigLetter}>{initial}</p>
          </div>

          {/* Social Links */}
          <div className={styles.socials}>
            {info.basicInfo.phone && (
              <p>
                <FaPhone /> {info.basicInfo.phone}
              </p>
            )}
            {info.basicInfo.email && (
              <p>
                <FaEnvelope /> {info.basicInfo.email}
              </p>
            )}
            {info.basicInfo.github && (
              <p>
                <FaGithub /> <a href={info.basicInfo.github}>{info.basicInfo.github}</a>
              </p>
            )}
            {info.basicInfo.linkedin && (
              <p>
                <FaLinkedin /> <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a>
              </p>
            )}
          </div>

          {/* Education */}
          <div className={styles.section}>
            <h2>Education</h2>
            {info.education.map((edu, index) => (
              <p key={index}>
                <strong>{edu.title}</strong> <br />
                {edu.college} ({extractYear(edu.startDate)} - {extractYear(edu.endDate)})
              </p>
            ))}
          </div>

          {/* Skills */}
          <div className={styles.section}>
            <h3>Skills</h3>
            <div className={styles.ellipticalContainer}>
              {info.skills.map((skill, index) => (
                <span key={index} className={styles.ellipticalBox}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={styles.section}>
            <h3>Languages</h3>
            <div className={styles.ellipticalContainer}>
              {info.languages.map((language, index) => (
                <span key={index} className={styles.ellipticalBox}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
        <hr className={styles.verticalDottedLine} />

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <h1>{info.basicInfo.name}</h1>
          <h2>{info.basicInfo.title}</h2>

          {/* Summary */}
          <div className={styles.section}>
            <h3>Summary</h3>
            <p>{info.summary}</p>
          </div>

          {/* Work Experience */}
          <div className={styles.section}>
            <h2>Experience</h2>
            {info.workExp.map((job, index) => (
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
          <div className={styles.section}>
            <h3>Achievements</h3>
            <ul>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Others */}
          {info.other && (
            <div className={styles.section}>
              <h3>Others</h3>
              <p>{info.other}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Template11;

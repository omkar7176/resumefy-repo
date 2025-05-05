

import React, { forwardRef } from "react";
import styles from "./Template38.module.css";

const Template38 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    projects: information[sections.project]?.details || [],
    summary: information[sections.summary]?.detail || "",
    other:
      information[sections.other]?.points ||
      (information[sections.other]?.detail ? [information[sections.other].detail] : []),
    languages: information[sections.languages]?.points || [],
  };

  const hasData =
    info.basicInfo.name ||
    info.basicInfo.title ||
    info.basicInfo.email ||
    info.basicInfo.phone ||
    info.basicInfo.linkedin ||
    info.basicInfo.github ||
    info.summary ||
    info.workExperience.length ||
    info.education.length ||
    info.skills.length ||
    info.achievements.length ||
    info.projects.length ||
    info.other.length ||
    info.languages.length;

  if (!hasData) return null;

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* Header Section */}
        <header className={styles.header}>
          {info.basicInfo.name && <h1>{info.basicInfo.name}</h1>}
          {info.basicInfo.title && (
            <p className={styles.title}>{info.basicInfo.title}</p>
          )}

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            {info.basicInfo.email && <span>✉ {info.basicInfo.email} | </span>}
            {info.basicInfo.phone && <span>{info.basicInfo.phone} | </span>}
            {info.basicInfo.linkedin && (
              <span>
                🔗 <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> |
              </span>
            )}
            {info.basicInfo.github && (
              <span>
                <a href={info.basicInfo.github} target="_blank" rel="noreferrer">GitHub</a>
              </span>
            )}
          </div>
          <hr className={styles.line} />
        </header>

        {/* Summary */}
        {info.summary && (
          <section>
            <h2>Summary</h2>
            <p>{info.summary}</p>
          </section>
        )}

        {/* Experience */}
        {info.workExperience.length > 0 && (
          <section>
            <h2>Experience</h2>
            {info.workExperience.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <strong className={styles.experienceTitle}>{exp.title}</strong> - {exp.companyName} ({exp.startDate} - {exp.endDate})
                <ul>
                  {exp.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Education Section */}
        {info.education.length > 0 && (
          <section>
            <h2>Education</h2>
            {info.education.map((edu, index) => (
              <div key={index} className={styles.educationItem}>
                <strong className={styles.educationTitle}>{edu.title}</strong> - {edu.college} ({edu.startDate} - {edu.endDate})
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {info.skills.length > 0 && (
          <section className={styles.skillsSection}>
            <h2>Skills</h2>
            <ul className={styles.skillList}>
              {info.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Achievements */}
        {info.achievements.length > 0 && (
          <section>
            <h2>Achievements</h2>
            <ul>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Projects */}
        {info.projects.length > 0 && (
          <section>
            <h2>Projects</h2>
            {info.projects.map((project, index) => (
              <div key={index} className={styles.project}>
                <h4>{project.title}</h4>
                {project.github && (
                  <p>
                    <strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noreferrer">{project.github}</a>
                  </p>
                )}
                {project.link && (
                  <p>
                    <strong>Live Demo:</strong> <a href={project.link} target="_blank" rel="noreferrer">{project.link}</a>
                  </p>
                )}
                <ul>
                  {project.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Languages */}
        {info.languages.length > 0 && (
          <section>
            <h2>Languages</h2>
            <ul>
              {info.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Other Section */}
        {info.other.length > 0 && (
          <section>
            <h2>Other</h2>
            <ul>
              {info.other.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <hr className={styles.bottomLine} />
      </div>
    </div>
  );
});

export default Template38;

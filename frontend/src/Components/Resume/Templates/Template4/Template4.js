import React, { forwardRef } from "react";
import styles from "./Template4.module.css";

const Template4 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    projects: information[sections.project]?.details || [],
    summary: information[sections.summary]?.detail || "",
    others: information[sections.other]?.detail || "",
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1>{info.basicInfo.name || "Your Name"}</h1>
          <p className={styles.title}>{info.basicInfo.title || "Your Position"}</p>
          
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            {info.basicInfo.email && <span>✉ {info.basicInfo.email}</span>}
            {info.basicInfo.phone && <span>📞 {info.basicInfo.phone}</span>}
            {info.basicInfo.linkedin && (
              <span>
                <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </span>
            )}
            {info.basicInfo.github && (
              <span>
                <a href={info.basicInfo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </span>
            )}
          </div>
        </header>

        {/* Summary */}
        {info.summary && (
          <section className={styles.section}>
            <h2>Summary</h2>
            <p>{info.summary}</p>
          </section>
        )}

        {/* Experience */}
        {info.workExperience.length > 0 && (
          <section className={styles.section}>
            <h2>Experience</h2>
            {info.workExperience.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.jobTitle}>
                  <strong>{exp.title}</strong> - {exp.companyName}
                </div>
                <div className={styles.duration}>
                  ({exp.startDate} - {exp.endDate})
                </div>
                <ul>
                  {exp.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {info.education.length > 0 && (
          <section className={styles.section}>
            <h2>Education</h2>
            {info.education.map((edu, index) => (
              <div key={index} className={styles.educationItem}>
                <strong>{edu.title}</strong>
                <div>{edu.college}</div>
                <div className={styles.duration}>
                  ({edu.startDate} - {edu.endDate})
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {info.skills.length > 0 && (
          <section className={styles.section}>
            <h2>Skills</h2>
            <div className={styles.skillsList}>
              {info.skills.map((skill, index) => (
                <span key={index} className={styles.skillItem}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        {info.achievements.length > 0 && (
          <section className={styles.section}>
            <h2>Achievements</h2>
            <ul className={styles.achievementsList}>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Projects */}
        {info.projects.length > 0 && (
          <section className={styles.section}>
            <h2>Projects</h2>
            {info.projects.map((project, index) => (
              <div key={index} className={styles.projectItem}>
                <h3>{project.title}</h3>
                {project.github && (
                  <div className={styles.projectLink}>
                    GitHub: <a href={project.github}>{project.github}</a>
                  </div>
                )}
                {project.link && (
                  <div className={styles.projectLink}>
                    Live Demo: <a href={project.link}>{project.link}</a>
                  </div>
                )}
                {Array.isArray(project.overview) && ( // Validate overview is an array
                  <ul>
                    {project.overview.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Others */}
        {info.others && (
          <section className={styles.section}>
            <h2>Other Information</h2>
            <div className={styles.otherContent}>
              <p>{info.others}</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
});

export default Template4;
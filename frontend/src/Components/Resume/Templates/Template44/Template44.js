import React, { forwardRef } from "react";
import styles from "./Template44.module.css";

const Template44 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    projects: information[sections.project]?.details || [],
    summary: information[sections.summary]?.detail || "",
    languages: information[sections.languages]?.points || [],
    other: {
      sectionTitle: information[sections.other]?.sectionTitle || "Other",
      detail: information[sections.other]?.detail || "",
    },
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1>{info.basicInfo.name || "Your Name"}</h1>
          <p className={styles.title}>
            {info.basicInfo.title || "Your Position"}
          </p>
          <div className={styles.contactInfo}>
            {info.basicInfo.email && <span>✉️ {info.basicInfo.email} | </span>}
            {info.basicInfo.phone && <span>📞 {info.basicInfo.phone} | </span>}
            {info.basicInfo.linkedin && (
              <span>
                🔗{" "}
                <a
                  href={info.basicInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
              </span>
            )}
            {info.basicInfo.github && (
              <span>
                🔗{" "}
                <a
                  href={info.basicInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </span>
            )}
          </div>
          <hr className={styles.line} />
        </header>

        {/* Skills */}
        {info.skills.length > 0 && (
          <section className={styles.section}>
            <h2>Skills</h2>
            <ul className={styles.skillsList}>
              {info.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {info.languages.length > 0 && (
          <section className={styles.section}>
            <h2>Languages</h2>
            <ul>
              {info.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Other Section */}
        {info.other.detail && (
          <section className={styles.section}>
            <h2>{info.other.sectionTitle}</h2>
            <p>{info.other.detail}</p>
          </section>
        )}

        {/* Summary */}
        {info.summary && (
          <section className={styles.section}>
            <h2>Summary</h2>
            <p>{info.summary}</p>
          </section>
        )}

        {/* Work Experience */}
        {info.workExperience.length > 0 && (
          <section className={styles.section}>
            <h2>Experience</h2>
            {info.workExperience.map((exp, index) => (
              <div key={index}>
                <strong>{exp.title}</strong> - {exp.companyName} ({exp.startDate} - {exp.endDate})
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
              <p key={index}>
                <strong>{edu.title}</strong> <br />
                {edu.college} <br /> ({edu.startDate} - {edu.endDate})
              </p>
            ))}
          </section>
        )}

        {/* Projects */}
        {info.projects.length > 0 && (
          <section className={styles.section}>
            <h2>Projects</h2>
            {info.projects.map((project, index) => (
              <div key={index} className={styles.project}>
                <h4>{project.title}</h4>
                {(project.github || project.link) && (
                  <p>
                    {project.github && (
                      <>
                        <strong>GitHub:</strong>{" "}
                        <a href={project.github} target="_blank" rel="noreferrer">
                          {project.github}
                        </a>
                      </>
                    )}
                    {project.github && project.link && " | "}
                    {project.link && (
                      <>
                        <strong>Live Demo:</strong>{" "}
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {project.link}
                        </a>
                      </>
                    )}
                  </p>
                )}
                {project.overview && <p>{project.overview}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Achievements */}
        {info.achievements.length > 0 && (
          <section className={styles.section}>
            <h2>Achievements</h2>
            <ul>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
});

export default Template44;

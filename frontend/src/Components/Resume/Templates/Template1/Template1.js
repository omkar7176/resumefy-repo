import React, { forwardRef } from "react";
import styles from "./Template1.module.css";

const Template1 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    projects: information[sections.project]?.details || [],
    summary: information[sections.summary]?.detail || "",
    languages: information[sections.languages]?.points || [],
    others: information[sections.other]?.detail || "",
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

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            {info.basicInfo.email && <span>✉️ {info.basicInfo.email} | </span>}
            {info.basicInfo.phone && <span>📞 {info.basicInfo.phone} | </span>}
            {info.basicInfo.linkedin && (
              <span>
                🔗{" "}
                <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>{" "}
                |{" "}
              </span>
            )}
            {info.basicInfo.github && (
              <span>
                🐙{" "}
                <a href={info.basicInfo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </span>
            )}
          </div>
          <hr className={styles.line} />
        </header>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Skills */}
            {info.skills.length > 0 && (
              <section className={styles.skillsSection}>
                <h2>Skills</h2>
                <ul className={styles.skillList}>
                  {info.skills.slice(0, 10).map((skill, index) => ( // Limit to 10 items
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Education */}
            {info.education.length > 0 && (
              <section>
                <h2>Education</h2>
                {info.education.slice(0, 3).map((edu, index) => ( // Limit to 3 entries
                  <p key={index}>
                    <strong>{edu.title}</strong> <br />
                    {edu.college} <br />
                    ({edu.startDate} - {edu.endDate})
                  </p>
                ))}
              </section>
            )}

            {/* Achievements */}
            {info.achievements.length > 0 && (
              <section>
                <h2>Achievements</h2>
                <ul>
                  {info.achievements.slice(0, 5).map((achievement, index) => ( // Limit to 5 items
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Languages */}
            {info.languages.length > 0 && (
              <section>
                <h2>Languages</h2>
                <ul>
                  {info.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Summary */}
            {info.summary && (
              <section  className={styles.summarySection}>
                <h2>Summary</h2>
                <p>{info.summary}</p>
              </section>
            )}

            {/* Experience */}
            {info.workExperience.length > 0 && (
              <section>
                <h2>Experience</h2>
                {info.workExperience.slice(0, 3).map((exp, index) => ( // Limit to 3 entries
                  <div key={index}>
                    <strong>{exp.title}</strong> - {exp.companyName} (
                    {exp.startDate} - {exp.endDate})
                    <ul>
                      {exp.points?.slice(0, 3).map((point, i) => ( // Limit to 3 points per entry
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )}

            {/* Projects */}
            {info.projects.length > 0 && (
              <section className={styles.section}>
                <h2>Projects</h2>
                {info.projects.slice(0, 2).map((project, index) => ( // Limit to 2 projects
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
                    <p>{project.overview}</p>
                    <ul>
                      {project.points?.slice(0, 3).map((point, i) => ( // Limit to 3 points per project
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )}

            {/* Others */}
            {info.others && (
              <section>
                <h2>Others</h2>
                <p>{info.others}</p>
              </section>
            )}
          </div>
        </div>

        {/* Footer Line */}
        <hr className={styles.bottomLine} />
      </div>
    </div>
  );
});

export default Template1;

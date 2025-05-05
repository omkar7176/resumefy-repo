
import React, { forwardRef } from "react";
import styles from "./Template5.module.css";
import backgroundImage from "./background.jpg";

const Template5 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    summary: information[sections.summary]?.detail || "",
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    education: information[sections.education]?.details || [],
    workExperience: information[sections.workExp]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    certifications: information[sections.certifications]?.points || [],
    projects: information[sections.project]?.details || [],   // ✅ corrected spelling (project)
    other: information[sections.other]?.points || 
      (information[sections.other]?.detail ? [information[sections.other].detail] : []),
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume} style={{ backgroundImage: `url(${backgroundImage})` }}>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            {info.basicInfo.name && <h1 className={styles.name}>{info.basicInfo.name}</h1>}
            {info.basicInfo.title && <p className={styles.title}>{info.basicInfo.title}</p>}
          </div>

          <div className={styles.contactInfo}>
            {info.basicInfo.email && <span>✉️ {info.basicInfo.email}</span>}
            {info.basicInfo.phone && <span>📞 {info.basicInfo.phone}</span>}
            {info.basicInfo.linkedin && (
              <span>🔗 <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span>
            )}
            {info.basicInfo.github && (
              <span>🐙 <a href={info.basicInfo.github} target="_blank" rel="noreferrer">GitHub</a></span>
            )}
          </div>
        </header>

        <hr className={styles.line} />

        <div className={styles.mainContent}>
          {/* Left Column */}
          <div className={styles.leftColumn}>

            {/* Skills */}
            {info.skills.length > 0 && (
              <section className={styles.skillsSection}>
                <h2>Skills</h2>
                <ul className={styles.skillList}>
                  {info.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Languages */}
            {info.languages.length > 0 && (
              <section>
                <h2>Languages</h2>
                <ul className={styles.skillList}>
                  {info.languages.map((lang, idx) => (
                    <li key={idx}>{lang}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Certifications */}
            {info.certifications.length > 0 && (
              <section>
                <h2>Certifications</h2>
                <ul>
                  {info.certifications.map((cert, idx) => (
                    <li key={idx}>{cert}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Education */}
            {info.education.length > 0 && (
              <section>
                <h2>Education</h2>
                {info.education.map((edu, idx) => (
                  <div key={idx} style={{ marginBottom: "10px" }}>
                    <strong>{edu.title}</strong><br />
                    {edu.college}<br />
                    ({edu.startDate} - {edu.endDate || "Present"})
                  </div>
                ))}
              </section>
            )}

            {/* Achievements */}
            {info.achievements.length > 0 && (
              <section>
                <h2>Achievements</h2>
                <ul>
                  {info.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </section>
            )}

          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>

            {/* Summary */}
            {info.summary && (
              <section>
                <h2>Summary</h2>
                <p>{info.summary}</p>
              </section>
            )}

            {/* Work Experience */}
            {info.workExperience.length > 0 && (
              <section>
                <h2>Experience</h2>
                {info.workExperience.map((exp, idx) => (
                  <div key={idx} style={{ marginBottom: "15px" }}>
                    <strong>{exp.title}</strong> - {exp.companyName} ({exp.startDate} - {exp.endDate || "Present"})
                    <ul>
                      {exp.points?.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )}

            {/* Projects */}
            {info.projects.length > 0 && (
              <section>
                <h2>Projects</h2>
                {info.projects.map((project, idx) => (
                  <div key={idx} className={styles.project}>
                    {project.title && <h4>{project.title}</h4>}

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

                    {project.overview?.length > 0 && (
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

            {/* Other Section */}
            {info.other.length > 0 && (
              <section>
                <h2>Other</h2>
                <ul>
                  {info.other.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

          </div>
        </div>

        <hr className={styles.bottomLine} />
      </div>
    </div>
  );
});

export default Template5;

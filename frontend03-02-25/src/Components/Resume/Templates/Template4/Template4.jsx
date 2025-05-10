

import React, { forwardRef } from "react";
import styles from "./Template4.module.css";
import backgroundImage from "./background.jpg";

const Template4 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExp: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other: information[sections.other]?.points ||
      (information[sections.other]?.detail ? [information[sections.other].detail] : []),
    certifications: information[sections.certifications]?.points || [],
    languages: information[sections.languages]?.points || [],
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume} style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Header */}
        <header className={styles.header}>
          {info.basicInfo.name && <h1>{info.basicInfo.name}</h1>}
          {info.basicInfo.title && <p className={styles.title}>{info.basicInfo.title}</p>}
          <div className={styles.contactInfo}>
            {info.basicInfo.email && <span>✉️ {info.basicInfo.email} | </span>}
            {info.basicInfo.phone && <span>📞 {info.basicInfo.phone} | </span>}
            {info.basicInfo.linkedin && (
              <span>🔗 <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> | </span>
            )}
            {info.basicInfo.github && (
              <span>🐙 <a href={info.basicInfo.github} target="_blank" rel="noreferrer">GitHub</a></span>
            )}
          </div>
        </header>

        {/* Summary */}
        {info.summary && (
          <section>
            <div className={styles.sectionTitle}>Summary <span className={styles.line}></span></div>
            <p className={styles.description}>{info.summary}</p>
          </section>
        )}

        {/* Work Experience */}
        {info.workExp.length > 0 && (
          <section>
            <div className={styles.sectionTitle}>Experience <span className={styles.line}></span></div>
            {info.workExp.map((work, index) => (
              <div key={index}>
                <p><strong>{work.title}</strong> - {work.companyName} ({work.startDate} - {work.endDate || "Present"})</p>
                <ul>
                  {work.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {info.education.length > 0 && (
          <section>
            <div className={styles.sectionTitle}>Education <span className={styles.line}></span></div>
            {info.education.map((edu, index) => (
              <div key={index}>
                <p><strong>{edu.title}</strong> - {edu.college}</p>
                <p>({edu.startDate} - {edu.endDate || "Present"})</p>
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {info.skills.length > 0 && (
          <section className={styles.skillsSection}>
            <div className={styles.sectionTitle}>Skills <span className={styles.line}></span></div>
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
            <div className={styles.sectionTitle}>Achievements <span className={styles.line}></span></div>
            <ul>
              {info.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Projects */}
        {info.projects.length > 0 && (
          <section>
            <div className={styles.sectionTitle}>Projects <span className={styles.line}></span></div>
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

                {project.points && (
                  <ul>
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {info.certifications.length > 0 && (
          <section>
            <div className={styles.sectionTitle}>Certifications <span className={styles.line}></span></div>
            <ul>
              {info.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {info.languages.length > 0 && (
          <section>
            <div className={styles.sectionTitle}>Languages <span className={styles.line}></span></div>
            <ul>
              {info.languages.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Other */}
        {info.other.length > 0 && (
          <section>
            <div className={styles.sectionTitle}>Additional Information <span className={styles.line}></span></div>
            <ul>
              {info.other.map((other, idx) => (
                <li key={idx}>{other}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
});

export default Template4;

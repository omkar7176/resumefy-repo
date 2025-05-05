import React, { forwardRef } from "react";
import styles from "./Template29.module.css";

const Template29 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExp: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    certifications: information[sections.certifications]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other:
      information[sections.other]?.points ||
      (information[sections.other]?.detail ? [information[sections.other].detail] : []),
  };

  return (
    <div className={styles.resumeWrapper} ref={ref}>
      {/* Left Panel */}
      <div className={styles.leftPanel}>
        {/* Name */}
        {/* {info.basicInfo?.name && (
          <h1 className={styles.name}>{info.basicInfo.name}</h1>
        )} */}
        {info.basicInfo?.name && (
  <h1 className={styles.name}>{info.basicInfo.name}</h1>
)}

{info.basicInfo?.title && (
  <p className={styles.title}>{info.basicInfo.title}</p>
)}


        {/* Summary */}
        {info.summary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Summary</h2>
            <p className={styles.summary}>
              {info.summary}
            </p>
          </section>
        )}

        {/* Work Experience */}
        {info.workExp.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            {info.workExp.map((work, idx) => (
              <div key={idx} className={styles.entry}>
                <h3 className={styles.entryTitle}>
                  {work.title}, {work.companyName}
                </h3>
                <p className={styles.date}>
                  {work.startDate
                    ? new Date(work.startDate).toISOString().split('T')[0]
                    : "Start"}{" "}
                  -{" "}
                  {work.endDate
                    ? new Date(work.endDate).toISOString().split('T')[0]
                    : "Present"}
                </p>
                {work.points?.length > 0 && (
                  <ul className={styles.bulletList}>
                    {work.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {info.education.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            {info.education.map((edu, idx) => (
              <div key={idx} className={styles.entry}>
                <h3 className={styles.entryTitle}>{edu.title}</h3>
                <p className={styles.date}>
                  {edu.startDate
                    ? new Date(edu.startDate).toISOString().split('T')[0]
                    : "Start"}{" "}
                  -{" "}
                  {edu.endDate
                    ? new Date(edu.endDate).toISOString().split('T')[0]
                    : "Present"}
                </p>
                <p className={styles.institution}>{edu.college}</p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {info.projects.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            {info.projects.map((project, idx) => (
              <div key={idx} className={styles.entry}>
                <h3 className={styles.entryTitle}>{project.title}</h3>
                {project.points?.length > 0 && (
                  <ul className={styles.bulletList}>
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Additional Information (Other) */}
        {info.other.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Other</h2>
            <ul className={styles.bulletList}>
              {info.other.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Right Panel */}
      <div className={styles.rightPanel}>
        {/* Contact */}
        {(info.basicInfo.phone || info.basicInfo.email || info.basicInfo.portfolio ||
          info.basicInfo.location || info.basicInfo.linkedin || info.basicInfo.github) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            {info.basicInfo.phone && <p className={styles.contactItem}>{info.basicInfo.phone}</p>}
            {info.basicInfo.email && (
              <p className={styles.contactItem}>
                <a href={`mailto:${info.basicInfo.email}`}>{info.basicInfo.email}</a>
              </p>
            )}
            {info.basicInfo.portfolio && (
              <p className={styles.contactItem}>
                <a href={info.basicInfo.portfolio} target="_blank" rel="noreferrer">
                  {info.basicInfo.portfolio}
                </a>
              </p>
            )}
          </section>
        )}

        {/* Skills */}
        {info.skills.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <ul className={styles.bulletList}>
              {info.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {info.languages.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Languages</h2>
            <ul className={styles.bulletList}>
              {info.languages.map((language, idx) => (
                <li key={idx}>{language}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Achievements */}
        {info.achievements.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Achievements</h2>
            <ul className={styles.bulletList}>
              {info.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
});

export default Template29;



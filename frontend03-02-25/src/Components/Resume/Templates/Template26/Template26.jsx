
import React, { forwardRef } from "react";
import styles from "./Template26.module.css";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Template26 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExp: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other:
      information[sections.other]?.points ||
      (information[sections.other]?.detail ? [information[sections.other].detail] : []),
  };

  const hasContent = (data) =>
    Array.isArray(data) ? data.length > 0 : typeof data === "string" && data.trim() !== "";

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resume} ref={ref} style={{ "--theme-color": activeColor }}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
          <h2 className={styles.title}>{info.basicInfo.title || "Your Title"}</h2>
          <div className={styles.socials}>
            {info.basicInfo.email && <p><FaEnvelope /> {info.basicInfo.email}</p>}
            {info.basicInfo.phone && <p><FaPhone /> {info.basicInfo.phone}</p>}
            {info.basicInfo.linkedin && (
              <p><FaLinkedin /><a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">{info.basicInfo.linkedin}</a></p>
            )}
            {info.basicInfo.github && (
              <p><FaGithub /><a href={info.basicInfo.github} target="_blank" rel="noreferrer">{info.basicInfo.github}</a></p>
            )}
          </div>
        </header>

        {/* Summary */}
        {hasContent(info.summary) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Summary</h3>
            <p>{info.summary}</p>
          </section>
        )}

        {/* Projects */}
        {hasContent(info.projects) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Projects</h3>
            {info.projects.map((project, index) => (
              <div key={index} className={styles.entry}>
                <strong>{project.title}</strong>
                <ul>
                  {project.points?.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Work Experience */}
        {hasContent(info.workExp) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Work Experience</h3>
            {info.workExp.map((work, index) => (
              <div key={index} className={styles.entry}>
                <strong>{work.title}</strong> – {work.companyName} (
                  {new Date(work.startDate).getFullYear()} -{" "}
                  {work.endDate ? new Date(work.endDate).getFullYear() : "Present"}
                )
                <ul>
                  {work.points?.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {hasContent(info.education) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Education</h3>
            {info.education.map((edu, index) => (
              <div key={index} className={styles.entry}>
                <strong>{edu.title}</strong>
                <p>{edu.college} (
                  {new Date(edu.startDate).getFullYear()} -{" "}
                  {edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"})
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {hasContent(info.skills) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Skills</h3>
            <div className={styles.skillContainer}>
              {info.skills.map((skill, index) => (
                <span key={index} className={styles.skillBubble}>{skill}</span>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {hasContent(info.languages) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Languages</h3>
            <div className={styles.languageContainer}>
              {info.languages.map((lang, index) => (
                <span key={index} className={styles.languageBubble}>{lang}</span>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        {hasContent(info.achievements) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Achievements</h3>
            <ul>
              {info.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Other */}
        {hasContent(info.other) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Other</h3>
            <ul>
              {info.other.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
});

export default Template26;

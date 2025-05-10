
import React, { forwardRef } from "react";
import styles from "./Template24.module.css";
import "../multiPage.css";

const Template24 = forwardRef(({ information, sections, activeColor }, ref) => {
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
      (information[sections.other]?.detail
        ? [information[sections.other].detail]
        : []),
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return isNaN(d.getTime()) ? "" : d.getFullYear();
  };

  const hasContent = (data) =>
    Array.isArray(data) ? data.length > 0 : typeof data === "string" && data.trim() !== "";

  return (
    <div className={styles.resumeContainer}>
      <div
        className={`${styles.resume} multipage`}
        ref={ref}
        style={{ "--theme-color": activeColor }}
      >
        {/* Header Section */}
        <div className={`${styles.header} page-break`}>
          <div className={styles.left}>
            <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
            <h2 className={styles.title}>{info.basicInfo.title || "Your Title"}</h2>
          </div>
          <div className={styles.right}>
            {info.basicInfo.phone && <p><strong>Phone:</strong> {info.basicInfo.phone}</p>}
            {info.basicInfo.email && <p><strong>Email:</strong> {info.basicInfo.email}</p>}
            {info.basicInfo.github && <p><strong>GitHub:</strong> <a href={info.basicInfo.github}>{info.basicInfo.github}</a></p>}
            {info.basicInfo.linkedin && <p><strong>LinkedIn:</strong> <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a></p>}
          </div>
        </div>

        {/* Summary Section */}
        {hasContent(info.summary) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Summary</h3>
            <p>{info.summary}</p>
          </section>
        )}

        {/* Work Experience */}
        {hasContent(info.workExp) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Work Experience</h3>
            {info.workExp.map((work, index) => (
              <div key={index} className={styles.workItem}>
                <strong>{work.title}</strong> - {work.companyName} ({formatDate(work.startDate)} - {formatDate(work.endDate) || "Present"})
                {work.points && (
                  <ul>
                    {work.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Projects Section */}
        {hasContent(info.projects) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Projects</h3>
            {info.projects.map((project, index) => (
              <div key={index} className={styles.projectItem}>
                <strong>{project.title}</strong>
                {project.overview && (
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

        {/* Education Section */}
        {hasContent(info.education) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Education</h3>
            <table className={styles.educationTable}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>School/College</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {info.education.map((edu, index) => (
                  <tr key={index}>
                    <td>{edu.title}</td>
                    <td>{edu.college}</td>
                    <td>{formatDate(edu.startDate)} - {formatDate(edu.endDate) || "Present"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Skills Section */}
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

        {/* Languages Section */}
        {hasContent(info.languages) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Languages</h3>
            <div className={styles.languageContainer}>
              {info.languages.map((language, index) => (
                <span key={index} className={styles.languageBubble}>{language}</span>
              ))}
            </div>
          </section>
        )}

        {/* Achievements Section */}
        {hasContent(info.achievements) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Achievements</h3>
            <ul>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Others Section */}
        {hasContent(info.other) && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Others</h3>
            <ul>
              {info.other.map((other, index) => (
                <li key={index}>{other}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
});

export default Template24;

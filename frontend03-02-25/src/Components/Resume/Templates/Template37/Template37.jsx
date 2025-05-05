

import React, { forwardRef } from "react";
import styles from "./Template37.module.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Template37 = forwardRef(({ information, sections, activeColor }, ref) => {
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

  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.trim().split(" ");
    return nameParts.length > 1
      ? nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase()
      : nameParts[0][0].toUpperCase();
  };

  const hasData =
    info.basicInfo.name ||
    info.basicInfo.title ||
    info.summary ||
    info.workExp.length ||
    info.projects.length ||
    info.achievements.length ||
    info.skills.length ||
    info.languages.length ||
    info.education.length ||
    info.other.length;

  if (!hasData) return null;

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resumeWrapper} ref={ref}>
        <div className={`${styles.resume} multipage`} style={{ "--theme-color": activeColor }}>
          <div className={styles.leftPanel}>
            <div className="leftContent">
              {info.basicInfo.name && (
                <div className={styles.hexagon}>
                  <span>{getInitials(info.basicInfo.name)}</span>
                </div>
              )}
              <div className={styles.contact}>
                {info.basicInfo.email && <p><FaEnvelope className={styles.icon} /><br />{info.basicInfo.email}</p>}
                {info.basicInfo.phone && <p><FaPhone className={styles.icon} /><br />{info.basicInfo.phone}</p>}
                {info.basicInfo.github && <p><FaGithub className={styles.icon} /><br /><a href={info.basicInfo.github}>{info.basicInfo.github}</a></p>}
                {info.basicInfo.linkedin && <p><FaLinkedin className={styles.icon} /><br /><a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a></p>}
              </div>
              {info.skills.length > 0 && (
                <div className={`${styles.section} page-break`}>
                  <h3 className={styles.sideHeader}>Skills</h3>
                  <p>{info.skills.join(", ")}</p>
                </div>
              )}
              {info.languages.length > 0 && (
                <div className={`${styles.section} page-break`}>
                  <h3 className={styles.sideHeader}>Languages</h3>
                  <p>{info.languages.join(", ")}</p>
                </div>
              )}
              {info.education.length > 0 && (
                <div className={`${styles.section} page-break`}>
                  <h3 className={styles.sideHeader}>Education</h3>
                  {info.education.map((edu, index) => (
                    <p key={index}>
                      <strong>{edu.title}</strong><br />
                      {edu.college} ({new Date(edu.startDate).getFullYear()} - {edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"})
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.rightPanel}>
            {info.basicInfo.name && (
              <div className={styles.nameStrip}>
                <h1>{info.basicInfo.name}</h1>
              </div>
            )}
            {info.basicInfo.title && <h2 className={styles.title}>{info.basicInfo.title}</h2>}

            {info.summary && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Summary</h3>
                <p className={styles.justified}>{info.summary}</p>
              </div>
            )}

            {info.workExp.length > 0 && (
              <section className={`${styles.section} page-break`}>
                <h3 className={styles.sectionTitle}>Work Experience</h3>
                {info.workExp.map((work, index) => (
                  <div key={index} className={styles.workItem}>
                    <p>
                      <strong>{work.title}</strong> - {work.companyName} (
                      {new Date(work.startDate).getFullYear()} - {work.endDate ? new Date(work.endDate).getFullYear() : "Present"})
                    </p>
                    <ul>{work.points?.map((point, i) => <li key={i}>{point}</li>)}</ul>
                  </div>
                ))}
              </section>
            )}

            {info.projects.length > 0 && (
              <section className={`${styles.section} page-break`}>
                <h3 className={styles.sectionTitle}>Projects</h3>
                {info.projects.map((project, index) => (
                  <div key={index} className={styles.projectItem}>
                    <p><strong>{project.title}</strong></p>
                    <ul>{project.points?.map((point, i) => <li key={i}>{point}</li>)}</ul>
                  </div>
                ))}
              </section>
            )}

            {info.achievements.length > 0 && (
              <section className={`${styles.section} page-break`}>
                <h3 className={styles.sectionTitle}>Achievements</h3>
                <ul>{info.achievements.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </section>
            )}

            {info.other.length > 0 && (
              <section className={`${styles.section} page-break`}>
                <h3 className={styles.sectionTitle}>Other</h3>
                <ul>{info.other.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Template37;
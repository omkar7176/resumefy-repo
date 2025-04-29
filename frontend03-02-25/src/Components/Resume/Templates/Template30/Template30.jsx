
import React, { forwardRef } from "react";
import styles from "./Template30.module.css";

const Template30 = forwardRef(({ information, sections }, ref) => {
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
    other: information[sections.other]?.points ||
      (information[sections.other]?.detail ? [information[sections.other].detail] : []),
  };

  const renderListSection = (title, items) => {
    if (!items || items.length === 0) return null;
    return (
      <section>
        <h2 className={styles["section-title"]}>{title}</h2>
        <ul className={styles["skill-list"]}>
          {items.map((item, idx) => (
            <li key={idx} className={styles["list-item"]}>{item}</li>
          ))}
        </ul>
      </section>
    );
  };

  const renderMultiPointSection = (title, items) => {
    if (!items || items.length === 0) return null;
    return (
      <section>
        <h2 className={styles["section-title"]}>{title}</h2>
        {items.map((item, idx) => (
          <div key={idx}>
            <h3 className={styles["job-title"]}>
              {item.title} {item.companyName ? `, ${item.companyName}` : ""}
            </h3>
            <p className={styles.date}>
              {item.startDate} - {item.endDate || "Present"}
            </p>
            {item.college && (
              <p className={styles.institution}>{item.college}</p>
            )}
            {item.points?.length > 0 && (
              <ul className={styles["job-list"]}>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    );
  };

  return (
    <div className={styles["resume-container"]} ref={ref}>
      {/* Left Panel */}
      <div className={styles["left-panel"]}>
        <header>
          {info.basicInfo?.name && (
            <h1 className={styles.name}>{info.basicInfo.name}</h1>
          )}
          {info.basicInfo?.title && (
            <p className={styles.title}>{info.basicInfo.title}</p>
          )}
        </header>

        {/* Summary Section Properly */}
        {info.summary && (
          <section>
            <h2 className={styles["section-title"]}>Summary</h2>
            <p className={styles.summary}>{info.summary}</p>
          </section>
        )}

        {/* Work Experience */}
        {renderMultiPointSection("Work Experience", info.workExp)}

        {/* Education */}
        {renderMultiPointSection("Education", info.education)}

        {/* Projects */}
        {info.projects.length > 0 && (
          <section>
            <h2 className={styles["section-title"]}>Projects</h2>
            {info.projects.map((project, idx) => (
              <div key={idx}>
                <h3 className={styles["project-title"]}>{project.title}</h3>
                {project.points?.length > 0 && (
                  <ul className={styles["point-list"]}>
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Right Panel */}
      <div className={styles["right-panel"]}>
        {/* Contact */}
        {(info.basicInfo.phone ||
          info.basicInfo.email ||
          info.basicInfo.portfolio ||
          info.basicInfo.location ||
          info.basicInfo.linkedin ||
          info.basicInfo.github) && (
          <section>
            <h2 className={styles["section-title"]}>Contact</h2>
            {info.basicInfo.location && (
              <p className={styles["contact-info"]}>{info.basicInfo.location}</p>
            )}
            {info.basicInfo.phone && (
              <p className={styles["contact-info"]}>{info.basicInfo.phone}</p>
            )}
            {info.basicInfo.email && (
              <p className={styles["contact-info"]}>
                <a href={`mailto:${info.basicInfo.email}`}>{info.basicInfo.email}</a>
              </p>
            )}
            {info.basicInfo.portfolio && (
              <p className={styles["contact-info"]}>
                <a href={info.basicInfo.portfolio} target="_blank" rel="noreferrer">
                  {info.basicInfo.portfolio}
                </a>
              </p>
            )}
            {info.basicInfo.linkedin && (
              <p className={styles["contact-info"]}>
                <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">
                  {info.basicInfo.linkedin}
                </a>
              </p>
            )}
            {info.basicInfo.github && (
              <p className={styles["contact-info"]}>
                <a href={info.basicInfo.github} target="_blank" rel="noreferrer">
                  {info.basicInfo.github}
                </a>
              </p>
            )}
          </section>
        )}

        {/* Skills */}
        {renderListSection("Skills", info.skills)}

        {/* Languages */}
        {renderListSection("Languages", info.languages)}

        {/* Certifications */}
        {renderListSection("Certifications", info.certifications)}

        {/* Achievements */}
        {renderListSection("Achievements", info.achievements)}

        {/* Additional Information */}
        {renderListSection("Other", info.other)}
      </div>
    </div>
  );
});

export default Template30;

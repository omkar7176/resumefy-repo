
import React, { forwardRef } from "react";
import styles from "./Template34.module.css";

const Template34 = forwardRef(({ information, sections }, ref) => {
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
      (information[sections.other]?.detail
        ? [information[sections.other].detail]
        : []),
  };

  return (
    <div ref={ref} className={styles["resume-container"]}>
      {/* Left Panel */}
      <div className={styles["left-panel"]}>
        <header>
          <h1 className={styles.name}>{info.basicInfo.name}</h1>
          <h4 className={styles.title}>{info.basicInfo.title}</h4>
          {info.summary && <p className={styles.summary}>{info.summary}</p>}
        </header>

        {info.workExp.length > 0 && (
          <section>
            <h2 className={styles["section-title"]}>Work Experience</h2>
            {info.workExp.map((work, index) => (
              <div key={index}>
                <h3 className={styles["job-title"]}>
                  {work.title}, {work.companyName}
                </h3>
                <p className={styles.date}>
                  {work.startDate} - {work.endDate || "Present"}
                </p>
                <ul className={styles["job-list"]}>
                  {work.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {info.education.length > 0 && (
          <section>
            <h2 className={styles["section-title"]}>Educational Background</h2>
            {info.education.map((edu, index) => (
              <div key={index}>
                <h3 className={styles["degree-title"]}>{edu.title}</h3>
                <p className={styles.date}>
                  {edu.startDate} - {edu.endDate || "Present"}
                </p>
                <p className={styles.institution}>{edu.college}</p>
                {edu.points?.length > 0 && (
                  <ul className={styles["point-list"]}>
                    {edu.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {info.projects.length > 0 && (
          <section>
            <h2 className={styles["section-title"]}>Projects</h2>
            {info.projects.map((project, index) => (
              <div key={index}>
                <h3 className={styles["project-title"]}>{project.title}</h3>
                <ul className={styles["point-list"]}>
                  {project.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {info.achievements.length > 0 && (
          <section>
            <h2 className={styles["section-title"]}>Achievements</h2>
            <ul className={styles["point-list"]}>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Right Panel */}
      <div className={styles["right-panel"]}>
        {info.basicInfo.location || info.basicInfo.phone || info.basicInfo.email || info.basicInfo.github || info.basicInfo.linkedin ? (
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
            {(info.basicInfo.github || info.basicInfo.linkedin) && (
              <p className={styles["contact-info"]}>
                {info.basicInfo.github && <a href={info.basicInfo.github}>GitHub</a>}
                {info.basicInfo.github && info.basicInfo.linkedin && " | "}
                {info.basicInfo.linkedin && <a href={info.basicInfo.linkedin}>LinkedIn</a>}
              </p>
            )}
          </section>
        ) : null}

        {info.skills.length > 0 && (
          <section>
            <h2 className={styles["section-title"]}>Skills</h2>
            <ul className={styles["skill-list"]}>
              {info.skills.map((skill, index) => (
                <li key={index} className={styles["skill-item"]}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        )}
<section className={`${styles["languages-section"]} languages-section`}>
  <h2 className={styles["section-title"]}>Languages</h2>
  <ul className={styles["skill-list"]}>
    {info.languages.map((language, index) => (
      <li key={index}>{language}</li>
    ))}
  </ul>
</section>


        {info.certifications.length > 0 && (
          <section>
            <h2 className={styles["section-title"]}>Certifications</h2>
            <ul className={styles["certification-list"]}>
              {info.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>
        )}

        {info.other.length > 0 && (
          <section>
            <h2 className={styles["section-title"]}>Additional Information</h2>
            <ul className={styles["info-list"]}>
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

export default Template34;

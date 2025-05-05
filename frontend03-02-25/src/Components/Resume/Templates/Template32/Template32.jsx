
import React, { forwardRef } from "react";
import styles from "./Template32.module.css";

const Template32 = forwardRef(({ information, sections }, ref) => {
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
    <div className={styles.resumeContainer} ref={ref}>
      <header className={styles.resumeHeader}>
        {info.basicInfo.name && <h1>{info.basicInfo.name}</h1>}
        {info.summary && <p className={styles.summary}>{info.summary}</p>}
      </header>
      <div className={styles.panel}>
        <div className={styles.leftPanel}>
          {(info.basicInfo.location || info.basicInfo.phone || info.basicInfo.email || info.basicInfo.github || info.basicInfo.linkedin) && (
            <section>
              <h2>CONTACT</h2>
              {info.basicInfo.location && <p>{info.basicInfo.location}</p>}
              {info.basicInfo.phone && <p>{info.basicInfo.phone}</p>}
              {info.basicInfo.email && (
                <p><a href={`mailto:${info.basicInfo.email}`}>{info.basicInfo.email}</a></p>
              )}
              <p>
                {info.basicInfo.github && <a href={info.basicInfo.github}>GitHub</a>}
                {info.basicInfo.github && info.basicInfo.linkedin && " | "}
                {info.basicInfo.linkedin && <a href={info.basicInfo.linkedin}>LinkedIn</a>}
              </p>
            </section>
          )}

          {info.skills.length > 0 && (
            <section>
              <h2>SKILLS</h2>
              <ul>
                {info.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </section>
          )}

          {info.certifications.length > 0 && (
            <section>
              <h2>CERTIFICATIONS</h2>
              <ul>
                {info.certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </section>
          )}

          {info.languages.length > 0 && (
            <section>
              <h2>LANGUAGES</h2>
              <ul>
                {info.languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </section>
          )}

          {info.achievements.length > 0 && (
            <section>
              <h2>ACHIEVEMENTS</h2>
              <ul>
                {info.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </section>
          )}

          {info.other.length > 0 && (
            <section>
              <h2>OTHER</h2>
              <ul>
                {info.other.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className={styles.rightPanel}>
          {info.workExp.length > 0 && (
            <section>
              <h2>WORK EXPERIENCE</h2>
              {info.workExp.map((work, i) => (
                <div key={i}>
                  <h3>{work.title}, {work.companyName}</h3>
                  <p className={styles.date}>{work.startDate} - {work.endDate || "Present"}</p>
                  <ul>
                    {work.points?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {info.education.length > 0 && (
            <section>
              <h2>EDUCATIONAL BACKGROUND</h2>
              {info.education.map((edu, i) => (
                <div key={i}>
                  <h3>{edu.title}</h3>
                  <p className={styles.date}>{edu.startDate} - {edu.endDate || "Present"}</p>
                  <p className={styles.college}>{edu.college}</p>
                </div>
              ))}
            </section>
          )}

          {info.projects.length > 0 && (
            <section>
              <h2>PROJECTS</h2>
              {info.projects.map((project, i) => (
                <div key={i}>
                  <h3>{project.title}</h3>
                  <ul>
                    {project.points?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
});

export default Template32;
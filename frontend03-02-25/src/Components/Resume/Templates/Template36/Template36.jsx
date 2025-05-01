

import React, { forwardRef } from "react";
import styles from "./Template36.module.css";

const Template36 = forwardRef(({ information, sections }, ref) => {
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
    <div ref={ref} className={styles.resumeContainer}>
      <header className={styles.resumeHeader}>
        <h1>{info.basicInfo.name}</h1>
        <h4>{info.basicInfo.title}</h4>
        {info.summary && <p>{info.summary}</p>}
      </header>

      <div className={styles.panel}>
        <div className={styles.leftPanel}>
          <section>
            <h2>Contact</h2>
            {info.basicInfo.location && <p>{info.basicInfo.location}</p>}
            {info.basicInfo.phone && <p>{info.basicInfo.phone}</p>}
            {info.basicInfo.email && (
              <p>
                <a href={`mailto:${info.basicInfo.email}`}>{info.basicInfo.email}</a>
              </p>
            )}
            {(info.basicInfo.github || info.basicInfo.linkedin) && (
              <p>
                {info.basicInfo.github && <a href={info.basicInfo.github}>GitHub</a>}
                {info.basicInfo.github && info.basicInfo.linkedin && " | "}
                {info.basicInfo.linkedin && (
                  <a href={info.basicInfo.linkedin}>LinkedIn</a>
                )}
              </p>
            )}
          </section>

          {info.skills.length > 0 && (
            <section>
              <h2>Skills</h2>
              <div>
                <h3>Technical Skills</h3>
                <ul>
                  {info.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {info.languages.length > 0 && (
            <section>
              <h2>Languages</h2>
              <ul>
                {info.languages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </section>
          )}

          {info.certifications.length > 0 && (
            <section>
              <h2>Certifications</h2>
              <ul>
                {info.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>
          )}

          {info.other.length > 0 && (
            <section>
              <h2>Additional Information</h2>
              <ul>
                {info.other.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className={styles.rightPanel}>
          {info.workExp.length > 0 && (
            <section>
              <h2>Work Experience</h2>
              {info.workExp.map((exp, index) => (
                <div key={index}>
                  <h3>{exp.title}, {exp.companyName}</h3>
                  <p className={styles.date}>{exp.startDate} - {exp.endDate || "Present"}</p>
                  <ul>
                    {exp.points?.map((point, idx) => <li key={idx}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {info.projects.length > 0 && (
            <section>
              <h2>Projects</h2>
              {info.projects.map((project, index) => (
                <div key={index}>
                  <h3>{project.title}</h3>
                  <ul>
                    {project.points?.map((point, idx) => <li key={idx}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {info.education.length > 0 && (
            <section>
              <h2>Educational Background</h2>
              {info.education.map((edu, index) => (
                <div key={index}>
                  <h3>{edu.title}</h3>
                  <p className={styles.date}>{edu.startDate} - {edu.endDate || "Present"}</p>
                  <p>{edu.college}</p>
                </div>
              ))}
            </section>
          )}
          {info.achievements.length > 0 && (
  <section>
    <h2>Achievements</h2>
    <ul>
      {info.achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </section>
)}

        </div>
      </div>
    </div>
  );
});

export default Template36;

import { forwardRef } from "react"
import styles from "./Template3.module.css"

const Template3 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    projects: information[sections.project]?.details || [],
    summary: information[sections.summary]?.detail || "",
    languages: information[sections.languages]?.points || [],
    other: information[sections.other]?.detail || "",
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>{info.basicInfo.name || "Your Name"}</h1>
            <p className={styles.title}>{info.basicInfo.title || "Your Position"}</p>
          </div>
          <div className={styles.contactInfo}>
            {info.basicInfo.email && (
              <span>
                <span>✉️</span> {info.basicInfo.email}
              </span>
            )}
            {info.basicInfo.phone && (
              <span>
                <span>📞</span> {info.basicInfo.phone}
              </span>
            )}
            {info.basicInfo.linkedin && (
              <span>
                <span>🔗</span>{" "}
                <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </span>
            )}
            {info.basicInfo.github && (
              <span>
                <span>🐙</span>{" "}
                <a href={info.basicInfo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </span>
            )}
          </div>
        </header>

        {/* Summary */}
        <section>
          <div className={styles.sectionTitle}>
            Summary <span className={styles.line}></span>
          </div>
          <p>{info.summary}</p>
        </section>

        {/* Experience */}
        <section>
          <div className={styles.sectionTitle}>
            Experience <span className={styles.line}></span>
          </div>
          {info.workExperience.map((exp, index) => (
            <div key={index}>
              <p>
                <strong>{exp.title}</strong> - {exp.companyName} ({exp.startDate} - {exp.endDate})
              </p>
              <ul>
                {exp.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <div className={styles.sectionTitle}>
            Education <span className={styles.line}></span>
          </div>
          {info.education.map((edu, index) => (
            <p key={index}>
              <strong>{edu.title}</strong> - {edu.college} <br /> ({edu.startDate} - {edu.endDate})
            </p>
          ))}
        </section>

        {/* Skills */}
        <section className={styles.skillsSection}>
          <div className={styles.sectionTitle}>
            Skills <span className={styles.line}></span>
          </div>
          <ul className={styles.skillList}>
            {info.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section>
          <div className={styles.sectionTitle}>
            Achievements <span className={styles.line}></span>
          </div>
          <ul>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section>
          <div className={styles.sectionTitle}>
            Projects <span className={styles.line}></span>
          </div>
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
              {Array.isArray(project.overview) && ( // Validate overview is an array
                <ul>
                  {project.overview.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
        <section>
        <div className={styles.sectionTitle}>
            Languages<span className={styles.line}></span>
          </div>
          <ul>
            {info.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </section>

        {/* Other */}
        <section>
        <div className={styles.sectionTitle}>
            Other <span className={styles.line}></span>
          </div>
          <p>{info.other}</p>
        </section>


        {/* Footer */}
        <div className={styles.footer}>Template 3</div>
      </div>
    </div>
  )
})

export default Template3;

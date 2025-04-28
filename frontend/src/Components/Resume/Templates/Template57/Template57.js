import React, { forwardRef } from "react";
import styles from "./Template57.module.css";

const Template57 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    projects: information[sections.project]?.details || [],
    summary: information[sections.summary]?.detail || "",
  };

  // ✅ Extract Date Range Function (Fixed)
  const extractDateRange = (start, end) => {
    return `${start ? start : ""}${end ? " - " + end : " - Present"}`;
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* ✅ Header Section */}
        <header className={styles.header}>
          <h1>{info.basicInfo.name || "Your Name"}</h1>
          <p className={styles.title}>
            {info.basicInfo.title || "Your Position"}
          </p>

          {/* ✅ Contact Info in One Line */}
          <div className={styles.contactInfo}>
            {info.basicInfo.email && <span>✉ {info.basicInfo.email} | </span>}
            {info.basicInfo.phone && <span>📞 {info.basicInfo.phone} | </span>}
            {info.basicInfo.linkedin && (
              <span>
                🔗{" "}
                <a
                  href={info.basicInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |
              </span>
            )}
            {info.basicInfo.github && (
              <span>
                💻{" "}
                <a
                  href={info.basicInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </span>
            )}
          </div>
          <hr className={styles.line} />
        </header>

        {/* ✅ Summary Section */}
        {info.summary && (
          <section>
            <h2>Summary</h2>
            <p>{info.summary}</p>
          </section>
        )}

        {/* ✅ Experience Section */}
        {info.workExperience.length > 0 && (
          <section>
            <h2>Experience</h2>
            {info.workExperience.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <strong>{exp.title}</strong> - {exp.companyName} (
                {extractDateRange(exp.startDate, exp.endDate)})
                <ul>
                  {exp.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* ✅ Education Section */}
        {info.education.length > 0 && (
          <section>
            <h2 className={styles.educationTitle}>Education</h2>
            {info.education.map((edu, index) => (
              <p key={index} className={styles.educationItem}>
                <strong className={styles.educationCollege}>{edu.title}</strong>{" "}
                -{" "}
                <span className={styles.educationCollege}> {edu.college} </span>
                <br /> ({extractDateRange(edu.startDate, edu.endDate)})
              </p>
            ))}
          </section>
        )}

        {/* ✅ Skills Section */}
        {info.skills.length > 0 && (
          <section className={styles.skillsSection}>
            <h2>Skills</h2>
            <ul className={styles.skillList}>
              {info.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {/* ✅ Achievements Section */}
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

        {/* ✅ Projects Section */}
        {info.projects.length > 0 && (
          <section>
            <h2>Projects</h2>
            {info.projects.map((project, index) => (
              <div key={index} className={styles.project}>
                <h4>{project.title}</h4>
                {project.github && (
                  <p>
                    <strong className={styles.projectTitle}>GitHub:</strong>{" "}
                    <a href={project.github} target="_blank" rel="noreferrer">
                      {project.github}
                    </a>
                  </p>
                )}
                {project.link && (
                  <p>
                    <strong className={styles.projectTitle}>Live Demo:</strong>{" "}
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.link}
                    </a>
                  </p>
                )}
                <ul>
                  {project.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* ✅ Bottom Line */}
        <hr className={styles.bottomLine} />
      </div>
    </div>
  );
});

export default Template57;

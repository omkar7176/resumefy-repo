import React, { forwardRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import the LinkedIn and GitHub icons
import styles from "./Template53.module.css";

const Template53 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    projects: information[sections.project]?.details || [],
    summary: information[sections.summary]?.detail || "",
    other: information[sections.other]?.detail || "",
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
          <p className={styles.title}>
            {info.basicInfo.title || "Your Position"}
          </p>
          <div className={styles.contactInfo}>
            {info.basicInfo.email && <span>✉️ {info.basicInfo.email} | </span>}
            {info.basicInfo.phone && <span>📞 {info.basicInfo.phone} | </span>}
            {info.basicInfo.linkedin && (
              <span>
                <FaLinkedin />{" "}
                <a
                  href={info.basicInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
              </span>
            )}
            {info.basicInfo.github && (
              <span>
                <FaGithub />{" "}
                <a
                  href={info.basicInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </span>
            )}
          </div>
        </header>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Summary Section */}
          <section className={styles.summary}>
            <h2>Summary</h2>
            <p className={styles.summaryParagraph}>{info.summary}</p>
          </section>

          {/* Work Experience Section */}
          <section className={styles.experience}>
            <h2>Experience</h2>
            {info.workExperience.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.experienceContent}>
                  <div className={styles.experienceHeader}>
                    <strong>{exp.title}</strong>
                    <span className={styles.experienceDate}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <div className={styles.experienceCompanyLocation}>
                    <p>
                      {exp.companyName} | {exp.location}
                    </p>
                  </div>
                  <ul className={styles.experiencePoints}>
                    {exp.points?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section className={styles.education}>
            <h2>Education</h2>
            {info.education.map((edu, index) => (
              <div key={index} className={styles.educationItem}>
                <div className={styles.educationContent}>
                  <span className={styles.educationTitleCollege}>
                    <strong>{edu.title}</strong> - {edu.college}
                  </span>
                  <span className={styles.educationDate}>
                    ({edu.startDate} - {edu.endDate})
                  </span>
                </div>
              </div>
            ))}
          </section>

          {/* Projects Section */}
          <section>
          <div className={styles.projectsection}>
          <h2>Projects</h2>
          {info.projects.map((project, index) => (
                    <div key={index} className={styles.projectItem}>
                      <p>
                        <strong>{project.title}</strong>
                      </p>
                      <ul className={styles.bulletList}>
                        {project.points?.map((point, i) => (
                        <li key={i}>{point}</li>
            ))}
           </ul>
                    </div>
                  ))}
          
        </div>
</section>

          {/* Skills Section */}
          <section className={styles.skillsSection}>
            <h2>Skills</h2>
            <ul className={styles.skillList}>
              {info.skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </ul>
          </section>

          {/* Achievements Section */}
          <section className={styles.achievements}>
            <h2>Achievements</h2>
            <ul className={styles.achievementsList}>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>

          <section className={styles.othersection}>
          <h2 className={styles.sectionTitle}>Others</h2>
          <p>{info.other}</p>
        </section>
        </div>
      </div>
    </div>
  );
});

export default Template53;

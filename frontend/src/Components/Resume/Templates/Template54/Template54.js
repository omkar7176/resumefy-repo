import React, { forwardRef } from "react";
import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa"; // Import the LinkedIn and GitHub icons
import styles from "./Template54.module.css";

const Template54 = forwardRef(({ information, sections, activeColor }, ref) => {
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
          <div className={styles.headerInfo}>
            <h1 className={styles.name}>
              {info.basicInfo.name || "Your Name"}
            </h1>
            <p className={styles.title}>
              {info.basicInfo.title || "Your Position"}
            </p>
          </div>
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
          <div className={styles.leftColumn}>
            {/* Summary Section */}
            <section className={styles.summarySection}>
              <h2>Summary</h2>
              <p className={styles.summaryParagraph}>{info.summary}</p>
            </section>

            {/* Education Section */}
            <section className={styles.education}>
              <h2>Education</h2>
              {info.education?.map((edu, index) => ( // Ensure info.education is defined
                <div key={index} className={styles.educationItem}>
                  <div className={styles.educationContent}>
                    <div className={styles.educationTitle}>
                      <strong>{edu.title}</strong>{" "}
                    </div>
                    <div className={styles.educationCollege}>{edu.college}</div>
                    <div className={styles.educationDate}>
                      ({edu.startDate} - {edu.endDate}){" "}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Skills Section */}
            <section className={styles.skillsSection}>
              <h2>Skills</h2>
              <ul className={styles.skillList}>
                {info.skills?.map((skill, index) => ( // Ensure info.skills is defined
                  <p key={index}>{skill}</p>
                ))}
              </ul>
            </section>

            {/* Languages Section */}
            <section className={styles.languages}>
              <h2>Languages</h2>
              <ul className={styles.languageList}>
                {info.languages?.map((language, index) => ( // Ensure info.languages is defined
                  <p key={index}>{language}</p>
                ))}
              </ul>
            </section>
          </div>

          <div className={styles.rightColumn}>
            {/* Work Experience Section */}
            <section className={styles.experienceSection}>
              <h2>Experience</h2>
              {info.workExperience?.map((exp, index) => ( // Ensure info.workExperience is defined
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

            {/* Projects Section */}
            <section>
            <div className={styles.projectSection}>
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

            {/* Achievements Section */}
            <section className={styles.achievements}>
              <h2>Achievements</h2>
              <ul className={styles.achievementsList}>
                {info.achievements?.map((achievement, index) => ( // Ensure info.achievements is defined
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </section>

            {/* Others Section */}
            <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Others</h2>
          <p>{info.other}</p>
        </section>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Template54;

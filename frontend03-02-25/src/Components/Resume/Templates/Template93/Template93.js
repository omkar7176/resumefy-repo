import React, { forwardRef ,useState} from "react";
import styles from "./Template93.module.css";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Template93 = forwardRef(({ information, sections, activeColor }, ref) => {
  
    const info = {
        basicInfo: information[sections.basicInfo]?.detail || {},
        workExp: information[sections.workExp]?.details || [],
        education: information[sections.education]?.details || [],
        projects: information[sections.project]?.details || [],
        achievements: information[sections.achievement]?.points || [],
        skills: information[sections.skills]?.points || [],
        languages: information[sections.languages]?.points || [],
        summary: information[sections.summary]?.detail || "",
        other: information[sections.other]?.other || "",
      };
      const initial = info.basicInfo.name ? info.basicInfo.name.charAt(0).toUpperCase() : "";
    
      return (
        <div className={styles.resumeContainer}>
        <div className={styles.resume} style={{ "--theme-color": activeColor }} ref={ref}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.name}>{info.basicInfo.name}</h1>
          <h2 className={styles.title}>{info.basicInfo.title}</h2>
          <div className={styles.socials}>
            {info.basicInfo.email && (
              <p>
                <FaEnvelope /> {info.basicInfo.email}
              </p>
            )}
            {info.basicInfo.phone && (
              <p>
                <FaPhone /> {info.basicInfo.phone}
              </p>
            )}
            {info.basicInfo.linkedin && (
              <p>
                <FaLinkedin />{" "}
                <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">
                  {info.basicInfo.linkedin}
                </a>
              </p>
            )}
            {info.basicInfo.github && (
              <p>
                <FaGithub />{" "}
                <a href={info.basicInfo.github} target="_blank" rel="noreferrer">
                  {info.basicInfo.github}
                </a>
              </p>
            )}
          </div>
        </header>
  
        {/* Sections */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Education</h3>
          {info.education.map((edu, index) => (
            <div key={index} className={styles.entry}>
              <strong>{edu.title}</strong>
              <p>
                {edu.college} | {new Date(edu.startDate).getFullYear()} -{" "}
                {edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"}
              </p>
            </div>
          ))}
        </section>
  
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Projects</h3>
          {info.projects.map((project, index) => (
            <div key={index} className={styles.entry}>
              <strong>{project.title}</strong>
              <p>{project.overview}</p>
              {project.github && (
                <p>
                  GitHub:{" "}
                  <a href={project.github} target="_blank" rel="noreferrer">
                    {project.github}
                  </a>
                </p>
              )}
              {project.link && (
                <p>
                  Live:{" "}
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.link}
                  </a>
                </p>
              )}
              {project.points.length > 0 && (
                <ul>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
  
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          {info.workExp.map((work, index) => (
            <div key={index} className={styles.entry}>
              <strong>{work.title}</strong> - {work.companyName} (
              {new Date(work.startDate).getFullYear()} -{" "}
              {work.endDate ? new Date(work.endDate).getFullYear() : "Present"})
              {work.points.length > 0 && (
                <ul>
                  {work.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
  
         {/* Skills */}
                    <div className={styles.section}>
                      <h3>Skills</h3>
                      <div className={styles.skillContainer}>
                        {info.skills.map((skill, index) => (
                          <span key={index} className={styles.skillBubble}>{skill}</span>
                        ))}
                      </div>
                    </div>


    {/* Languages */}
              <div className={styles.section}>
                <h3>Languages</h3>
                <div className={styles.languageContainer}>
                  {info.languages.map((language, index) => (
                    <span key={index} className={styles.languageBubble}>{language}</span>
                  ))}
                </div>
              </div>
        
  
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Achievements</h3>
          <ul>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Others</h3>
          <p>{info.other}</p>
        </section>


      </div>
      </div>
    );
    });

export default Template93;

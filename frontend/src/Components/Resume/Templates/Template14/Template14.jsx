import React, { forwardRef } from "react"; // Removed 'useState'
import styles from "./Template14.module.css";

const Template14 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [], // Standardized naming
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other: information[sections.other]?.detail || "",
  };

  const extractYear = (date) => (date ? new Date(date).getFullYear() : "Present");

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resume} ref={ref} style={{ "--theme-color": activeColor }}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
        </header>

        {/* Socials */}
        <section className={styles.section}>
          {info.basicInfo.email && <p>Email: {info.basicInfo.email}</p>}
          {info.basicInfo.phone && <p>Phone: {info.basicInfo.phone}</p>}
          {info.basicInfo.linkedin && <p>LinkedIn: {info.basicInfo.linkedin}</p>}
          {info.basicInfo.github && <p>GitHub: {info.basicInfo.github}</p>}
        </section>

        {/* Summary */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Summary</div>
          <p>{info.summary || "Your summary here..."}</p>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Education</div>
          <table className={styles.educationTable}>
            <thead>
              <tr>
                <th>Title</th>
                <th>School/College</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {info.education.map((edu, index) => (
                <tr key={index}>
                  <td>{edu.title}</td>
                  <td>{edu.college}</td>
                  <td>
                    {edu.startDate ? new Date(edu.startDate).getFullYear() : ""} -{" "}
                    {edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Skills & Languages */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Skills & Languages</div>
          <p>
            <strong>Skills: </strong> {info.skills.join(", ") || "N/A"}
          </p>
          <p>
            <strong>Languages: </strong> {info.languages.join(", ") || "N/A"}
          </p>
        </section>

        {/* Work Experience */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Work Experience</div>
          {info.workExperience.map((work, index) => (
            <div key={index} className={styles.workItem}>
              <p>
                <strong>{work.title}</strong> | {work.companyName} | {work.location}
              </p>
              <p>
                {extractYear(work.startDate)} - {extractYear(work.endDate)}
              </p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Projects</div>
          {info.projects.map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <p>
                <strong>{project.title}</strong>
              </p>
              <p>{project.overview}</p>
            </div>
          ))}
        </section>

        {/* Achievements */}
        <section className={styles.section}>
          <div className={styles.sectionTitle}>Achievements</div>
          {info.achievements.map((achievement, index) => (
            <p key={index}>{achievement}</p>
          ))}
        </section>
        {/* others */}
       <section className={styles.section}>
                 <h3 className={styles.sectionTitle}>Others</h3>
                 <p>{info.other}</p>
               </section>
      </div>
    </div>
  );
});

export default Template14;

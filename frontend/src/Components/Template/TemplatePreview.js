import React from "react";
import styles from "./TemplatePreview.module.css";

const TemplatePreview = ({ information }) => {
  const { skills, languages } = information;

  return (
    <div className={styles.container}>
      {/* ...existing code... */}
      {skills?.points?.length > 0 && (
        <section className={styles.noPageBreak}>
          <h3>Skills</h3>
          <ul>
            {skills.points.slice(0, 10).map((skill, index) => ( // Limit to 10 items
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}
      {languages?.points?.length > 0 && (
        <section className={styles.noPageBreak}>
          <h3>Languages</h3>
          <ul>
            {languages.points.slice(0, 5).map((language, index) => ( // Limit to 5 items
              <li key={index}>{language}</li>
            ))}
          </ul>
        </section>
      )}
      {/* ...existing code... */}
    </div>
  );
};

export default TemplatePreview;
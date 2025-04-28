import React from "react";

const Template1 = ({ information }) => {
  const { skills, languages, workExperience } = information;

  return (
    <div>
      {/* ...existing code... */}
      {skills?.points?.length > 0 && (
        <section style={{ pageBreakInside: "avoid" }}>
          <h3>Skills</h3>
          <ul>
            {skills.points.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}
      {languages?.points?.length > 0 && (
        <section style={{ pageBreakInside: "avoid" }}>
          <h3>Languages</h3>
          <ul>
            {languages.points.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </section>
      )}
      {workExperience?.length > 0 && (
        <section style={{ pageBreakInside: "avoid" }}>
          <h3>Experience</h3>
          {workExperience.map((exp, index) => (
            <div key={index}>
              <strong>{exp.title}</strong> - {exp.companyName} (
              {exp.startDate} - {exp.endDate})
              <ul>
                {exp.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
      {/* ...existing code... */}
    </div>
  );
};

export default Template1;
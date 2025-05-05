
// import React, { forwardRef } from "react";
// import styles from "./Template17.module.css";
// import backgroundImage from "./background.png";

// const Template17 = forwardRef(({ information, sections, activeColor }, ref) => {
//   const info = {
//     basicInfo: information[sections.basicInfo]?.detail || {},
//     workExp: information[sections.workExp]?.details || [],
//     education: information[sections.education]?.details || [],
//     projects: information[sections.project]?.details || [],
//     achievements: information[sections.achievement]?.points || [],
//     skills: information[sections.skills]?.points || [],
//     languages: information[sections.languages]?.points || [],
//     summary: information[sections.summary]?.detail || "",
//     other: information[sections.other]?.points || [],
//   };

//   const hasContent = (data) =>
//     Array.isArray(data) ? data.length > 0 : typeof data === "string" ? data.trim() !== "" : false;

//   const formatDate = (date) => {
//     if (!date) return null;
//     const d = new Date(date);
//     return isNaN(d.getTime()) ? null : d.getFullYear();
//   };

//   return (
//     <div className={styles.resumeContainer}>
//       <div
//         className={styles.resume}
//         ref={ref}
//         style={{
//           "--theme-color": activeColor,
//           backgroundImage: `url(${backgroundImage})`,
//         }}
//       >
//         {/* Left Panel */}
//         <div className={styles.leftPanel}>
//           <h1 className={styles.name}>
//             <strong>{info.basicInfo.name || "Your Name"}</strong>
//           </h1>
//           <h2 className={styles.title}>{info.basicInfo.title || "Your Title"}</h2>
//           <br />

//           {(info.basicInfo.email || info.basicInfo.phone || info.basicInfo.linkedin || info.basicInfo.github) && (
//             <div className={styles.section}>
//               <h3>Contact</h3>
//               {info.basicInfo.email && (
//                 <p>Email: <a href={`mailto:${info.basicInfo.email}`}>{info.basicInfo.email}</a></p>
//               )}
//               {info.basicInfo.phone && (
//                 <p>Phone: <a href={`tel:${info.basicInfo.phone}`}>{info.basicInfo.phone}</a></p>
//               )}
//               {info.basicInfo.linkedin && (
//                 <p>LinkedIn: <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a></p>
//               )}
//               {info.basicInfo.github && (
//                 <p>GitHub: <a href={info.basicInfo.github}>{info.basicInfo.github}</a></p>
//               )}
//             </div>
//           )}

//           {hasContent(info.skills) && (
//             <div className={styles.section}>
//               <h3>Skills</h3>
//               <div className={styles.skillContainer}>
//                 {info.skills.map((skill, index) => (
//                   <span key={index} className={styles.skillBubble}>
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {hasContent(info.languages) && (
//             <div className={styles.section}>
//               <h3>Languages</h3>
//               <div className={styles.languageContainer}>
//                 {info.languages.map((language, index) => (
//                   <span key={index} className={styles.languageBubble}>
//                     {language}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Right Panel */}
//         <div className={styles.rightPanel}>
//           {hasContent(info.summary) && (
//             <div className={styles.section}>
//               <h3>Summary</h3>
//               <p>{info.summary}</p>
//             </div>
//           )}

//           {hasContent(info.workExp) && (
//             <div className={styles.section}>
//               <h3>Work Experience</h3>
//               {info.workExp.map((work, index) => {
//                 const title = work.title?.trim() || "Title";
//                 const company = work.companyName?.trim() || "Company";
//                 const start = formatDate(work.startDate) || "Start";
//                 const end = formatDate(work.endDate) || "Present";

//                 return (
//                   <div key={index}>
//                     <strong>{title}</strong> | {company} ({start} - {end})
//                     {Array.isArray(work.points) && work.points.length > 0 && (
//                       <ul className={styles.bulletList}>
//                         {work.points.map((point, i) => (
//                           <li key={i}>{point.replace(/^[-•.\s]+/, "")}</li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {hasContent(info.projects) && (
//             <div className={styles.section}>
//               <h3>Projects</h3>
//               {info.projects.map((project, index) => (
//                 <div key={index}>
//                   <strong>{project.title}</strong>
//                   {Array.isArray(project.points) && project.points.length > 0 && (
//                     <ul className={styles.bulletList}>
//                       {project.points.map((point, i) => (
//                         <li key={i}>{point.replace(/^[-•.\s]+/, "")}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           {hasContent(info.education) && (
//             <div className={styles.section}>
//               <h3>Education</h3>
//               {info.education.map((edu, index) => {
//                 const start = formatDate(edu.startDate) || "Start";
//                 const end = formatDate(edu.endDate) || "Present";
//                 return (
//                   <div key={index}>
//                     <strong>{edu.title}</strong> | {edu.college} ({start} - {end})
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {hasContent(info.achievements) && (
//             <div className={styles.section}>
//               <h3>Achievements</h3>
//               <ul className={styles.bulletList}>
//                 {info.achievements.map((achievement, index) => (
//                   <li key={index}>{achievement.replace(/^[-•.\s]+/, "")}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {hasContent(info.other) && (
//             <div className={styles.section}>
//               <h3>Others</h3>
//               <ul className={styles.bulletList}>
//                 {info.other.map((item, index) => (
//                   <li key={index}>{item.replace(/^[-•.\s]+/, "")}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Template17;


import React, { forwardRef } from "react";
import styles from "./Template17.module.css";
import backgroundImage from "./background.png";

const Template17 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExp: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other:
      information[sections.other]?.points ||
      (information[sections.other]?.detail
        ? [information[sections.other].detail]
        : []), // ✅ Added fallback for 'other'
  };

  const hasContent = (data) =>
    Array.isArray(data) ? data.length > 0 : typeof data === "string" ? data.trim() !== "" : false;

  const formatDate = (date) => {
    if (!date) return null;
    const d = new Date(date);
    return isNaN(d.getTime()) ? null : d.getFullYear();
  };

  return (
    <div className={styles.resumeContainer}>
      <div
        className={styles.resume}
        ref={ref}
        style={{
          "--theme-color": activeColor,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Left Panel */}
        <div className={styles.leftPanel}>
          <h1 className={styles.name}>
            <strong>{info.basicInfo.name || "Your Name"}</strong>
          </h1>
          <h2 className={styles.title}>{info.basicInfo.title || "Your Title"}</h2>
          <br />

          {(info.basicInfo.email || info.basicInfo.phone || info.basicInfo.linkedin || info.basicInfo.github) && (
            <div className={styles.section}>
              <h3>Contact</h3>
              {info.basicInfo.email && (
                <p>Email: <a href={`mailto:${info.basicInfo.email}`}>{info.basicInfo.email}</a></p>
              )}
              {info.basicInfo.phone && (
                <p>Phone: <a href={`tel:${info.basicInfo.phone}`}>{info.basicInfo.phone}</a></p>
              )}
              {info.basicInfo.linkedin && (
                <p>LinkedIn: <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a></p>
              )}
              {info.basicInfo.github && (
                <p>GitHub: <a href={info.basicInfo.github}>{info.basicInfo.github}</a></p>
              )}
            </div>
          )}

          {hasContent(info.skills) && (
            <div className={styles.section}>
              <h3>Skills</h3>
              <div className={styles.skillContainer}>
                {info.skills.map((skill, index) => (
                  <span key={index} className={styles.skillBubble}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {hasContent(info.languages) && (
            <div className={styles.section}>
              <h3>Languages</h3>
              <div className={styles.languageContainer}>
                {info.languages.map((language, index) => (
                  <span key={index} className={styles.languageBubble}>
                    {language}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Panel */}
        <div className={styles.rightPanel}>
          {hasContent(info.summary) && (
            <div className={styles.section}>
              <h3>Summary</h3>
              <p>{info.summary}</p>
            </div>
          )}

          {hasContent(info.workExp) && (
            <div className={styles.section}>
              <h3>Work Experience</h3>
              {info.workExp.map((work, index) => {
                const title = work.title?.trim() || "Title";
                const company = work.companyName?.trim() || "Company";
                const start = formatDate(work.startDate) || "Start";
                const end = formatDate(work.endDate) || "Present";

                return (
                  <div key={index}>
                    <strong>{title}</strong> | {company} ({start} - {end})
                    {Array.isArray(work.points) && work.points.length > 0 && (
                      <ul className={styles.bulletList}>
                        {work.points.map((point, i) => (
                          <li key={i}>{point.replace(/^[-•.\s]+/, "")}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {hasContent(info.projects) && (
            <div className={styles.section}>
              <h3>Projects</h3>
              {info.projects.map((project, index) => (
                <div key={index}>
                  <strong>{project.title}</strong>
                  {Array.isArray(project.points) && project.points.length > 0 && (
                    <ul className={styles.bulletList}>
                      {project.points.map((point, i) => (
                        <li key={i}>{point.replace(/^[-•.\s]+/, "")}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {hasContent(info.education) && (
            <div className={styles.section}>
              <h3>Education</h3>
              {info.education.map((edu, index) => {
                const start = formatDate(edu.startDate) || "Start";
                const end = formatDate(edu.endDate) || "Present";
                return (
                  <div key={index}>
                    <strong>{edu.title}</strong> | {edu.college} ({start} - {end})
                  </div>
                );
              })}
            </div>
          )}

          {hasContent(info.achievements) && (
            <div className={styles.section}>
              <h3>Achievements</h3>
              <ul className={styles.bulletList}>
                {info.achievements.map((achievement, index) => (
                  <li key={index}>{achievement.replace(/^[-•.\s]+/, "")}</li>
                ))}
              </ul>
            </div>
          )}

          {hasContent(info.other) && (
            <div className={styles.section}>
              <h3>Others</h3>
              <ul className={styles.bulletList}>
                {info.other.map((item, index) => (
                  <li key={index}>{item.replace(/^[-•.\s]+/, "")}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Template17;


import React, { forwardRef } from "react";
import styles from "./Template16.module.css";
import backgroundImage from "./background.png";

const titleCase = (str) =>
  str.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).trim();

const hasContent = (data) =>
  (typeof data.detail === "string" && data.detail.trim() !== "") ||
  (Array.isArray(data.points) && data.points.length > 0) ||
  (Array.isArray(data.details) && data.details.length > 0);

const leftPanelKeys = ["basicInfo", "skills", "education", "languages"];

const Template16 = forwardRef(({ information, sections, activeColor }, ref) => {
  const entries = Object.entries(sections);
  const leftSections = entries.filter(([key]) => leftPanelKeys.includes(key));
  const rightSections = entries.filter(([key]) => !leftPanelKeys.includes(key));
  const basicInfo = information[sections.basicInfo]?.detail || {};

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div
        className={styles.resume}
        style={{
          "--theme-color": activeColor,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* === LEFT PANEL === */}
        <div className={styles.leftPanel}>
          {basicInfo.name && (
            <div className={styles.header}>
              <h1>{basicInfo.name}</h1>
              {basicInfo.title && <p className={styles.title}>{basicInfo.title}</p>}
              <div className={styles.contactInfo}>
                {basicInfo.email && <p>📧 {basicInfo.email}</p>}
                {basicInfo.phone && <p>📞 {basicInfo.phone}</p>}
                {basicInfo.linkedin && (
                  <p>
                    🔗 <a href={basicInfo.linkedin}>LinkedIn</a>
                  </p>
                )}
                {basicInfo.github && (
                  <p>
                    🐙 <a href={basicInfo.github}>GitHub</a>
                  </p>
                )}
              </div>
            </div>
          )}

          {leftSections.map(([key, sectionId]) => {
            if (key === "basicInfo") return null;
            const data = information[sectionId] || {};
            if (!hasContent(data)) return null;

            const heading = data.sectionTitle || titleCase(key);

            return (
              <section key={key} className={styles.section}>
                <h2>{heading}</h2>
                {data.detail && <p>{data.detail}</p>}
                {Array.isArray(data.points) && data.points.length > 0 && (
                  <ul>
                    {data.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}
                {Array.isArray(data.details) &&
                  data.details.map((item, i) => (
                    <div key={i} className={styles.objectItem}>
                      {item.title && <strong>{item.title}</strong>}
                      {item.college && ` — ${item.college}`}
                      {(item.startDate || item.endDate) && (
                        <span>
                          {" "}
                          ({item.startDate || ""} — {item.endDate || ""})
                        </span>
                      )}
                    </div>
                  ))}
              </section>
            );
          })}
        </div>

        {/* === RIGHT PANEL === */}
        <div className={styles.rightPanel}>
          {rightSections.map(([key, sectionId]) => {
            const data = information[sectionId] || {};
            if (!hasContent(data)) return null;

            const heading = data.sectionTitle || titleCase(key);

            return (
              <section key={key} className={styles.section}>
                <h2>{heading}</h2>

                {data.detail && <p>{data.detail}</p>}

                {Array.isArray(data.points) && data.points.length > 0 && (
                  <ul>
                    {data.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}

                {Array.isArray(data.details) &&
                  data.details.map((item, i) => (
                    <div key={i} className={styles.objectItem}>
                      {item.title && <strong>{item.title}</strong>}
                      {item.companyName && ` — ${item.companyName}`}
                      {(item.startDate || item.endDate) && (
                        <span>
                          {" "}
                          ({item.startDate || ""} — {item.endDate || ""})
                        </span>
                      )}
                      {Array.isArray(item.points) && item.points.length > 0 && (
                        <ul>
                          {item.points.map((pt, j) => (
                            <li key={j}>{pt}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Template16;

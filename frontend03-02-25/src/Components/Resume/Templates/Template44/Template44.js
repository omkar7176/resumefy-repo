

// export default Template44;
import React, { forwardRef } from "react";
import styles from "./Template44.module.css";

const Template64 = forwardRef(({ information, sections }, ref) => {
  // Header info
  const basicInfo = information[sections.basicInfo]?.detail || {};

  // Build an ordered list of all other sections (in the order keys appear in sections)
  const sectionEntries = Object.entries(sections).filter(
    ([key]) => key !== "basicInfo"
  );

  // Helper to decide if a section has any content
  const hasContent = (data) =>
    (typeof data.detail === "string" && data.detail.trim() !== "") ||
    (Array.isArray(data.points) && data.points.length > 0) ||
    (Array.isArray(data.details) && data.details.length > 0);

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* === HEADER === */}
        <header className={styles.header}>
          <h1>{basicInfo.name || "Your Name"}</h1>
          <p className={styles.title}>{basicInfo.title || "Your Position"}</p>
          {(basicInfo.email ||
            basicInfo.phone ||
            basicInfo.linkedin ||
            basicInfo.github) && (
            <div className={styles.contactInfo}>
              {basicInfo.email && <span>✉ {basicInfo.email} | </span>}
              {basicInfo.phone && <span>📞 {basicInfo.phone} | </span>}
              {basicInfo.linkedin && (
                <span>
                  🔗{" "}
                  <a
                    href={basicInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                  |
                </span>
              )}
              {basicInfo.github && (
                <span>
                  🐙{" "}
                  <a
                    href={basicInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </span>
              )}
            </div>
          )}
          <hr className={styles.line} />
        </header>

        {/* === DYNAMIC SECTIONS === */}
        {sectionEntries.map(([key, sectionId]) => {
          const data = information[sectionId] || {};
          if (!hasContent(data)) return null;

          // Title case the key for the heading (or use a custom sectionTitle if provided)
          const heading =
            data.sectionTitle ||
            key.charAt(0).toUpperCase() + key.slice(1);

          return (
            <section key={key}>
              <h2>{heading}</h2>

              {/* single-detail */}
              {data.detail && <p>{data.detail}</p>}

              {/* flat bullet list */}
              {Array.isArray(data.points) && data.points.length > 0 && (
                <ul>
                  {data.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              )}

              {/* object-list */}
              {Array.isArray(data.details) &&
                data.details.map((item, i) => (
                  <div key={i} className={styles.objectItem}>
                    {/* common fields */}
                    {item.title && <strong>{item.title}</strong>}
                    {item.companyName && ` — ${item.companyName}`}
                    {(item.startDate || item.endDate) && (
                      <span>
                        {" "}
                        ({item.startDate || ""} — {item.endDate || ""})
                      </span>
                    )}

                    {/* nested bullet list */}
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

        <hr className={styles.bottomLine} />
      </div>
    </div>
  );
});

export default Template64;
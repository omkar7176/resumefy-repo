import React, { forwardRef } from "react";
import styles from "./Template2.module.css";

const Template2 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    coverLetter: information[sections.coverLetter] || { points: [] },
    recipient: information[sections.recipient]?.detail || {},
  };

  return (
    <div className={styles.coverContainer} ref={ref}>
      <div className={styles.coverPage}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
          <p className={styles.title}>
            {info.basicInfo.title || "Your Position"}
          </p>

          <div className={styles.contactInfo} style={{color:"red"}}>
            {info.basicInfo.email && <p>✉️ {info.basicInfo.email}</p>}
            {info.basicInfo.phone && <p>📞 {info.basicInfo.phone}</p>}
            {info.basicInfo.linkedin && (
              <p>
                🔗{" "}
                <a
                  href={info.basicInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.content}>
            {/* Left Column: Recipient Details */}
            <div className={styles.recipientSection}>
              <p><strong>{info.recipient.hrname || "Hiring Manager"}</strong></p>
              <p>{info.recipient.company || "Company Name"}</p>
              <p>{info.recipient.address || "Company Address"}</p>
              <p>{info.recipient.date || new Date().toDateString()}</p>
            </div>

            {/* Right Column: Cover Letter Content */}
            <div className={styles.letterContent}>
              {info.coverLetter?.points?.length > 0 ? (
                info.coverLetter.points.map((point, index) => (
                  <p key={index}>{point}</p>
                ))
              ) : (
                <p>Your cover letter content goes here.</p>
              )}
            </div>
          </div>

          {/* Footer */}
          <footer className={styles.footer}>
            <p>Sincerely,</p>
            <p className={styles.signature}>
              {info.basicInfo.name || "Your Name"}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
});

export default Template2;

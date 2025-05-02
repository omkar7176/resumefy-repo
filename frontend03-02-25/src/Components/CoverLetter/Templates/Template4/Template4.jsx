import React, { forwardRef } from "react";
import styles from "./Template4.module.css";
// import backgroundImage from "./background.jpg";

const Template4 = forwardRef(({ information = {}, sections = {} }, ref) => {
  // Destructure and provide defaults for missing information
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    coverLetter: information[sections.coverLetter] || { points: [] },
    recipient: information[sections.recipient]?.detail || {},
  };

  return (
    <div className={styles.coverContainer} ref={ref}>
      <div
        className={styles.coverPage}
       
      >
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.name}>
              {info.basicInfo.name || "Your Name"}
            </h1>
            <p className={styles.title}>
              {info.basicInfo.title || "Your Position"}
            </p>
          </div>

          {/* Contact Info - Top Right Side */}
          <div className={styles.contactInfo}>
            {info.basicInfo.email && <span>✉️ {info.basicInfo.email}</span>}
            {info.basicInfo.phone && <span>📞 {info.basicInfo.phone}</span>}
            {info.basicInfo.linkedin && (
              <span>
                🔗{" "}
                <a
                  href={info.basicInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            )}
          </div>
        </header>

        <hr className={styles.line} />

        {/* Recipient Details */}
        <section className={styles.recipientSection}>
          <p>
            <strong>{info.recipient.hrname || "Hiring Manager"}</strong>
          </p>
          <p>{info.recipient.company || "Company Name"}</p>
          <p>{info.recipient.address || "Company Address"}</p>
          <p>{info.recipient.date || new Date().toDateString()}</p>
        </section>

        {/* Cover Letter Content */}
        <section className={styles.letterContent}>
          {info.coverLetter?.points?.length > 0 ? (
            info.coverLetter.points.map((point, index) => (
              <p key={index}>{point}</p>
            ))
          ) : (
            <p>Your cover letter content goes here.</p>
          )}
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>Sincerely,</p>
          <p className={styles.signature}>
            {info.basicInfo.name || "Your Name"}
          </p>
        </footer>
      </div>
    </div>
  );
});

export default Template4;

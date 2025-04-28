import React, { forwardRef } from "react";
import styles from "./Template5.module.css";

const Template5 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    coverLetter: information[sections.coverLetter] || { points: [] },
    recipient: information[sections.recipient]?.detail || {},
  };

  return (
    <div className={styles.container} ref={ref}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.nameTitle}>
          <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
          <h2 className={styles.title}>{info.basicInfo.title || "Your Position"}</h2>
        </div>

        <div className={styles.contactInfo}>
          {info.basicInfo.email && (
            <div className={styles.contactItem}>
              <span>{info.basicInfo.email}</span>
              <span className={styles.icon}>✉️</span>
            </div>
          )}
          {info.basicInfo.phone && (
            <div className={styles.contactItem}>
              <span>{info.basicInfo.phone}</span>
              <span className={styles.icon}>📞</span>
            </div>
          )}
          {info.basicInfo.linkedin && (
            <div className={styles.contactItem}>
              <span>{info.basicInfo.linkedin}</span>
              <span className={styles.icon}>🔗</span>
            </div>
          )}
        </div>
      </div>

      {/* Recipient Section */}
      <div className={styles.addressSection}>
        <p className={styles.addressTo}>To:</p>
        <p>{info.recipient.hrname || "Hiring Manager"}</p>
        <p>{info.recipient.company || "Company Name"}</p>
        <p>{info.recipient.address || "Company Address"}</p>
        <p>{info.recipient.date || new Date().toDateString()}</p>
      </div>

      {/* Cover Letter Content */}
      <div className={styles.letterContent}>
        {info.coverLetter?.points?.length > 0 ? (
          info.coverLetter.points.map((point, index) => <p key={index}>{point}</p>)
        ) : (
          <p>Your cover letter content goes here.</p>
        )}

        <div className={styles.signature}>
          <p>{info.coverLetter.signature || "Sincerely,"}</p>
          <p>{info.basicInfo.name || "Your Name"}</p>
        </div>
      </div>
    </div>
  );
});

export default Template5;

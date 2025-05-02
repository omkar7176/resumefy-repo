import React, { forwardRef } from "react";
import styles from "./Template9.module.css";

const Template9 = forwardRef(({ information, sections }, ref) => {
  const info = {
    personalInfo: information[sections.basicInfo]?.detail || {},
    recipientInfo: information[sections.recipient]?.detail || {},
    letterContent: information[sections.coverLetter] || { points: [] },
  };

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.headerSection}>
        <div className={styles.nameTitle}>
          <h1 className={styles.name}>{info.personalInfo.name}</h1>
          <h2 className={styles.title}>{info.personalInfo.title}</h2>
        </div>
        <div className={styles.contactInfo}>
          {info.personalInfo.email && (
            <div className={styles.contactItem}>
              <span>{info.personalInfo.email}</span>
              <span className={styles.icon}>✉</span>
            </div>
          )}
          {info.personalInfo.phone && (
            <div className={styles.contactItem}>
              <span>{info.personalInfo.phone}</span>
              <span className={styles.icon}>📱</span>
            </div>
          )}
          {info.personalInfo.location && (
            <div className={styles.contactItem}>
              <span>{info.personalInfo.location}</span>
              <span className={styles.icon}>📍</span>
            </div>
          )}
          {info.personalInfo.website && (
            <div className={styles.contactItem}>
              <span>{info.personalInfo.website}</span>
              <span className={styles.icon}>🌐</span>
            </div>
          )}
          {info.personalInfo.linkedin && (
            <div className={styles.contactItem}>
              <span>{info.personalInfo.linkedin}</span>
              <span className={styles.icon}>in</span>
            </div>
          )}
          {info.personalInfo.twitter && (
            <div className={styles.contactItem}>
              <span>{info.personalInfo.twitter}</span>
              <span className={styles.icon}>🐦</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.addressSection}>
          <p className={styles.addressTo}>To:</p>
          {info.recipientInfo.hrname && <p>{info.recipientInfo.hrname}</p>}
          {info.recipientInfo.company && <p>{info.recipientInfo.company}</p>}
          {info.recipientInfo.address && <p>{info.recipientInfo.address}</p>}
          {info.recipientInfo.date && <p> { new Date().toDateString()}</p>}
        </div>

        <section className={styles.letterContent}>
          {info.letterContent?.points?.length > 0 ? (
            info.letterContent.points.map((point, index) => (
              <p key={index}>{point}</p>
            ))
          ) : (
            <p>Your cover letter content goes here.</p>
          )}
        </section>

        <div className={styles.signature}>
          <p>Sincerely,</p>
          <p>{info.personalInfo.name}</p>
        </div>
      </div>
    </div>
  );
});

export default Template9;

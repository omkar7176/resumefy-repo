import React, { forwardRef } from "react";
import styles from "./Template7.module.css";

const Template7 = forwardRef(({ information, sections }, ref) => {
  const info = {
    personalInfo: information[sections.basicInfo]?.detail || {},
    recipientInfo: information[sections.recipient]?.detail || {},
    letterContent: information[sections.coverLetter] || { points: [] },
  };

  return (
    <div className={styles.container} ref={ref}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.nameBlock}>
          <h1 className={styles.name}>{info.personalInfo.name || "Your Name"}</h1>
          <p className={styles.position}>{info.personalInfo.title || "Your Position"}</p>
        </div>
        <div className={styles.contactInfo}>
          {info.personalInfo.email && <p>{info.personalInfo.email}</p>}
          {info.personalInfo.phone && <p>{info.personalInfo.phone}</p>}
          {info.personalInfo.location && <p>{info.personalInfo.location}</p>}
          {info.personalInfo.linkedin && (
            <p>
              <a href={info.personalInfo.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          )}
        </div>
      </div>

      <hr className={styles.line} />

      {/* Recipient Information */}
      <div className={styles.recipient}>
        {info.recipientInfo.hrname && <p><strong>{info.recipientInfo.hrname}</strong></p>}
        {info.recipientInfo.company && <p>{info.recipientInfo.company}</p>}
        {info.recipientInfo.address && <p>{info.recipientInfo.address}</p>}
        {info.recipientInfo.location && <p>{info.recipientInfo.location}</p>}
      </div>

      {/* Cover Letter Content */}
      <section className={styles.letterContent}>
  {info.letterContent?.points?.length > 0 ? (
    info.letterContent.points.map((point, index) => (
      <p key={index}>{point}</p>
    ))
  ) : (
    <p>Your cover letter content goes here.</p>
  )}
</section>


      {/* Signature */}
      <div className={styles.signature}>
        <p>{info.letterContent.signature || "Sincerely,"}</p>
        <p>{info.personalInfo.name || "Your Name"}</p>
      </div>
    </div>
  );
});

export default Template7;

import React, { forwardRef } from "react";
import styles from "./Template10.module.css";

const Template10 = forwardRef(({ information, sections }, ref) => {
  const personalInfo = information[sections.basicInfo]?.detail || {};
  const recipientInfo = information[sections.recipient]?.detail || {};
  const letterContent = information[sections.coverLetter] || {
   
  };

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.headerSection}>
        <div className={styles.nameTitle}>
          <h1 className={styles.name}>{personalInfo.name}</h1>
          <h2 className={styles.title}>{personalInfo.title}</h2>
        </div>
        <div className={styles.contactInfo}>
          {personalInfo.email && (
            <div className={styles.contactItem}>
              <span>{personalInfo.email}</span>
              <span className={styles.icon}>✉</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className={styles.contactItem}>
              <span>{personalInfo.phone}</span>
              <span className={styles.icon}>📱</span>
            </div>
          )}
          {personalInfo.location && (
            <div className={styles.contactItem}>
              <span>{personalInfo.location}</span>
              <span className={styles.icon}>📍</span>
            </div>
          )}
          {personalInfo.website && (
            <div className={styles.contactItem}>
              <span>{personalInfo.website}</span>
              <span className={styles.icon}>🌐</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className={styles.contactItem}>
              <span>{personalInfo.linkedin}</span>
              <span className={styles.icon}>in</span>
            </div>
          )}
          {personalInfo.twitter && (
            <div className={styles.contactItem}>
              <span>{personalInfo.twitter}</span>
              <span className={styles.icon}>🐦</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.addressSection}>
          <p className={styles.addressTo}>To:</p>
          {recipientInfo.hrname && <p>{recipientInfo.hrname}</p>}
          {recipientInfo.company && <p>{recipientInfo.company}</p>}
          {recipientInfo.address && <p>{recipientInfo.address}</p>}
          {recipientInfo.date && <p> { new Date().toDateString()}</p>}
        
        </div>
      </div>
        
         <section className={styles.letterContent}>
                  {letterContent?.points?.length > 0 ? (
                    letterContent.points.map((point, index) => (
                      <p key={index}>{point}</p>
                    ))
                  ) : (
                    <p>Your cover letter content goes here.</p>
                  )}
          </section>
        

        

          <div className={styles.signature}>
            <p>{letterContent.signature}</p>
            <p>{personalInfo.name}</p>
          </div>
        </div>
   
  
  );
});

export default Template10;

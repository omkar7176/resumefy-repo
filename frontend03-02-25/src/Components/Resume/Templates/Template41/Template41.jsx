import React from "react";
import styles from "./Template41.module.css";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

const Template41 = ({ information, sections, activeColor }) => {
  return (
    <div className={styles.container} style={{ "--color": activeColor }}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.heading}>{information[sections.basicInfo]?.detail?.name}</h1>
        <h2 className={styles.subHeading}>{information[sections.basicInfo]?.detail?.title}</h2>
        <div className={styles.links}>
          {information[sections.basicInfo]?.detail?.email && (
            <div className={styles.link}>
              <AtSign /> {information[sections.basicInfo]?.detail?.email}
            </div>
          )}
          {information[sections.basicInfo]?.detail?.phone && (
            <div className={styles.link}>
              <Phone /> {information[sections.basicInfo]?.detail?.phone}
            </div>
          )}
        </div>
      </div>
      
      {/* Main Section */}
      <div className={styles.main}>
        {/* Left Column */}
        <div className={styles.col1}>
          {sections.summary && information[sections.summary]?.detail && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections.summary}</h3>
              <p className={styles.overview}>{information[sections.summary]?.detail}</p>
            </div>
          )}
          {sections.workExp && information[sections.workExp]?.details?.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections.workExp}</h3>
              {information[sections.workExp]?.details.map((item, index) => (
                <div className={styles.item} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subTitle}>{item.companyName}</p>
                  <p className={styles.date}><Calendar /> {item.startDate} - {item.endDate}</p>
                </div>
              ))}
            </div>
          )}
          {sections.project && information[sections.project]?.details?.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections.project}</h3>
              {information[sections.project]?.details.map((item, index) => (
                <div className={styles.item} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.overview}>{item.overview}</p>
                  {item.link && (
                    <a className={styles.link} href={item.link}><Paperclip /> {item.link}</a>
                  )}
                  {item.github && (
                    <a className={styles.link} href={item.github}><GitHub /> {item.github}</a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Right Column */}
        <div className={styles.col2}>
          {sections.education && information[sections.education]?.details?.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections.education}</h3>
              {information[sections.education]?.details.map((item, index) => (
                <div className={styles.item} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subTitle}>{item.college}</p>
                </div>
              ))}
            </div>
          )}
          {sections.skills && information[sections.skills]?.points?.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections.skills}</h3>
              <ul className={styles.points}>
                {information[sections.skills]?.points.map((skill, index) => (
                  <li key={index} className={styles.point}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {sections.languages && information[sections.languages]?.points?.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections.languages}</h3>
              <ul className={styles.points}>
                {information[sections.languages]?.points.map((language, index) => (
                  <li key={index} className={styles.point}>{language}</li>
                ))}
              </ul>
            </div>
          )}
          {sections.achievement && information[sections.achievement]?.points?.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections.achievement}</h3>
              <ul className={styles.points}>
                {information[sections.achievement]?.points.map((achievement, index) => (
                  <li key={index} className={styles.point}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
          {sections.other && information[sections.other]?.detail && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{sections.other}</h3>
              <p className={styles.overview}>{information[sections.other]?.detail}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template41;
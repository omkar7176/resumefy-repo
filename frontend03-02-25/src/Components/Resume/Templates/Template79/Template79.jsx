import React, { forwardRef } from "react";
import styles from "./Template79.module.css";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Template79 = forwardRef(({ activeColor }, ref) => {
  const info = {
    basicInfo: {
      name: "Tina Miller",
      location: "Florida",
      phone: "917-494-3465",
      email: "tinamillernyc20@gmail.com",
      linkedin: "linkedin.com/in/tina-miller-nyc",
    },
    summary:
      "7+ years of social marketing experience, driving customer growth and engagement in digital, B2B, and content marketing campaigns...",
    workExp: [
      {
        title: "Senior Marketing Manager",
        company: "WeWork",
        location: "New York, United States",
        points: [
          "Increased lead generation by 30% in 3 months through targeted campaigns.",
          "Increased company’s online presence by 25%, driving a 40% increase in website traffic and generating $2M in revenue.",
          "Led analysis of 75+ campaigns, uncovering insights that increased customer acquisition by 25%.",
        ],
      },
      {
        title: "Marketing Manager",
        company: "NVIDIA",
        points: [
          "Managed a comprehensive marketing campaign for a product launch, increasing brand awareness by 30%.",
          "Improved YouTube strategy, leading to a 15% increase in channel views month over month.",
        ],
      },
      {
        title: "Marketing Manager",
        company: "White Lotus Resort",
        points: [
          "Increased digital advertising revenue by 25% in 9 months through strategic relations management.",
          "Developed B2B/B2C strategy resulting in a 300% revenue increase in 6 months.",
          "Boosted web traffic by 20% through strategic planning.",
        ],
      },
    ],
  };

  return (
    <div className={styles.resumeContainer} ref={ref} style={{ "--theme-color": activeColor }}>
      {/* Left Panel */}
      <div className={styles.leftPanel}>
        <h1>{info.basicInfo.name}</h1>
        <h2>Marketing Professional</h2>
        <p><FaEnvelope /> {info.basicInfo.email}</p>
        <p><FaPhone /> {info.basicInfo.phone}</p>
        <p><FaLinkedin /> <a href={`https://${info.basicInfo.linkedin}`}>{info.basicInfo.linkedin}</a></p>
      </div>

      {/* Right Panel */}
      <div className={styles.rightPanel}>
        <h3>Summary</h3>
        <p>{info.summary}</p>
        
        <h3>Work Experience</h3>
        {info.workExp.map((job, index) => (
          <div key={index}>
            <h4>{job.title} - {job.company}</h4>
            <p>{job.location}</p>
            <ul>
              {job.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Template79;

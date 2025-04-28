import React, { useRef, useState } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import { useLocation } from "react-router-dom";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import Header from "../Header/Header";
import styles from "./Body.module.css";
import { url } from "../../api/apiendpoint";

function Body() {
  const colors = ["#239ce2", "#48bb78", "#082a4d", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    skills: "Skills",
    languages: "Languages",
    other: "Other",
  };
  const resumeRef = useRef();
  const location = useLocation();
  const { templateId } = location.state || { templateId: 1 }; // Default to Template 1 if none selected

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      summary: "",
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [], // Ensure points are initialized as an array
    },
    [sections.languages]: {
      id: sections.languages,
      sectionTitle: sections.languages,
      points: [], // Ensure points are initialized as an array
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "", // Holds custom content for "Other"
    },
  });

  // Function to handle the resume data submission to the API
  async function saveResumeToServer() {
    const updatedResumeInfo = {
      ...resumeInformation,
      [sections.workExp]: {
        ...resumeInformation[sections.workExp],
        details: JSON.stringify(resumeInformation[sections.workExp].details),
      },
      [sections.project]: {
        ...resumeInformation[sections.project],
        details: JSON.stringify(resumeInformation[sections.project].details),
      },
      [sections.education]: {
        ...resumeInformation[sections.education],
        details: JSON.stringify(resumeInformation[sections.education].details),
      },
      [sections.skills]: {
        ...resumeInformation[sections.skills],
        points: JSON.stringify(resumeInformation[sections.skills].points), // Serialize skills points
      },
      [sections.languages]: {
        ...resumeInformation[sections.languages],
        points: JSON.stringify(resumeInformation[sections.languages].points), // Serialize languages points
      },
      templateId,
    };
    try {
      await axios.post(`${url}/saveResume`, updatedResumeInfo);
      alert("Resume saved successfully!");
    } catch (error) {
      console.error("Error saving resume:", error);
      alert("Failed to save resume.");
    }
  }

  function formatForExport(data) {
    // Add logic to ensure proper page breaks and alignment
    return data;
  }

  return (
    <div className={styles.container}>
      <Header />
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => <button>Download <ArrowDown /></button>}
          content={() => resumeRef.current}
          pageStyle={`
            @media print {
              body {
                margin: 0;
                padding: 0;
                -webkit-print-color-adjust: exact;
              }
              .${styles.main} {
                padding: 10mm;
                font-size: 10pt;
                line-height: 1.4;
              }
              .${styles.main} section {
                page-break-inside: avoid;
                margin-bottom: 10px;
              }
              .${styles.main} h3, .${styles.main} h4 {
                page-break-after: avoid;
              }
            }
          `}
        />
        <button onClick={saveResumeToServer} className={styles.saveButton}>
          Save Resume
        </button>
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
          templateId={templateId} // Pass templateId here
        />
      </div>
    </div>
  );
}

export default Body;

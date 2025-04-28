
import React, { useRef, useState } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import { useLocation } from "react-router-dom";
import Editor from "../Editor/Editor";

import Header from "../Header/Header";
import styles from "./Body.module.css";
import { url } from "../../api/apiendpoint";
import CoverLetter from "../CoverLetter/CoverLetter";
import EditorCv from "../Editor/EditorCv";

function BodyCv() {
  const colors = ["#239ce2", "#48bb78", "#082a4d", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    coverLetter: "coverLetter",
   
    recipient: "recipient",
   
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

    [sections.recipient]: {
        id: sections.recipient,
        sectionTitle: sections.recipient,
        detail: {},
      },

   
    [sections.coverLetter]: {
      id: sections.coverLetter,
      sectionTitle: sections.coverLetter,
      points: [],
    }
 
  });

  // Function to handle the resume data submission to the API
  const saveResumeToServer = async () => {
    const updatedResumeInfo = {
      ...resumeInformation,
 
    };
    
    console.log("Sending resume information:", updatedResumeInfo); // Log the data before sending

    try {
      const response = await axios.post(
        url + "/api/resume/create",
        updatedResumeInfo
      );
      console.log("Response from server:", response.data);
      alert("Resume saved successfully!");
    } catch (error) {
      console.error("Error saving resume:", error);
      alert("Failed to save resume. Please try again.");
    }
  };

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
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
        <button onClick={saveResumeToServer} className={styles.saveButton}>
          Save Resume
        </button>
      </div>
      <div className={styles.main}>
        <EditorCv
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
       
        <CoverLetter
        ref={resumeRef}
        sections={sections}
        information={resumeInformation}
        activeColor={activeColor}
        templateId={templateId}
        className="yourMainResumeContainer"
        
        />
        {/* end */}
      </div>
    </div>
  );
}

export default BodyCv;


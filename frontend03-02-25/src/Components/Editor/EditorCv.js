
import React, { useEffect, useState } from "react";
import { X } from "react-feather";

import InputControl from "../InputControl/InputControl";

import styles from "./Editor.module.css";

function EditorCv(props) {
  const { sections, information, setInformation } = props;

  const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);
  const [activeInformation, setActiveInformation] = useState(information[sections[Object.keys(sections)[0]]]);
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);
  const [values, setValues] = useState({
    points: [], // Initialize points to prevent undefined issues
  });

  // Handle update for array of points (cover letter)
  const handlePointUpdate = (value, index, key = "points") => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues[key])) tempValues[key] = [];
    tempValues[key][index] = value;
    setValues(tempValues);
  };

  const handleAddPoint = (key = "points") => {
    setValues((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), ""],
    }));
  };

  const handleDeletePoint = (index, key = "points") => {
    setValues((prev) => {
      const updatedPoints = [...(prev[key] || [])];
      updatedPoints.splice(index, 1);
      return { ...prev, [key]: updatedPoints };
    });
  };

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          value={values.name || ""}
          onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend Developer"
          value={values.title || ""}
          onChange={(e) => setValues((prev) => ({ ...prev, title: e.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="LinkedIn"
          placeholder="Enter your LinkedIn URL"
          value={values.linkedin || ""}
          onChange={(e) => setValues((prev) => ({ ...prev, linkedin: e.target.value }))}
        />
        <InputControl
          label="GitHub"
          placeholder="Enter your GitHub URL"
          value={values.github || ""}
          onChange={(e) => setValues((prev) => ({ ...prev, github: e.target.value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          placeholder="Enter your email"
          value={values.email || ""}
          onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
        />
        <InputControl
          label="Phone"
          placeholder="Enter your phone number"
          value={values.phone || ""}
          onChange={(e) => setValues((prev) => ({ ...prev, phone: e.target.value }))}
        />
      </div>
    </div>
  );

  const recipientBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <div className={styles.column}>
          <InputControl
            label="Recipient Name"
            placeholder="Enter recipient name e.g. John Doe"
            value={values.hrname || ""}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, hrname: e.target.value }))
            }
          />
        </div>
        <div className={styles.column}>
          <InputControl
            label="Company"
            placeholder="Enter company name"
            value={values.company || ""}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, company: e.target.value }))
            }
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <InputControl
            label="Address"
            placeholder="Enter company address"
            value={values.address || ""}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, address: e.target.value }))
            }
          />
        </div>
        <div className={styles.column}>
          <InputControl
            label="Date"
            type="date"
            value={values.date || ""}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>
      </div>
    </div>
  );

  const coverLetterBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        {(values.points || []).map((point, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <InputControl
              placeholder={`Line ${index + 1}`}
              value={point}
              onChange={(e) => handlePointUpdate(e.target.value, index)}
            />
            <X size={18} style={{ marginLeft: 8, cursor: "pointer" }} onClick={() => handleDeletePoint(index)} />
          </div>
        ))}
        <button className={styles.addBtn} onClick={() => handleAddPoint()}>
          + Add Line
        </button>
      </div>
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.recipient:
        return recipientBody;
      case sections.coverLetter:
        return coverLetterBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const detail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };
        setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.recipient: {
        const detail = {
          hrname: values.hrname,
          company: values.company,
          address: values.address,
          date: values.date,
        };
        setInformation((prev) => ({
          ...prev,
          [sections.recipient]: {
            ...prev[sections.recipient],
            detail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.coverLetter: { // Fixed from coverLetterBody to coverLetter
        const points = values.points || [];
        setInformation((prev) => ({
          ...prev,
          [sections.coverLetter]: {
            ...prev[sections.coverLetter],
            points,
            sectionTitle,
          },
        }));
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(activeInfo?.sectionTitle || sections[activeSectionKey]);

    const detail = activeInfo?.detail || {};
    const points = activeInfo?.points || [];

    setValues({
      name: detail.name || "",
      title: detail.title || "",
      linkedin: detail.linkedin || "",
      github: detail.github || "",
      email: detail.email || "",
      phone: detail.phone || "",
      hrname: detail.hrname || "",
      company: detail.company || "",
      address: detail.address || "",
      date: detail.date || "",
      points: Array.isArray(points) ? [...points] : [], // Ensure points is always an array
    });
  }, [activeSectionKey, information, sections]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            key={key}
            className={`${styles.section} ${activeSectionKey === key ? styles.active : ""}`}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        <InputControl
          label="Section Title"
          placeholder="Enter section title"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
        />

        {generateBody()}

        <div className={styles.footer}>
          <button className={styles.submit} onClick={handleSubmission}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorCv;

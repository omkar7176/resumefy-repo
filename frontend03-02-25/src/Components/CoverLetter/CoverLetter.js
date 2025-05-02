
import React, { forwardRef, useEffect, useRef, useState } from "react";
import DefaultTemplate from "./Templates/DefaultTemplate/DefaultTemplate";
import styles from "./CoverLetter.module.css";
import Template1 from "../CoverLetter/Templates/Template1/Template1";
import Template2 from "../CoverLetter/Templates/Template2/Template2";
import Template3 from "../CoverLetter/Templates/Template3/Template3";
import Template4 from "../CoverLetter/Templates/Template4/Template4";
import Template5 from "../CoverLetter/Templates/Template5/Template5";
import Template6 from "../CoverLetter/Templates/Template6/Template6";
import Template7 from "../CoverLetter/Templates/Template7/Template7";
import Template8 from "../CoverLetter/Templates/Template8/Template8";
import Template9 from "../CoverLetter/Templates/Template9/Template9";
import Template10 from "../CoverLetter/Templates/Template10/Template10";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

const CoverLetter = forwardRef((props, ref) => {
  const { information, sections, activeColor, templateId } = props;
  const containerRef = useRef();

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
 
    basicInfo: information[sections.basicInfo],
    recipient: information[sections.recipient],
    coverLetter: information.coverLetter,
  

   
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
 
   
    [sections.coverLetter]: (
      <div
        key={"coverLetter"}
        draggable
        onDragOver={() => seTarget(info.coverLetter?.id)}
        onDragEnd={() => setSource(info.coverLetter?.id)}
        className={`${styles.section} ${
          info.coverLetter?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.coverLetter?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.coverLetter?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.coverLetter?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
   
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [
       
        sections.coverLetter,
      
      ],
      
      [sections.coverLetter],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!activeColor || !container) return;

    container.style.setProperty("--color", activeColor);
  }, [activeColor]);
  const getTemplateLayout = () => {
    switch (templateId) {
      case 1:
        return (
          <Template1
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 2:
        return (
          <Template2
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 3:
        return (
          <Template3
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 4:
        return (
          <Template4
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 5:
        return (
          <Template5
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 6:
        return (
          <Template6
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 7:
        return (
          <Template7
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 8:
        return (
          <Template8
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 9:
        return (
          <Template9
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 10:
        return (
          <Template10
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      default:
        return (
          <DefaultTemplate
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
            columns={columns}
            sectionDiv={sectionDiv}
          />
        );
    }
  };

  return <>{getTemplateLayout()}</>;
});

export default CoverLetter;



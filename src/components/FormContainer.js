import { useMemo } from "react";
import styles from "./FormContainer.module.css";

const FormContainer = ({
  imageDimensions,
  dimensionText,
  imageDimensionsText,
  schoolLogoText,
  propTop,
  propLeft,
  propLeft1,
  onInterestedClick,
}) => {
  const eventsStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const davPublicSchoolStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={styles.events} style={eventsStyle}>
      <img className={styles.eventsChild} alt="" src={imageDimensions} />
      <div className={styles.eventsItem} />
      <div className={styles.eventsInner} />
      <img className={styles.ictwotoneShareIcon} alt="" src={dimensionText} />
      <button className={styles.interested} onClick={onInterestedClick}>
        Interested
      </button>
      <img
        className={styles.materialSymbolsstarOutlineIcon}
        alt=""
        src={imageDimensionsText}
      />
      <b className={styles.sep2023}>9 sep 2023</b>
      <b className={styles.davPublicSchool} style={davPublicSchoolStyle}>
        {schoolLogoText}
      </b>
      <b className={styles.interested21}>211 INTERESTED - 21 GOING</b>
    </div>
  );
};

export default FormContainer;

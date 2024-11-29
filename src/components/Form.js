import { useMemo } from "react";
import styles from "./Form.module.css";

const Form = ({ propHeight, propLeft, propWidth, propHeight1 }) => {
  const nameStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.name} style={nameStyle}>
      <div className={styles.fullNameContainer}>
        <span>{`Full name `}</span>
        <span className={styles.span}>*</span>
      </div>
    </div>
  );
};

export default Form;

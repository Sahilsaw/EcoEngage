import { useMemo } from "react";
import styles from "./TimeContainer.module.css";

const TimeContainer = ({ dateTime, eventDateTime, propLeft, propLeft1 }) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const pmStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={styles.baseParent} style={groupDivStyle}>
      <div className={styles.base} />
      <b className={styles.time}>{dateTime}</b>
      <div className={styles.pm} style={pmStyle}>
        {eventDateTime}
      </div>
    </div>
  );
};

export default TimeContainer;

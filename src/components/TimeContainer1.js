import TimeContainer from "./TimeContainer";
import styles from "./TimeContainer1.module.css";

const TimeContainer1 = () => {
  return (
    <div className={styles.text}>
      <TimeContainer dateTime="Time" eventDateTime="12:00 pm" />
      <TimeContainer
        dateTime="Date"
        eventDateTime="12 sept"
        propLeft="0px"
        propLeft1="34px"
      />
      <div className={styles.rdKerlaStreet}>42 rd, Kerla, street</div>
      <div className={styles.joinHandsWith}>
        Join hands with Mukesh Kumar from Kerala's 43rd Street, collaborate on a
        mission, and unlock token rewards for a cleaner future!
      </div>
      <b className={styles.aboutEvent}>About Event</b>
    </div>
  );
};

export default TimeContainer1;

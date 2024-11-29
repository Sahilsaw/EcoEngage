import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormContainer1.module.css";

const FormContainer1 = () => {
  const navigate = useNavigate();

  const onJoinedTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.events}>
      <img
        className={styles.eventsChild}
        alt=""
        src="/rectangle-34624114@2x.png"
      />
      <div className={styles.eventsItem} />
      <div className={styles.eventsInner} />
      <img
        className={styles.ictwotoneShareIcon}
        alt=""
        src="/ictwotoneshare.svg"
      />
      <div className={styles.joined} onClick={onJoinedTextClick}>
        Joined
      </div>
      <img
        className={styles.materialSymbolsstarIcon}
        alt=""
        src="/materialsymbolsstar.svg"
      />
      <img
        className={styles.materialSymbolsstarOutlineIcon}
        alt=""
        src="/materialsymbolsstaroutline.svg"
      />
      <b className={styles.sep2023}>12 sep 2023</b>
      <b className={styles.nalandaBoysHostel}>Nalanda boys hostel</b>
      <b className={styles.interested21}>201 INTERESTED - 21 GOING</b>
    </div>
  );
};

export default FormContainer1;

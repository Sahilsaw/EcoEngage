import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EventCard.module.css";

const EventCard = () => {
  const navigate = useNavigate();

  const onJoinedClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.events}>
      <img
        className={styles.eventsChild}
        alt=""
        src="/rectangle-346241144@2x.png"
      />
      <b className={styles.sep2023}>1 sep 2023</b>
      <b className={styles.nalandaGirlsH}>Nalanda girls h.</b>
      <div className={styles.eventsItem} />
      <img
        className={styles.materialSymbolsstarIcon}
        alt=""
        src="/materialsymbolsstar1.svg"
      />
      <button className={styles.joined} onClick={onJoinedClick}>
        Joined
      </button>
      <img
        className={styles.materialSymbolsstarOutlineIcon}
        alt=""
        src="/materialsymbolsstaroutline6.svg"
      />
    </div>
  );
};

export default EventCard;

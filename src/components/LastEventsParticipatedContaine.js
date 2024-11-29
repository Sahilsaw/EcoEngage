import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LastEventsParticipatedContaine.module.css";

const LastEventsParticipatedContaine = () => {
  const navigate = useNavigate();

  const onJoinedClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onJoined1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.events}>
      <img
        className={styles.eventsChild}
        alt=""
        src="/rectangle-346241146@2x.png"
      />
      <div className={styles.joined}>
        <div className={styles.joinedChild} />
        <img
          className={styles.materialSymbolsstarIcon}
          alt=""
          src="/materialsymbolsstar2.svg"
        />
        <button className={styles.joined1} onClick={onJoinedClick}>
          Joined
        </button>
        <img
          className={styles.materialSymbolsstarOutlineIcon}
          alt=""
          src="/materialsymbolsstaroutline6.svg"
        />
      </div>
      <b className={styles.sep2023}>12 sep 2023</b>
      <b className={styles.magadhInGirls}>magadh in. girls</b>
      <div className={styles.joined2}>
        <div className={styles.joinedChild} />
        <img
          className={styles.materialSymbolsstarIcon}
          alt=""
          src="/materialsymbolsstar2.svg"
        />
        <button className={styles.joined1} onClick={onJoined1Click}>
          Joined
        </button>
        <img
          className={styles.materialSymbolsstarOutlineIcon}
          alt=""
          src="/materialsymbolsstaroutline6.svg"
        />
      </div>
    </div>
  );
};

export default LastEventsParticipatedContaine;

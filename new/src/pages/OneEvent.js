import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TimeContainer1 from "../components/TimeContainer1";
import Header from "../components/Header";
import styles from "./OneEvent.module.css";

const OneEvent = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onEventsClick = useCallback(() => {
    navigate("/event");
  }, [navigate]);

  const onChatClick = useCallback(() => {
    navigate("/chatbot");
  }, [navigate]);

  const onMarketplaceClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  return (
    <div className={styles.oneEvent}>
      <div className={styles.oneEventChild} />
      <div className={styles.oneEventItem} />
      <div className={styles.aboutConference}>
        <TimeContainer1 />
        <div className={styles.imagevideoContent}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.imageWrapper}>
            <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.oneEventInner} />
      <div className={styles.participateNow}>Participate Now</div>
      <img className={styles.mdiheartIcon} alt="" src="/mdiheart.svg" />
      <Header
        onSignUpClick={onSignUpClick}
        onEventsClick={onEventsClick}
        onChatClick={onChatClick}
        onMarketplaceClick={onMarketplaceClick}
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.copyright}>SIH 2023. EIGHT</div>
    </div>
  );
};

export default OneEvent;

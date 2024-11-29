import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerWithButtons from "../components/ContainerWithButtons";
import EcoCoinsCard from "../components/EcoCoinsCard";
import EventCard from "../components/EventCard";
import LastEventsParticipatedContaine from "../components/LastEventsParticipatedContaine";
import Header from "../components/Header";
import styles from "./Profile.module.css";

const Profile = () => {
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
    <div className={styles.profile}>
      <img className={styles.profileChild} alt="" src="/rectangle-12.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      <img className={styles.profileItem} alt="" src="/rectangle-27@2x.png" />
      <ContainerWithButtons />
      <div className={styles.medalStatTile}>
        <EcoCoinsCard />
      </div>
      <div className={styles.lastEventsParticipated}>
        LAST EVENTS PARTICIPATED
      </div>
      <div className={styles.events}>
        <img
          className={styles.eventsChild}
          alt=""
          src="/rectangle-3462411411@2x.png"
        />
        <b className={styles.sep2023}>9 sep 2023</b>
        <b className={styles.davPublicSchool}>Dav public school</b>
      </div>
      <EventCard />
      <LastEventsParticipatedContaine />
      <b className={styles.yourSustainableProfile}>
        Your Sustainable Profile: Showcasing Your Impactful Journey
      </b>
      <Header
        onSignUpClick={onSignUpClick}
        onEventsClick={onEventsClick}
        onChatClick={onChatClick}
        onMarketplaceClick={onMarketplaceClick}
      />
      <div className={styles.profileInner} />
      <div className={styles.copyright}>SIH 2023. EIGHT</div>
    </div>
  );
};

export default Profile;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BusinessCollaborationForm.module.css";

const BusinessCollaborationForm = () => {
  const navigate = useNavigate();

  const onLearnMoreClick = useCallback(() => {
    navigate("/partner");
  }, [navigate]);

  return (
    <div className={styles.businessCollaboration}>
      <img
        className={styles.businessCollaborationChild}
        alt=""
        src="/rectangle-5@2x.png"
      />
      <div className={styles.businessCollaborationItem} />
      <b className={styles.becomeBusinessPartner}>Become Business Partner</b>
      <div className={styles.atEcoengageplayWe}>
        At EcoEngagePlay, we believe in the power of collaboration to drive
        positive change.
      </div>
      <div className={styles.businessCollaborationInner} />
      <button className={styles.learnMore} onClick={onLearnMoreClick}>
        learn more
      </button>
      <img className={styles.icon} alt="" src="/6685-1@2x.png" />
    </div>
  );
};

export default BusinessCollaborationForm;

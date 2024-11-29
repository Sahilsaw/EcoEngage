import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header1.module.css";

const Header1 = () => {
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

  const onLOGO1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarChild} />
      <button className={styles.ecoengage}>EcoEngage</button>
      <button className={styles.signUp} onClick={onSignUpClick}>
        Sign up
      </button>
      <button className={styles.events} onClick={onEventsClick}>
        Events
      </button>
      <button className={styles.chat} onClick={onChatClick}>
        Chat
      </button>
      <button className={styles.marketplace} onClick={onMarketplaceClick}>
        Marketplace
      </button>
      <div className={styles.navBarItem} />
      <button className={styles.logo1} onClick={onLOGO1Click} />
    </nav>
  );
};

export default Header1;

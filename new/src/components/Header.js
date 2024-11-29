import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({
  onSignUpClick,
  onEventsClick,
  onChatClick,
  onMarketplaceClick,
}) => {
  const navigate = useNavigate();

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

export default Header;

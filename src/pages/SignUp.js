import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Form1 from "../components/Form1";
import Header from "../components/Header";
import styles from "./SignUp.module.css";

const SignUp = () => {
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

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login-page1");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <img className={styles.signUpChild} alt="" src="/rectangle-122.svg" />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.createYourAccountParent}>
            <div className={styles.createYourAccount}>Create your account.</div>
            <button
              className={styles.alreadyHaveAnContainer}
              onClick={onAlreadyHaveAnClick}
            >
              <span
                className={styles.alreadyHaveAn}
              >{`Already have an account? `}</span>
              <span className={styles.signIn}>Sign In</span>
            </button>
          </div>
          <img
            className={styles.rubbish1Icon}
            alt=""
            src="/rubbish-11@2x.png"
          />
        </div>
        <Form1 />
      </div>
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      <Header
        onSignUpClick={onSignUpClick}
        onEventsClick={onEventsClick}
        onChatClick={onChatClick}
        onMarketplaceClick={onMarketplaceClick}
      />
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.copyright}>SIH 2023. EIGHT</div>
      </div>
      <input className={styles.signUpItem} type="text" />
      <input className={styles.signUpInner} type="text" />
      <input className={styles.rectangleInput} type="text" />
    </div>
  );
};

export default SignUp;

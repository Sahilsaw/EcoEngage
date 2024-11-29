import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import Header from "../components/Header";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/login-page1");
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
    <div className={styles.signIn}>
      <img className={styles.signInChild} alt="" src="/rectangle-121.svg" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.welcomeBackWrapper}>
            <div className={styles.welcomeBack}>Welcome Back.</div>
          </div>
        </div>
        <SignInForm />
        <button className={styles.forgotPassword}>Forgot password</button>
      </div>
      <img className={styles.rubbish1Icon} alt="" src="/rubbish-1@2x.png" />
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
    </div>
  );
};

export default SignIn;

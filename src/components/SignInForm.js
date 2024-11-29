import Form from "./Form";
import styles from "./SignInForm.module.css";

const SignInForm = () => {
  return (
    <div className={styles.nameParent}>
      <Form />
      <div className={styles.email}>
        <div className={styles.mobileNumberContainer}>
          <span>{`Mobile Number `}</span>
          <span className={styles.span}>*</span>
        </div>
      </div>
      <div className={styles.pass}>
        <div className={styles.mobileNumberContainer}>
          <span>{`Password `}</span>
          <span className={styles.span}>*</span>
        </div>
      </div>
      <div className={styles.check}>
        <div className={styles.checkChild} />
        <div className={styles.iAgreeTo}>
          I agree to the terms and condition
        </div>
      </div>
      <div className={styles.signInWrapper}>
        <button className={styles.signIn}>Sign In</button>
      </div>
      <input className={styles.frameChild} type="text" />
      <input className={styles.frameItem} type="text" />
      <input className={styles.frameInner} type="text" />
    </div>
  );
};

export default SignInForm;

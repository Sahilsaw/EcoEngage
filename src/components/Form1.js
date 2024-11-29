import Form from "./Form";
import styles from "./Form1.module.css";

const Form1 = () => {
  return (
    <div className={styles.nameParent}>
      <Form propHeight="18px" />
      <div className={styles.email}>
        <div className={styles.mobileNumberContainer}>
          <span>{`Mobile Number `}</span>
          <span className={styles.span}>*</span>
        </div>
      </div>
      <div className={styles.pass}>
        <div className={styles.mobileNumberContainer}>
          <span>{`Set Password `}</span>
          <span className={styles.span}>*</span>
        </div>
      </div>
      <div className={styles.signUpWrapper}>
        <button className={styles.signUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Form1;

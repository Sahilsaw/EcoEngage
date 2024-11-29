import { useCallback } from "react";
import ButtonSmallstandart from "./ButtonSmallstandart";
import { useNavigate } from "react-router-dom";
import styles from "./FormFooter.module.css";

const FormFooter = () => {
  const navigate = useNavigate();

  const onListClick = useCallback(() => {
    navigate("/chatbot");
  }, [navigate]);

  return (
    <div className={styles.footerforhomepage}>
      <img
        className={styles.streamlinephoneContactPhoneIcon}
        alt=""
        src="/streamlinephonecontactphonebookphonebookphonenumberbooksbook.svg"
      />
      <img
        className={styles.streamlinephoneContactPhoneIcon}
        alt=""
        src="/streamlinephonecontactphonebookphonebookphonenumberbooksbook.svg"
      />
      <div className={styles.footerBg} />
      <div className={styles.copyright}>SIH 2023. EIGHT</div>
      <img className={styles.lineIcon} alt="" src="/line.svg" />
      <div className={styles.description}>
        Discover the creative world of upcycling and how everyday items can find
        new life as unique treasures.
      </div>
      <div className={styles.title}>Subscribe to our newsletter</div>
      <div className={styles.inputButton}>
        <ButtonSmallstandart
          button="Subscribe"
          buttonSmallstandartWidth="120px"
          buttonSmallstandartPosition="absolute"
          buttonSmallstandartTop="0px"
          buttonSmallstandartLeft="280px"
          rectangleBackgroundColor="#427aa1"
          rectangleBorderRadius="8px"
          buttonLeft="18.96%"
          buttonFontFamily="Roboto"
        />
        <div className={styles.inputField}>
          <div className={styles.rectangle} />
          <input className={styles.inputFieldChild} type="text" />
        </div>
      </div>
      <button className={styles.list} onClick={onListClick}>
        Chatbot
      </button>
      <div className={styles.title1}>FAQ</div>
      <div className={styles.list1}>
        <p className={styles.about}>About</p>
        <p className={styles.about}>Blog</p>
        <p className={styles.about}>Join Us</p>
        <p className={styles.about}>Partners</p>
      </div>
      <div className={styles.title2}>Company</div>
      <div className={styles.list2}>
        <p className={styles.about}>Documentation</p>
        <p className={styles.about}>Guide</p>
        <p className={styles.about}>Tutorial</p>
      </div>
      <div className={styles.title3}>Support</div>
      <div className={styles.list3}>
        <p className={styles.about}>7004*43214</p>
        <p className={styles.about}>eight@gmail.com</p>
        <p className={styles.about}>NIET GR NOIDA</p>
      </div>
      <div className={styles.title4}>Contact</div>
    </div>
  );
};

export default FormFooter;

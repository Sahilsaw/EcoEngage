import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
  const navigate = useNavigate();

  const onCrossClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.chatbot}>
      <img className={styles.chatbotChild} alt="" src="/rectangle-12.svg" />
      <div className={styles.chatbot1}>Chatbot</div>
      <input className={styles.chatbotItem} type="text" />
      <div className={styles.chatbotInner} />
      <img
        className={styles.fluentcamera24RegularIcon}
        alt=""
        src="/fluentcamera24regular.svg"
      />
      <img
        className={styles.fluentemojiLaugh16RegularIcon}
        alt=""
        src="/fluentemojilaugh16regular.svg"
      />
      <img
        className={styles.antDesignpaperClipOutlinedIcon}
        alt=""
        src="/antdesignpaperclipoutlined.svg"
      />
      <div className={styles.today830pm}>Today, 8.30pm</div>
      <div className={styles.today836pm}>Today, 8.36pm</div>
      <div className={styles.today833pm}>Today, 8.33pm</div>
      <div className={styles.today834pm}>Today, 8.34pm</div>
      <div className={styles.today858pm}>Today, 8.58pm</div>
      <div className={styles.lineDiv} />
      <img
        className={styles.bithreeDotsVerticalIcon}
        alt=""
        src="/bithreedotsvertical.svg"
      />
      <img className={styles.bimicFillIcon} alt="" src="/bimicfill1.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.chatbotChild1} />
      <div className={styles.chatbotChild2} />
      <div className={styles.chatbotChild3} />
      <div className={styles.chatbotChild4} />
      <div className={styles.chatbotChild5} />
      <div className={styles.ellipseDiv} />
      <div className={styles.chatbotChild6} />
      <div className={styles.chatbotChild7} />
      <div className={styles.chatbotChild8} />
      <div className={styles.chatbotChild9} />
      <div className={styles.chatbotChild10} />
      <div className={styles.div}>ഹായ് താങ്കളേ!</div>
      <div className={styles.div1}>സുഖമാണോ?</div>
      <div className={styles.div2}>
        ഞാൻ ശരിയാക്കിയിരിക്കുന്നു, നാളെ ഞങ്ങൾ കാണാമോ?
      </div>
      <div className={styles.div3}>ഹലോ!</div>
      <div className={styles.div4}>ഞാൻ ശരിയാണ്, നീ എങ്ങനെ?</div>
      <div className={styles.div5}>അതെ, തീരെ!</div>
      <img className={styles.bot1Icon} alt="" src="/bot-1@2x.png" />
      <button className={styles.cross} onClick={onCrossClick}>
        <img className={styles.crossChild} alt="" src="/line-9.svg" />
        <img className={styles.crossItem} alt="" src="/line-10.svg" />
      </button>
    </div>
  );
};

export default Chatbot;

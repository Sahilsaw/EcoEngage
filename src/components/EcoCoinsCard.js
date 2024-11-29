import styles from "./EcoCoinsCard.module.css";

const EcoCoinsCard = () => {
  return (
    <div className={styles.property1default}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.div}>150</div>
        <div className={styles.ecocoins}>EcoCoins</div>
        <img className={styles.medalsIcon} alt="" src="/medals.svg" />
      </div>
      <img
        className={styles.property1defaultChild}
        alt=""
        src="/group-481711.svg"
      />
    </div>
  );
};

export default EcoCoinsCard;

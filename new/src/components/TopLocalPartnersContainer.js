import styles from "./TopLocalPartnersContainer.module.css";

const TopLocalPartnersContainer = () => {
  return (
    <div className={styles.topLocalPartnersParent}>
      <div className={styles.topLocalPartners}>Top Local Partners</div>
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-1@2x.png" />
        <div className={styles.rupaStore}>Rupa store</div>
      </div>
      <div className={styles.ellipseGroup}>
        <img className={styles.groupChild} alt="" src="/ellipse-11@2x.png" />
        <div className={styles.susilaStore}>Susila store</div>
      </div>
      <div className={styles.ellipseContainer}>
        <img className={styles.groupChild} alt="" src="/ellipse-12@2x.png" />
        <div className={styles.sumitStore}>Sumit store</div>
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.groupChild} alt="" src="/ellipse-13@2x.png" />
        <div className={styles.lalitaStore}>Lalita store</div>
      </div>
    </div>
  );
};

export default TopLocalPartnersContainer;

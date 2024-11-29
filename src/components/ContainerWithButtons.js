import styles from "./ContainerWithButtons.module.css";

const ContainerWithButtons = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src="/group-2.svg" />
      <div className={styles.sommnathDas}>Sommnath Das</div>
      <div className={styles.materialSymbolslocationOnParent}>
        <img
          className={styles.materialSymbolslocationOnIcon}
          alt=""
          src="/materialsymbolslocationon.svg"
        />
        <div className={styles.kerla43rdStreet}>Kerla, 43rd street</div>
      </div>
      <div className={styles.groupWrapper}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <button className={styles.editProfile}>Edit profile</button>
        </div>
      </div>
    </div>
  );
};

export default ContainerWithButtons;

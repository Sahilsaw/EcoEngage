import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer2 from "../components/FormContainer2";
import ExploreFurnitureContainer from "../components/ExploreFurnitureContainer";
import TopLocalPartnersContainer from "../components/TopLocalPartnersContainer";
import Header from "../components/Header";
import styles from "./Marketplace.module.css";

const Marketplace = () => {
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

  return (
    <div className={styles.marketplace}>
      <FormContainer2 />
      <div className={styles.categories}>Categories</div>
      <div className={styles.button}>
        <button className={styles.viewAll}>View All</button>
      </div>
      <div className={styles.button1}>
        <button className={styles.viewAll1}>View All</button>
      </div>
      <ExploreFurnitureContainer />
      <TopLocalPartnersContainer />
      <div className={styles.rectangleParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-46@2x.png" />
        <div className={styles.recycledPlastic}>Recycled Plastic</div>
      </div>
      <div className={styles.rectangleGroup}>
        <img className={styles.groupItem} alt="" src="/rectangle-45@2x.png" />
        <div className={styles.handmadeDiy}>Handmade DIY</div>
      </div>
      <div className={styles.rectangleContainer}>
        <img className={styles.groupInner} alt="" src="/rectangle-44@2x.png" />
        <div className={styles.manureWaste}>Manure Waste</div>
      </div>
      <div className={styles.groupDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-43@2x.png"
        />
        <div className={styles.paperRecycle}>Paper Recycle</div>
      </div>
      <div className={styles.rectangleParent1}>
        <img
          className={styles.groupChild1}
          alt=""
          src="/rectangle-451@2x.png"
        />
        <div className={styles.plantBasedProducts}>Plant Based Products</div>
      </div>
      <div className={styles.rectangleParent2}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-441@2x.png"
        />
        <div className={styles.homemadeDiy}>Homemade DIY</div>
      </div>
      <div className={styles.search}>
        <div className={styles.button2}>
          <button className={styles.search1}>Search</button>
        </div>
        <div className={styles.searchChild} />
        <img className={styles.searchIcon} alt="" src="/carbonsearch.svg" />
      </div>
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

export default Marketplace;

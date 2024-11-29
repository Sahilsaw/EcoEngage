import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WebinarCardForm from "../components/WebinarCardForm";
import FormContainer from "../components/FormContainer";
import Header1 from "../components/Header1";
import styles from "./Event1.module.css";

const Event1 = () => {
  const navigate = useNavigate();

  const onInterestedClick = useCallback(() => {
    navigate("/one-event");
  }, [navigate]);

  const onMyRadiusClick = useCallback(() => {
    window.open("https://www.google.com/maps");
  }, []);

  return (
    <div className={styles.event}>
      <b className={styles.discoverEvents}>Discover Events</b>
      <div className={styles.eventChild} />
      <div className={styles.eventItem} />
      <button className={styles.myRadius} onClick={onMyRadiusClick}>
        My Radius
      </button>
      <b className={styles.date}>Date</b>
      <img className={styles.mdidateRangeIcon} alt="" src="/mdidaterange.svg" />
      <WebinarCardForm />
      <img
        className={styles.eventInner}
        alt=""
        src="/rectangle-34624113@2x.png"
      />
      <b className={styles.communityCleanupYourContainer}>
        <p className={styles.communityCleanup}>Community Cleanup:</p>
        <p className={styles.communityCleanup}> Your Hands, Our Future</p>
      </b>
      <div className={styles.joinUsIn}>
        Join us in making our community cleaner and brighter. Your hands can
        change the future. Volunteer for a community cleanup today!
      </div>
      <FormContainer
        imageDimensions="/rectangle-346241143@2x.png"
        dimensionText="/ictwotoneshare3.svg"
        imageDimensionsText="/materialsymbolsstaroutline2.svg"
        schoolLogoText="Dav public school"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-346241144@2x.png"
        dimensionText="/ictwotoneshare4.svg"
        imageDimensionsText="/materialsymbolsstaroutline3.svg"
        schoolLogoText="Dav public school"
        propTop="773px"
        propLeft="764px"
        propLeft1="27.14px"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-346241145@2x.png"
        dimensionText="/ictwotoneshare5.svg"
        imageDimensionsText="/materialsymbolsstaroutline31.svg"
        schoolLogoText="Dav public school"
        propTop="1525px"
        propLeft="764px"
        propLeft1="27.14px"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-346241146@2x.png"
        dimensionText="/ictwotoneshare4.svg"
        imageDimensionsText="/materialsymbolsstaroutline4.svg"
        schoolLogoText="Dav public school"
        propTop="773px"
        propLeft="432px"
        propLeft1="27.14px"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-346241147@2x.png"
        dimensionText="/ictwotoneshare6.svg"
        imageDimensionsText="/materialsymbolsstaroutline5.svg"
        schoolLogoText="sun house sec 1"
        propTop="773px"
        propLeft="100px"
        propLeft1="46px"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-346241148@2x.png"
        dimensionText="/ictwotoneshare5.svg"
        imageDimensionsText="/materialsymbolsstaroutline41.svg"
        schoolLogoText="Dav public school"
        propTop="1525px"
        propLeft="432px"
        propLeft1="27.14px"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-346241149@2x.png"
        dimensionText="/ictwotoneshare7.svg"
        imageDimensionsText="/materialsymbolsstaroutline4.svg"
        schoolLogoText="Dav public school"
        propTop="773px"
        propLeft="1096px"
        propLeft1="27.14px"
        onInterestedClick={onInterestedClick}
      />
      <FormContainer
        imageDimensions="/rectangle-3462411410@2x.png"
        dimensionText="/ictwotoneshare8.svg"
        imageDimensionsText="/materialsymbolsstaroutline41.svg"
        schoolLogoText="Dav public school"
        propTop="1525px"
        propLeft="1096px"
        propLeft1="27.14px"
        onInterestedClick={onInterestedClick}
      />
      <Header1 />
      <div className={styles.rectangleDiv} />
      <div className={styles.copyright}>SIH 2023. EIGHT</div>
      <img
        className={styles.phmapPinDuotoneIcon}
        alt=""
        src="/phmappinduotone.svg"
      />
      <div className={styles.eventChild1} />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.eventChild2} />
      <div className={styles.search}>Search</div>
    </div>
  );
};

export default Event1;

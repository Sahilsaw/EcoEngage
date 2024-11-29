import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BusinessCollaborationForm from "../components/BusinessCollaborationForm";
import Header from "../components/Header";
import FormContainer1 from "../components/FormContainer1";
import Container from "../components/Container";
import FormFooter from "../components/FormFooter";
import styles from "./HomePage.module.css";

const HomePage = () => {
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

  const onLiveClick = useCallback(() => {
    navigate("/one-event");
  }, [navigate]);

  const onJoinUsClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onViewMoreClick = useCallback(() => {
    navigate("/event");
  }, [navigate]);

  const onInterestedClick = useCallback(() => {
    navigate("/one-event");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <div className={styles.heroSection}>
        <div className={styles.joinTheWaste}>
          Join the Waste Warriors: Clean, Compete, Contribute!
        </div>
        <div className={styles.competeWithNeighbors}>
          Compete with neighbors, earn points, and make a real impact on your
          community's cleanliness and sustainability.
        </div>
        <img className={styles.icon} alt="" src="/7636-1@2x.png" />
      </div>
      <div className={styles.viewDetails}>View Details</div>
      <BusinessCollaborationForm />
      <Header
        onSignUpClick={onSignUpClick}
        onEventsClick={onEventsClick}
        onChatClick={onChatClick}
        onMarketplaceClick={onMarketplaceClick}
      />
      <div className={styles.homePageChild} />
      <img className={styles.homePageItem} alt="" src="/rectangle-8@2x.png" />
      <FormContainer1 />
      <div className={styles.events}>
        <img
          className={styles.eventsChild}
          alt=""
          src="/rectangle-346241141@2x.png"
        />
        <div className={styles.eventsItem} />
        <img
          className={styles.ictwotoneShareIcon}
          alt=""
          src="/ictwotoneshare1.svg"
        />
        <b className={styles.sep2023}>9 sep 2023</b>
        <b className={styles.davPublicSchool}>Dav public school</b>
        <b className={styles.interested21}>211 INTERESTED - 21 GOING</b>
      </div>
      <div className={styles.events1}>
        <img
          className={styles.eventsInner}
          alt=""
          src="/rectangle-346241142@2x.png"
        />
        <div className={styles.rectangleDiv} />
        <img
          className={styles.ictwotoneShareIcon1}
          alt=""
          src="/ictwotoneshare2.svg"
        />
        <b className={styles.sep20231}>16 sep 2023</b>
        <b className={styles.nearNietCollege}>near Niet college</b>
        <b className={styles.interested211}>301 INTERESTED - 21 GOING</b>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <button className={styles.live} onClick={onLiveClick}>
            Live
          </button>
          <img
            className={styles.fluentlocationLive24RegulaIcon}
            alt=""
            src="/fluentlocationlive24regular.svg"
          />
        </div>
      </div>
      <div className={styles.discoverOurTopRated}>
        Discover our top-rated events, showcasing the best in waste management
        and sustainability. Join the movement!
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.diveIntoThe}>
          Dive into the basics of astronomy. Learn about stars, planets,
          galaxies, and the tools astronomers use to explore the universe.
        </div>
        <div className={styles.div}>01.</div>
        <div className={styles.onlineFreeCourses}>
          Online free courses and tutorials
        </div>
        <div className={styles.delveIntoThe}>
          Delve into the cutting-edge technology powering space exploration,
          from spacecraft and telescopes to propulsion systems and space
          habitats.
        </div>
        <div className={styles.div1}>02.</div>
        <div className={styles.resourcesForTeachers}>
          Resources for teachers and educators
        </div>
        <div className={styles.diveIntoThe1}>
          Dive into the basics of astronomy. Learn about stars, planets,
          galaxies, and the tools astronomers use to explore the universe.
        </div>
        <div className={styles.div2}>03.</div>
        <div className={styles.bookRecommendationsAnd}>
          Book recommendations and reviews
        </div>
      </div>
      <Container />
      <FormFooter />
      <div className={styles.homePageInner} />
      <button className={styles.joinUs} onClick={onJoinUsClick}>
        Join us
      </button>
      <div className={styles.homePageChild1} />
      <button className={styles.viewMore} onClick={onViewMoreClick}>
        View more
      </button>
      <div className={styles.homePageChild2} />
      <button className={styles.interested} onClick={onInterestedClick}>
        Interested
      </button>
      <img
        className={styles.materialSymbolsstarOutlineIcon}
        alt=""
        src="/materialsymbolsstaroutline1.svg"
      />
      <img
        className={styles.streamlinephoneContactPhoneIcon}
        alt=""
        src="/streamlinephonecontactphonebookphonebookphonenumberbooksbook1.svg"
      />
      <img
        className={styles.ictwotoneEmailIcon}
        alt=""
        src="/ictwotoneemail.svg"
      />
      <img
        className={styles.mdiaddressMarkerIcon}
        alt=""
        src="/mdiaddressmarker.svg"
      />
    </div>
  );
};

export default HomePage;

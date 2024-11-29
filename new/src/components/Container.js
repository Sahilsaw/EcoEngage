import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Container.module.css";

const Container = () => {
  const navigate = useNavigate();

  const onGroupImageClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onGroupImage2Click = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  return (
    <div className={styles.gridArticleBig}>
      <div className={styles.blogsParent}>
        <div className={styles.blogs}>Blogs</div>
        <div className={styles.groupParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/group-46@2x.png"
            onClick={onGroupImageClick}
          />
          <div className={styles.graphicDesign}>The Art of Recycling</div>
          <img className={styles.groupItem} alt="" src="/group-47.svg" />
          <div className={styles.discoverTheCreativeContainer}>
            <p
              className={styles.discoverTheCreative}
            >{`Discover the creative world of `}</p>
            <p
              className={styles.discoverTheCreative}
            >{`upcycling and how everyday `}</p>
            <p
              className={styles.discoverTheCreative}
            >{`items can find new life as `}</p>
            <p className={styles.discoverTheCreative}>{`unique treasures. `}</p>
            <p
              className={styles.discoverTheCreative}
            >{`Learn how recycling can be an `}</p>
            <p className={styles.discoverTheCreative}>
              art form with a positive impact.
            </p>
          </div>
          <div className={styles.explorePracticalWasteContainer}>
            <p
              className={styles.discoverTheCreative}
            >{`Explore practical waste reduction tips that `}</p>
            <p
              className={styles.discoverTheCreative}
            >{`make a significant difference in your `}</p>
            <p
              className={styles.discoverTheCreative}
            >{`environmental footprint. `}</p>
            <p
              className={styles.discoverTheCreative}
            >{`Find out how small changes in daily life `}</p>
            <p className={styles.discoverTheCreative}>
              can lead to a big impact on waste reduction.
            </p>
          </div>
          <div className={styles.unearthTheSecretsContainer}>
            <p
              className={styles.discoverTheCreative}
            >{`Unearth the secrets of composting and how `}</p>
            <p
              className={styles.discoverTheCreative}
            >{`turning kitchen scraps into nutrient-rich `}</p>
            <p
              className={styles.discoverTheCreative}
            >{`soil can transform your gardening experience. `}</p>
            <p
              className={styles.discoverTheCreative}
            >{`Join the composting revolution for a greener, `}</p>
            <p className={styles.discoverTheCreative}>
              more sustainable lifestyle.
            </p>
          </div>
        </div>
        <div className={styles.groupContainer} onClick={onGroupContainer1Click}>
          <img className={styles.groupInner} alt="" src="/group-461@2x.png" />
          <div className={styles.graphicDesign1}>Waste Reduction Hacks</div>
        </div>
        <div className={styles.groupDiv}>
          <img
            className={styles.groupIcon}
            alt=""
            src="/group-462@2x.png"
            onClick={onGroupImage2Click}
          />
          <div className={styles.graphicDesign1}>From Trash to Garden</div>
        </div>
      </div>
    </div>
  );
};

export default Container;

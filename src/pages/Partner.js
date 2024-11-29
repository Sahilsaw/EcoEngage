import styles from "./Partner.module.css";

const Partner = () => {
  return (
    <div className={styles.partner}>
      <div className={styles.partnerChild} />
      <div
        className={styles.exploreTheExciting}
      >{`Explore the exciting opportunities for businesses to collaborate with [Your Website Name] in the pursuit of a greener, more sustainable future. In this blog post, we delve into the benefits of partnering with us, the positive impact on corporate social responsibility, and how together, we can make a meaningful difference in waste management and sustainability efforts. Discover the various ways your business can get involved, from sponsoring eco-friendly initiatives to participating in community cleanups, and join us in this transformative `}</div>
      <div className={styles.partner1}>PARTNER</div>
    </div>
  );
};

export default Partner;

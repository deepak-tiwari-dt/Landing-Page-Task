import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUsContainer}>
      <div className={styles.sidebar1}>
        <div>Our Team</div>
      </div>
      <div className={styles.sidebar2}>
        <div>Personal Details</div>
      </div>
      <div className={styles.mainContent}>
        <h1>Contact Us</h1>
        <p>
          We are a team of engineers, communication experts, and innovators who
          specialize in developing technology propositions for the world around
          us. We noticed that in an overwhelming number of use cases, technology
          was not really the problem; mistrust came from how it was deployed by
          creators and then understood and used by consumers.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;

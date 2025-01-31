import styles from "./PersonalDetails.module.css"; // Import the CSS module

const PersonalDetails = () => {
  return (
    <div className={styles.personalDetailsContainer}>
      <div className={styles.sidebar}>Our Team</div>
      <div className={styles.detailsForm}>
        <h1>Personal Details</h1>
        <form>
          <div className={styles.inputGroup}>
            <i className={styles.icon}>👤</i>
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div className={styles.inputGroup}>
            <i className={styles.icon}>📞</i>
            <input type="text" placeholder="Enter Your Mobile Number" />
          </div>
          <textarea placeholder="Enter Your Address"></textarea>
        </form>
      </div>
      <div className={styles.sidebarRight}>Contact Us</div>
    </div>
  );
};

export default PersonalDetails;

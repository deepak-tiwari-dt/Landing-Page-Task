import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import the CSS module
import Logo from "../../public/Logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <nav>
        <Link className={styles.link} to="/our-team">
          Our Team
        </Link>
        <Link className={styles.link} to="/personal-details">
          Personal Details
        </Link>
        <Link className={styles.link} to="/contact-us">
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

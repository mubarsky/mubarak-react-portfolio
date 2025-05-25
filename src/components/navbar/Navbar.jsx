import { FaSun, FaRegMoon } from "react-icons/fa";
import styles from "./navbar.module.css";
import clsx from "clsx";
const Navbar = ({ onToggleTheme, theme }) => {
  return (
    <section className={clsx(styles.navbar, theme === "dark" && styles.dark)}>
      <div className={styles.logo}>
        <h1> Mubby </h1>
      </div>

      <ul className={styles.navbarlist}>
        <a href="#about">
          <li className={styles.navlists}> About</li>
        </a>
        <a href="#education">
          <li className={styles.navlists}> Education </li>
        </a>
        <a href="#skills">
          <li className={styles.navlists}> Skills</li>
        </a>
        <a href="#projects">
          <li className={styles.navlists}> Projects</li>
        </a>
        <a href="#blog">
          <li className={styles.navlists}> Blog </li>
        </a>
        <a href="#contact">
          <li className={styles.navlists}> Contact </li>
        </a>
      
        {theme === "dark" ? (
          <FaSun
            className={styles.brightness}
            onClick={onToggleTheme}
            style={{ cursor: "pointer" }}
            title="Switch to light mode"
          />
        ) : (
          <FaRegMoon
            className={styles.brightness}
            onClick={onToggleTheme}
            style={{ cursor: "pointer" }}
            title="Switch to dark mode"
          />
        )}
       
      </ul>
    </section>
  );
};

export default Navbar;

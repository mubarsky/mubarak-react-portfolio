import { FaSun, FaRegMoon } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBarsStaggered } from "react-icons/fa6";
import styles from "./navbar.module.css";
import clsx from "clsx";
import { NavbarData } from "../../../utils/data";
import { useState, useEffect } from "react";
const Navbar = ({ onToggleTheme, theme }) => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 630 && isMenuOpen) {
        setisMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <section className={clsx(styles.navbar, theme === "dark" && styles.dark)}>
      <div className={styles.logo}>
        <h1> Mubby </h1>
      </div>

      <section className={styles.rightNav}>
        <ul
          className={clsx(
            styles.navbarlist,
            isMenuOpen && styles.showMobileMenu,
            theme === "dark" && styles.dark
          )}
        >
          {NavbarData.map((item) => (
            <li
              key={item.id}
              className={
                (styles.navbarlists, isMenuOpen && styles.showMobileMenulists)
              }
            >
              <a href={item.link} onClick={() => setisMenuOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.brightnessContainer}>
          {" "}
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
        </div>
        <div className={styles.bars}>
          {isMenuOpen ? (
            <LiaTimesSolid onClick={handleMenuToggle} title="Close menu" />
          ) : (
            <FaBarsStaggered onClick={handleMenuToggle} title="Open menu" />
          )}
        </div>
      </section>
    </section>
  );
};

export default Navbar;

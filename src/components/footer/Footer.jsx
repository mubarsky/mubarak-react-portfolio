import styles from './footer.module.css'
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { TbBrandTwitter } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";
import clsx from "clsx";
const Footer = ({theme}) => { 
  return (
    <>
      <section
        className={clsx(
          styles.footerContainer,
          theme === "dark" && styles.darkEducation
        )}
      >
        <div className={styles.footerLeft}>
          <h1>Ismail Mubarak</h1>
          <p>Software Engineering </p>
        </div>
        <div className={styles.footerIcons}>
          <a href="https://github.com/mubarsky" target="_blank">
            <div className={styles.github}>
              <LuGithub className={styles.githubI} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/mubby-mubby/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.github}>
              <LuLinkedin className={styles.githubI} />
            </div>
          </a>
          <a
            href="https://x.com/MubarakIsm80813"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.github}>
              <TbBrandTwitter className={styles.githubI} />
            </div>
          </a>
          <a
            href="https://www.instagram.com/mubarsky1221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.github}>
              <FaInstagram className={styles.githubI} />
            </div>
          </a>
          <a
            href="mailto:ismailmubarak1221@gmail.com?subject=Hello&body=I%20want%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.github}>
              <MdMailOutline className={styles.githubI} />
            </div>
          </a>
          <a href="#hero">
            <div className={styles.arrow}>
              <IoMdArrowUp className={styles.arrowI} />
            </div>
          </a>
        </div>
      </section>
      <div className={styles.footer}>
        <p>© 2025 Ismail Mubarak. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer
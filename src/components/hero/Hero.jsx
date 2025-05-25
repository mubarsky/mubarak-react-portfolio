import styles from "./hero.module.css";
import { CiMail } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <section id="hero" className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.leftName}>Hi, I'm Ismail Mubarak</h1>
          <p className={styles.leftP1}>
            Software Engineering Undergraduate | Full Stack Developer
          </p>
          <p className={styles.leftP2}>
            I build accessible, user-friendly websites and applications with
            modern technologies.
          </p>
          <div className={styles.heroBtn}>
            <a href="#contact">
              <button className={styles.btn1}>
                <CiMail className={styles.mail} />
                Get In Touch
              </button>
            </a>
            <a href="/Mubarak-Ismail-CV.pdf" download>
              <button className={styles.btn2}>
                <GoDownload className={styles.download} />
                Download Resume (PDF)
              </button>
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/my-pic.jpg" alt="" />
        </div>
      </section>
      <div className={styles.scroll}>
        <p> Scroll down</p>
        <FaArrowDown className={styles.arrow} />
      </div>
    </>
  );
};

export default Hero;

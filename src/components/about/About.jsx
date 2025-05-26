import styles from './about.module.css';
import clsx from "clsx";
const About = ({ theme }) => {
  return (
    <>
      <section
        id="about"
        className={clsx(styles.about, theme === "dark" && styles.dark)}
    
      >
        <h1>About Me</h1>
        <section className={styles.aboutContent}>
          <div className={styles.aboutLeft}>
            <img src="/about-pic.jpg" alt="" />
          </div>
          <div className={styles.aboutRight}>
            <p>
              I began my software engineering journey two years ago, learning
              and growing through hands-on experience at Marusoft Technologies.
              My initial focus was on frontend development, where I built a
              solid foundation in HTML, CSS, and JavaScript — with JavaScript
              being one of the biggest challenges I worked hard to overcome.
            </p>
            <p>
              After mastering frontend basics, I advanced to learning React,
              which I'm now using to build my personal portfolio. Along the way,
              I’ve completed several projects, including a hospital website and
              a clone of the BBC homepage. Among these, I’m especially proud of
              the hospital website — it pushed my skills and creativity further
              than any project before.
            </p>
            <p>
              I’ve recently begun exploring backend development as I work toward
              becoming a full-stack developer. My goal is to complete this stage
              and progress to the next level in my software engineering journey,
              continuing to build real-world applications and grow my skillset
              in both frontend and backend technologies.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About
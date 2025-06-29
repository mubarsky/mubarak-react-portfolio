import styles from "./resume.module.css";
import { FiFileText } from "react-icons/fi";
import clsx from "clsx";
const Resume = ({ theme }) => {
  return (
    <>
      <section
        className={clsx(
          styles.resumeContainer,
          theme === "dark" && styles.dark
        )}
      >
        <h1>Resume</h1>
        <div className={styles.resumeContent}>
          <FiFileText className={styles.resumeIcon} />
          <p className={styles.myResume}>My Resume</p>
          <p className={styles.resumeDescription}>
            Download my resume to learn more about my experience, skills, and
            qualifications.
          </p>
          <a href="/Mubarak-Ismail-CV.pdf" download>
            {" "}
            <button className={styles.resumeButton}>
              Download My Resume(PDF)
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Resume;

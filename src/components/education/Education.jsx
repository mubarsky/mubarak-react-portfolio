import styles from "./education.module.css";
import clsx from "clsx";
const Education = ({ theme }) => {
  return (
    <>
      <section
        id="education"
        className={clsx(
          styles.education,
          theme === "dark" && styles.darkEducation
        )}
      >
        <h1>Education</h1>
        <div className={styles.educationContent}>
          <div className={styles.EducationLeft}>
            <div className={styles.educationContent1}>
              <div className={styles.educationContent1_1}>
                <p className={styles.p1}>
                  Backend devlopment - Software Engineering Training
                </p>
                <p className={styles.p2}>2025-present</p>
              </div>
              <div className={styles.educationContent1_2}>
                <p>Marusoft Technologies</p>
                <p>Intermediate Level</p>
              </div>
              <div>
                <p className={styles.p3}>
                  Currently enrolled in a Software Engineering Training program
                  at Marusoft Technologies, focusing on backend development.
                </p>
              </div>
            </div>
            <div className={styles.educationContent1}>
              <div className={styles.educationContent1_1}>
                <p className={styles.p1}>
                  Frontend devlopment - Software Engineering
                </p>
                <p className={styles.p2}>2023-2024</p>
              </div>
              <div className={styles.educationContent1_2}>
                <p>Marusoft Technologies</p>
                <p>Expert level</p>
              </div>
              <div>
                <p className={styles.p3}>
                  Completed Frontend development training, building a strong
                  foundation in HTML, CSS, JavaScript, and React.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.educationContent2}>
            <p className={styles.p1}>Certifications</p>
            <div className={styles.certification_content}>
              <div className={styles.educationContent2_1}>
                <p className={styles.p_4}>
                  React basis - Meta Front-End Developer
                </p>
                <p className={styles.p2}>Meta • 2025</p>
              </div>
              <div className={styles.educationContent2_1}>
                <p className={styles.p_4}>
                  Programming with JavaScript - Meta Front-End Developer
                </p>
                <p className={styles.p2}>Meta • 2024</p>
              </div>
              <div className={styles.educationContent2_1}>
                <p className={styles.p_4}>
                  Version Control - Meta Front-End Developer Meta • 2024
                </p>
                <p className={styles.p2}>Meta • 2024</p>
              </div>
              <div className={styles.educationContent2_1}>
                <p className={styles.p_4}>
                  Introduction to Front-End Development - Meta Front-End
                  Developer
                </p>
                <p className={styles.p2}>Meta • 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;

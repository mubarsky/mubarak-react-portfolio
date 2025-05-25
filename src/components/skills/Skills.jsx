import styles from "./skills.module.css";
import clsx from "clsx";
const Skills = ({ theme }) => {
  return (
    <>
      <section
        id="skills"
        className={clsx(
          styles.skillsContainer,
          theme === "dark" && styles.darkEducation
        )}
      >
        <div className={styles.skillsContent}>
          <h1>Skills</h1>
          <p>Here are the technologies and tools I work with</p>
        </div>
        <div className={styles.skills}>
          <div className={styles.frontend}>
            <p>Frontend Development</p>
            <div className={styles.frontendIcons}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                width="50"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                width="50"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                width="50"
              />
            </div>
          </div>
          <div className={styles.backend}>
            <p>Backend Development</p>
            <div className={styles.backendIcons}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                width="50"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                width="50"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                width="50"
              />
            </div>
          </div>
          <div className={styles.otherTools}>
            <p> Other Development Tools</p>
            <div className={styles.otherToolsIcons}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                width="50"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                width="50"
              />
         

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
                width="50"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

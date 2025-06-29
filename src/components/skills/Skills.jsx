import styles from "./skills.module.css";
import clsx from "clsx";
import { frontendSkills, backendSkills, otherTools } from "../../../utils/data";
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
              {frontendSkills.map((item) => (
                <img key={item.id} src={item.icon} width="50" alt={item.name} />
              ))}
            </div>
          </div>
          
            <div className={styles.backend}>
              <p>Backend Development</p>
              <div className={styles.backendIcons}>
                {backendSkills.map((item) => (
                  <img
                    key={item.id}
                    src={item.icon}
                    width="50"
                    alt={item.name}
                  />
                ))}
              </div>
            </div>
            <div className={styles.otherTools}>
              <p> Other Development Tools</p>
              <div className={styles.otherToolsIcons}>
                {otherTools.map((item) => (
                  <img
                    key={item.id}
                    src={item.icon}
                    width="50"
                    alt={item.name}
                  />
                ))}
              </div>
            </div>
         
        </div>
      </section>
    </>
  );
};

export default Skills;

import styles from "./blog.module.css";
import { IoMdTime } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import clsx from "clsx";
const Blog = ({ theme }) => {
  return (
    <section
      id="blog"
      className={clsx(styles.blogContainer, theme === "dark" && styles.dark)}
      
    >
      <h1>Blog</h1>
      <p className={styles.pT}>
        Thoughts, tutorials, and insights on web development
      </p>
      <div className={styles.blogCards}>
        <div className={styles.card1}>
          <div className={styles.cardPic}>
            <img src="/react-pic.jpg" alt="" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.blogTime}>
              <p>Apr 16, 2025 •</p>
              <IoMdTime className={styles.timeIcon} />
              <p> 5 min read</p>
            </div>
            <div className={styles.blogDesc}>
              <p>Mastering React: A Complete Roadmap for Aspiring Developers</p>
            </div>
            <div className={styles.blogText}>
              <p>
                React is a popular JavaScript library for building web apps.
                This roadmap guides beginners and pros through learning it
                fully.
              </p>
            </div>
            <a
              href="
            https://medium.com/@imansha.idr/mastering-react-a-complete-roadmap-for-aspiring-developers-224f2305dd67
            "
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMoreLink}
            >
              <div className={styles.readMore}>
                <p>Read more</p>
                <FaArrowRight className={styles.arrowIcon} />
              </div>
            </a>
          </div>
        </div>
        <div className={styles.card1}>
          <div className={styles.cardPic}>
            <img src="/card-2.webp" alt="" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.blogTime}>
              <p>Jun 24, 2024 •</p>
              <IoMdTime className={styles.timeIcon} />
              <p> 8 min read</p>
            </div>
            <div className={styles.blogDesc}>
              <p>A Cheerful Guide to Software Licences and Copyright Law</p>
            </div>
            <div className={styles.blogText}>
              <p>
                Learn open source licenses and copyright basics in a fun, simple
                guide to help developers write great code with confidence.
              </p>
            </div>
            <a
              href="
          https://medium.com/@imansha.idr/a-cheerful-guide-to-software-licences-and-copyright-law-71a185aad9cc
            "
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMoreLink}
            >
              <div className={styles.readMore}>
                <p>Read more</p>
                <FaArrowRight className={styles.arrowIcon} />
              </div>
            </a>
          </div>
        </div>
        <div className={styles.card1}>
          <div className={styles.cardPic}>
            <img src="/card-3.webp" alt="" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.blogTime}>
              <p>Feb 24, 2024 •</p>
              <IoMdTime className={styles.timeIcon} />
              <p> 7 min read</p>
            </div>
            <div className={styles.blogDesc}>
              <p>Stored Procedures in MySQL</p>
            </div>
            <div className={styles.blogText}>
              <p>
                A quick guide to MySQL stored procedures: what they are, pros
                and cons, and how to write and use them effectively.
              </p>
            </div>
            <a
              href="
            https://medium.com/@imansha.idr/stored-procedures-in-mysql-e507b77e29b4
            "
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMoreLink}
            >
              <div className={styles.readMore}>
                <p>Read more</p>
                <FaArrowRight className={styles.arrowIcon} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

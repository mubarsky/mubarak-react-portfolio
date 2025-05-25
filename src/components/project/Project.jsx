import styles from "./project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Project = ({ theme }) => {
  return (
    <>
      <section
        id="projects"
        className={clsx(
          styles.projectContainer,
          theme === "dark" && styles.darkEducation
        )}
      >
        <div className={styles.projectContent}>
          <h1>Projects</h1>
          <p>Here are some of the projects I have worked on</p>
        </div>

        <div className={styles.projectWrapper}>
          <button className={`custom-prev ${styles.arrow}`}>
            <FaArrowLeft className={styles.arrowIcon} />
          </button>

          <Swiper
            className={styles.projectSwiper}
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            onSlideChange={() => console.log("slide changed")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            autoplay={{ delay: 30000, disableOnInteraction: true }}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.slide}>
                <div className={styles.slideTop}>
                  <img src="/admin-pic.png" alt="" />
                </div>
                <div className={styles.slideBottom}>
                  <div className={styles.slideBottomContent}>
                    <p className={styles.squad}>Healthpro Squad</p>
                    <p className={styles.info}>
                      Built a Hospital Website with html,CSS and
                      javascript.Includes Appointment,Services,About us and
                      Admin panel
                    </p>
                    <div className={styles.slideBottomskills}>
                      <p>html</p>
                      <p>CSS</p>
                      <p>java</p>
                    </div>
                    <div className={styles.slideBottomBtn}>
                      <a
                        href="https://healthpro-squad.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={styles.slideBtn1}>
                          View Project
                        </button>
                      </a>
                      <a
                        href="https://github.com/mubarsky/Healthpro-Squad"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={styles.slideBtn2}>View Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.slide}>
                <div className={styles.slideTop}>
                  <img src="/public/portfolio.png" alt="" />
                </div>
                <div className={styles.slideBottom}>
                  <div className={styles.slideBottomContent}>
                    <p className={styles.squad}>Portfolio</p>
                    <p className={styles.info}>
                      Built a Personal Portfolio with html and CSS.Includes My
                      Tech Stack,Projects and About Me .
                    </p>
                    <div className={styles.slideBottomskills}>
                      <p>html</p>
                      <p>CSS</p>
                    </div>
                    <div className={styles.slideBottomBtn}>
                      <a
                        href="https://mubarsky.github.io/portfolio/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <button className={styles.slideBtn1}>
                          View Project
                        </button>
                      </a>

                      <a
                        href="https://github.com/mubarsky/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={styles.slideBtn2}>View Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.slide}>
                <div className={styles.slideTop}>
                  <img src="/public/BBC.png" alt="" />
                </div>
                <div className={styles.slideBottom}>
                  <div className={styles.slideBottomContent}>
                    <p className={styles.squad}>BBC Cloned Website</p>
                    <p className={styles.info}>
                      Built a BBC Cloned Website with html and CSS.Includes
                      Home,News,Election, Bussiness sport etc.
                    </p>
                    <div className={styles.slideBottomskills}>
                      <p>html</p>
                      <p>CSS</p>
                    </div>
                    <div className={styles.slideBottomBtn}>
                      <a
                        href="https://mubarsky.github.io/BBC/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={styles.slideBtn1}>
                          View Project
                        </button>
                      </a>

                      <a
                        href="https://github.com/mubarsky/BBC"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={styles.slideBtn2}>View Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button className={`custom-next ${styles.arrow}`}>
            <FaArrowRight className={styles.arrowIcon} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Project;

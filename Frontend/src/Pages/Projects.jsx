// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { DataProjects } from "../data/dataProjects";
import { useState, useRef } from "react";
import github from "../assets/github.svg";

// Import Swiper styles
import "swiper/css";
import { ArrowUpRight } from "../assets/Icons";

const Projects = () => {
  const [dataProject, setProject] = useState(DataProjects[0]);

  const swiperRef = useRef();

  const handleChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(DataProjects[currentIndex]);
  };

  return (
    <section className="flex justify-center w-screen">
      <main className="dark:bg-secondary animate-fadeInRight lg:animate-fadeInLeft lg:ml-[5.5rem] md:w-[720px] md:h-[812px]  h-[36.5rem] w-[360px] lg:w-[1424px] lg:h-[690px] bg-tertiary rounded-3xl lg:flex lg:justify-around lg:items-center">
        {/* description work */}
        {/* previewproject */}
        <div className="p-2 fadeIn-content">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            onSlideChange={handleChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="lg:w-[590px]"
          >
            {DataProjects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt="project one"
                  className="bg-cover"
                />
              </SwiperSlide>
            ))}
            {/* slideButton */}
            <div className="flex justify-end gap-5 mt-2">
              <button
                onClick={() => swiperRef.current.slidePrev()}
                className="w-10 h-10 pb-2 text-3xl font-extrabold rounded-full dark:text-secondary dark:bg-tertiary bg-secondary text-primary"
              >
                {"<"}
              </button>
              <button
                onClick={() => swiperRef.current.slideNext()}
                className="w-10 h-10 pb-2 text-3xl font-extrabold rounded-full dark:text-secondary dark:bg-tertiary bg-secondary text-primary "
              >
                {">"}
              </button>
            </div>
          </Swiper>
        </div>
        <div className="lg:h-[470px] px-2 fadeIn-sideContent">
          <p className="text-[4rem] font-black leading-none text-transparent lg:h-28 font-JetBrainsMono lg:text-8xl text-stroke dark:text-">
            {dataProject.number}
          </p>
          <p className="text-4xl font-bold tracking-tighter dark:text-tertiary text-secondary lg:h-16 lg:mb-2 lg:text-6xl">
            {dataProject.category}
          </p>
          <p className="lg:text-lg lg:w-[400px] lg:h-16 dark:text-tertiary">
            {dataProject.description}
          </p>
          <p className="lg:w-[407px] lg:h-16 text-secondary lg:text-xl lg:font-medium font-bold dark:text-tertiary">
            {dataProject.stacks}
          </p>
          <div className="relative w-full border-t-4 dark:border-primary border-secondary lg:w-96">
            <a
              href={dataProject.github}
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                src={github}
                alt="github"
                className="mt-2 w-9 lg:w-11"
              />
            </a>
            <a
              href={dataProject.website}
              rel="noreferrer noopener"
              target="_blank"
              className="absolute flex items-center justify-center rounded-full top-[0.6rem] left-6 w-9 h-9 lg:w-11 lg:h-11 dark:bg-tertiary dark:text-secondary  bg-primary"
            >
              <ArrowUpRight className="w-6 lg:w-7" />
            </a>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Projects;

import { NavLink } from "react-router-dom";
import { ArrowRight } from "../assets/Icons";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

const Home = () => {
  const [showType, setShowType] = useState(false);
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    // Menampilkan elemen setelah 3 detik
    const timerType = setTimeout(() => {
      setShowType(true);
    }, 1000);

    const timerRole = setTimeout(() => {
      setShowRole(true);
    }, 2000);

    // Membersihkan timer saat komponen unmount
    return () => clearTimeout(timerType, timerRole);
  }, []);
  return (
    <section className="flex justify-center w-screen h-screen overflow-hidden">
      <main className="dark:bg-secondary  animate-fadeInRight lg:animate-fadeInLeft relative h-[36.5rem]  w-[360px] overflow-hidden md:w-[720px] md:h-[812px] lg:w-[1424px] lg:h-[690px]  bg-tertiary rounded-3xl lg:ml-[5.5rem] lg:flex  lg:justify-around lg:items-center">
        <div className="mt-5 md:ml-[5.25rem] md:mt-52 lg:w-[533px]  lg:m-0 lg:transition-all lg:duration-300">
          {showType && (
            <h2 className="opacity-content font-medium leading-[.75] tracking-tighter text-9xl dark:text-tertiary">
              <Typewriter
                words={["Front-end"]}
                loop={1}
                typeSpeed={70}
                delaySpeed={100000}
              />
            </h2>
          )}

          {showRole && (
            <h2 className="font-bold text-7xl md:text-9xl md:font-medium md:tracking-tighter dark:text-tertiary">
              <Typewriter
                words={["Developer"]}
                loop={1}
                cursor
                typeSpeed={70}
                delaySpeed={20000}
              />
            </h2>
          )}
          <p className="font-medium fadeIn-Des -2 animate-fadeInRight text-secondary sm:text-lg dark:text-tertiary">
            Frontend Engineer focused on{" "}
            <span className="text-primary">data-driven,</span> dashboards,{" "}
            complex <span className="text-primary">state management,</span> and
            Web3 <span className="text-primary">interfaces.</span>
          </p>
        </div>
        {/* link to projects */}
        <div className="flex gap-1 mt-2 ml-2 md:ml-[5.25rem] lg:h-60 fadeIn-LinkProject">
          <div className="h-10 text-center rounded-full w-44 sm:h-16 sm:w-72 bg-secondary dark:bg-tertiary">
            <p className="pt-1 text-2xl font-medium text-white dark:text-secondary sm:pt-3 sm:text-3xl ">
              <i>projects</i>
            </p>
          </div>
          <NavLink
            to="/projects"
            className="flex items-center justify-center w-10 h-10 text-white rounded-full dark:text-secondary hover:animate-bounceRight sm:w-16 sm:h-16 bg-primary"
          >
            <ArrowRight className="w-6 sm:w-10" />
          </NavLink>
        </div>

        {/* status experience text */}
        <div className="fadeIn-experience absolute top-[17px] -right-9 w-36 text-center dark:text-secondary dark:bg-tertiary text-white rotate-45 rounded-lg h-11 bg-secondary">
          <p className="pt-[6px] text-2xl font-medium">Open</p>
        </div>
      </main>
    </section>
  );
};

export default Home;

import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Js from "../assets/javascript.svg";
import Tailwind from "../assets/tailwind.svg";
import react from "../assets/reactjs.svg";
import Next from "../assets/nextjs.svg";
import MongoDb from "../assets/mongoDB.svg";

const About = () => {
  return (
    <section className="flex justify-center w-screen">
      <main className="dark:bg-secondary animate-fadeInRight lg:animate-fadeInLeft lg:ml-[5.5rem] md:w-[720px] md:h-[812px]  h-[36.5rem] w-[360px] lg:w-[1424px] lg:h-[690px]  bg-tertiary rounded-3xl lg:flex lg:justify-around lg:items-center">
        <div className="p-2 md:pt-14 md:pl-12 lg:max-w-xl">
          <div className="fadeIn-content">
            <h2 className="text-6xl font-bold text-secondary dark:text-tertiary">
              ABOUT ME
            </h2>
            <p className="mt-2 font-bold dark:text-tertiary text-secondary lg:text-lg">
              My real name is{" "}
              <span className="text-primary">M. Badrizzaman</span> ,
              and I am from Central Java, Indonesia. I started
              focusing on{" "}
              <span className="text-primary">learning in 2023</span>{" "}
              through the WPU YouTube channel. I{" "}
              <span className="text-primary">enjoy coding</span>{" "}
              because solving problems is very challenging and
              enjoyable. My goal is to
              <q className="text-primary">
                be better today than I was yesterday.
              </q>
            </p>
          </div>
        </div>
        {/* skills */}
        <div className=" md:mt-36 relative  lg:w-[576px] lg:max-w-xl  h-[300px] lg:h-auto flex justify-center items-center">
          <h3 className="text-6xl font-bold skills dark:text-tertiary lg:text-center text-secondary">
            SKILLS
          </h3>
          <p className="html  md:left-48 left-4 top-4 drop-shadow-[5px_8px_5px_rgba(0,0,0,0.25)] absolute w-16 h-16 rounded-full dark:bg-tertiary bg-primary lg:-top-[9.5rem] lg:left-[9.5rem] justify-center items-center  flex">
            <img src={Html} alt="HTML" className="w-full h-12" />
          </p>
          <p className="css md:left-[16.5rem] top-12 left-[7.5rem] absolute drop-shadow-[5px_8px_5px_rgba(0,0,0,0.25)] flex items-center justify-center rounded-full w-14 h-14 bg-primary dark:bg-tertiary lg:-top-16 lg:left-60">
            <img src={Css} alt="CSS" className="w-full h-10" />
          </p>
          <p className="js md:right-48 right-8 top-4 absolute drop-shadow-[5px_8px_5px_rgba(0,0,0,0.25)] w-16 h-16 rounded-full bg-primary dark:bg-tertiary lg:-top-[6.5rem] lg:right-[9.5rem] justify-center items-center  flex">
            <img src={Js} alt="JavaScript" className="w-full h-10" />
          </p>
          <p className="tailwind md:left-36 bottom-12 left-0 absolute drop-shadow-[5px_8px_5px_rgba(0,0,0,0.25)] w-16 h-16 rounded-full bg-primary dark:bg-tertiary lg:top-2 lg:left-[6.5rem] justify-center items-center  flex">
            <img
              src={Tailwind}
              alt="TailwindCss"
              className="w-full h-12"
            />
          </p>
          <p className="reacts md:right-[15.5rem] bottom-[3.25rem] right-[8.5rem] absolute drop-shadow-[5px_8px_5px_rgba(0,0,0,0.25)] w-14 h-14 rounded-full bg-primary dark:bg-tertiary lg:-bottom-[6.5rem] lg:left-52 justify-center items-center  flex">
            <img src={react} alt="ReactJs" className="w-full h-9" />
          </p>
          <p className="nextJs md:right-[10.25rem] -bottom-7 right-9 absolute drop-shadow-[5px_8px_5px_rgba(0,0,0,0.25)] w-16 h-16 rounded-full bg-primary dark:bg-tertiary lg:-bottom-[4.5rem] lg:right-[10.5rem] justify-center items-center  flex">
            <img src={Next} alt="Nextjs" className="w-full h-12" />
          </p>
          <p className="mongoDB md:right-[12.5rem] right-2 absolute drop-shadow-[5px_8px_5px_rgba(0,0,0,0.25)] lg:bottom-8 lg:right-[8.5rem] flex items-center justify-center w-10 h-10 rounded-full bg-primary dark:bg-tertiary">
            <img src={MongoDb} alt="MongoDb" className="w-full h-7" />
          </p>
        </div>
      </main>
    </section>
  );
};

export default About;

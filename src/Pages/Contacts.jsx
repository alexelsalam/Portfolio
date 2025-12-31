// import { ArrowRight } from "../assets/Icons";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import github from "../assets/github.svg";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailAnimation from "../assets/email-animation.lottie";
import failedAnimation from "../assets/failled-animation.lottie";
// import sendAnimation from "../assets/send-animation.lottie";

const Contacts = () => {
  const form = useRef();

  const [activeClass, setActiveClass] = useState(false);

  //pop-up success
  const [isSuccess, setIsSuccess] = useState(false);

  //pop-up failed
  const [isFailed, setIsFailed] = useState(false);

  //add active class button

  //function send email
  const sendEmail = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsFailed(true);
          setTimeout(() => {
            setIsFailed(false);
          }, 3000);
        }
      );
  };
  useEffect(() => {
    if (activeClass) {
      document.getElementById("submit").classList.add("active");
    } else {
      document.getElementById("submit").classList.remove("active");
    }
    setTimeout(() => {
      setActiveClass(false);
    }, 2000);
  }, [activeClass]);
  return (
    <section className="flex justify-center w-screen">
      <main className="dark:bg-secondary animate-fadeInRight lg:animate-fadeInLeft lg:ml-[5.5rem] md:w-[720px] md:h-[812px]  lg:w-[1424px] lg:h-[690px] ] h-[36.5rem]  w-[360px]  bg-tertiary rounded-3xl lg:mr-10 md:flex md:justify-center md:gap-10 md:items-center">
        <div className="p-2 fadeIn-content">
          <h3 className="text-2xl font-bold md:text-4xl dark:text-tertiary text-primary">
            <i>
              Let's work together
              <span className="text-secondary">.</span>
            </i>
          </h3>
          <form className="gap-5 mt-5" ref={form} onSubmit={sendEmail}>
            {/* input name sender */}
            <div className="flex items-center justify-center lg:gap-5">
              <label htmlFor="fromName">
                <input
                  type="text"
                  name="from_name"
                  id="fromName"
                  placeholder="Name"
                  required
                  className="  bg-secondary px-1 rounded-lg w-full h-9 md:h-14  text-white  border-[3px] outline-none  focus:border-primary"
                />
              </label>
              {/* input email sender */}
              <label htmlFor="fromEmail">
                <input
                  type="email"
                  name="reply_to"
                  id="fromEmail"
                  placeholder="Email"
                  required
                  className="bg-secondary px-1 rounded-lg h-9 w-full md:h-14  text-white  border-[3px] outline-none  focus:border-primary"
                />
              </label>
            </div>

            <div className="flex flex-col justify-center mt-10">
              {/* input subject email */}
              <label htmlFor="subject">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  className="bg-secondary px-1 rounded-lg h-9 w-full  md:h-14 md:text-lg text-white  outline-none   border-[3px]  focus:border-primary"
                />
              </label>
              {/* input message email */}
              <label htmlFor="message" className="mt-10 ">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  className="bg-secondary rounded-lg outline-none border-[3px] w-full lg:h-96 md:h-80 h-[17rem]   outline-offset-0 text-white focus:border-primary resize-none px-1"
                />
              </label>
            </div>
            <div className="items-center justify-center md:flex">
              <button
                type="submit"
                id="submit"
                onClick={() => setActiveClass(true)}
                className="w-24 transition-all duration-500 rounded-lg shadow-md md:text-xl md:w-full h-9 bg-primary dark:bg-tertiary "
              >
                {activeClass ? (
                  <p className="text-3xl font-black transition-all duration-500 text-tertiary dark:text-secondary">
                    ✓
                  </p>
                ) : (
                  <p className="text-lg font-semibold transition-all duration-500 text-tertiary dark:text-secondary">
                    Send
                  </p>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-end gap-2 pr-2 fadeIn-sideContent md:flex-col lg:h-full lg:pb-9">
          <div className="md:flex md:items-center">
            <div className="flex items-center justify-center w-8 lg:w-12 lg:h-12 ">
              <img src={whatsapp} alt="whatsapp" className="w-10 " />
            </div>
            <p className="hidden pl-2 font-bold dark:text-tertiary font-JetBrainsMono md:block">
              +62 857-1275-4269
            </p>
          </div>
          <a
            href="https://github.com/alexelsalam"
            target="blank"
            className="md:my-5 md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-8 lg:w-12 lg:h-12 ">
              <img src={github} alt="github" className="w-10 dark:w-10" />
            </div>
            <p className="hidden pl-2 font-bold md:block font-JetBrainsMono dark:text-tertiary">
              github.com/alexelsalam
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/alexelsalam/"
            target="blank"
            className="md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-8 lg:w-12 lg:h-12">
              <img src={linkedin} alt="linkedid" className="w-10" />
            </div>
            <p className="hidden pl-2 font-bold md:block font-JetBrainsMono dark:text-tertiary">
              linkedin.com/in/alexelsalam
            </p>
          </a>
        </div>
      </main>
      {/* pop-up IsSucces form */}
      {isSuccess && (
        <div className="absolute flex items-center justify-center w-32 h-8 rounded-md animate-fade-down md:w-36 md:h-10 top-1 bg-primary dark:bg-tertiary">
          <p className="text-sm font-bold md:text-base dark:text-secondary text-tertiary">
            email sent!
          </p>
          <DotLottieReact
            src={emailAnimation}
            loop={true}
            autoplay
            className="w-12 md:w-14"
          />
        </div>
      )}
      {/* pop-up failed */}
      {isFailed && (
        <div className="absolute flex items-center justify-center w-32 h-8 rounded-md animate-fade-down md:w-36 md:h-10 top-1 bg-tertiary">
          <p className="text-sm font-bold text-red-600 md:text-base">FAILED!</p>
          <DotLottieReact
            src={failedAnimation}
            loop={true}
            autoplay
            className="w-12"
          />
        </div>
      )}
    </section>
  );
};

export default Contacts;

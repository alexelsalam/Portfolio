import { ArrowRight } from "../assets/Icons";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import github from "../assets/github.svg";
import { useState } from "react";

const Contacts = () => {
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");
  const handlerSendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userEmail, subject, messages }),
        }
      );
      if (response.ok) {
        alert("Email berhasil dikirim!");
        setUserEmail("");
        setSubject("");
        setMessages("");
      } else {
        alert("Gagal mengirim email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan.");
    }
  };
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
          <form className="gap-5 mt-5" onSubmit={handlerSendEmail}>
            {/* input email */}
            <div className="flex items-center justify-center lg:gap-5">
              <label htmlFor="fromEmail">
                <input
                  type="email"
                  id="fromEmail"
                  placeholder="from e-mail"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                  className="  bg-secondary px-1 rounded-lg w-full h-9 md:h-14  text-white  border-[3px] outline-none  focus:border-primary"
                />
              </label>
              <div className="flex justify-center rounded w-7 h-7 bg-primary">
                <ArrowRight className="w-4 " />
              </div>
              <label htmlFor="toEmail">
                <input
                  type="email"
                  id="toEmail"
                  value="al*****els@gmail.com"
                  readOnly
                  className="bg-secondary px-1 rounded-lg h-9 w-full md:h-14  text-white  border-[3px] outline-none  focus:border-primary"
                />
              </label>
            </div>
            {/* message email */}
            <div className="flex flex-col justify-center mt-10">
              <label htmlFor="subject">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="bg-secondary px-1 rounded-lg h-9 w-full  md:h-14 md:text-lg text-white  outline-none   border-[3px]  focus:border-primary"
                />
              </label>
              <label htmlFor="message" className="mt-10 ">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  value={messages}
                  onChange={(e) => setMessages(e.target.value)}
                  required
                  className="bg-secondary rounded-lg outline-none border-[3px] w-full lg:h-96 md:h-80 h-[17rem]   outline-offset-0 text-white focus:border-primary resize-none px-1"
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-24 text-lg font-black rounded-lg shadow-md md:text-xl md:w-full h-9 bg-primary text-secondary dark:bg-tertiary"
            >
              SEND
            </button>
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
            target="_blank"
            className="md:my-5 md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-8 lg:w-12 lg:h-12 ">
              <img
                src={github}
                alt="github"
                className="w-10 dark:w-10"
              />
            </div>
            <p className="hidden pl-2 font-bold md:block font-JetBrainsMono dark:text-tertiary">
              github.com/alexelsalam
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/alexelsalam/"
            target="_blank"
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
    </section>
  );
};

export default Contacts;

import { NavLink } from "react-router-dom";
//icons
import {
  AboutIcon,
  ContactIcon,
  HomeIcon,
  ProjectIcon,
} from "../assets/Icons";
import Tooltip from "../Components/tip.jsx";

const Navbar = () => {
  return (
    <section className="fixed bottom-0 left-[1.45rem] xs:left-8 md:bottom-4 lg:left-0 md:w-max lg:w-[90px] lg:h-auto z-10">
      <nav className="w-[18.5rem] h-10  lg:h-[690px] md:w-[680px] lg:w-14 bg-primary border-[3px] border-secondary rounded-3xl  ml-3 lg:drop-shadow-[10px_10px_0_rgba(0,0,0,0.25)] drop-shadow-[1px_5px_0_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-10 mt-0.5 lg:h-full lg:flex-col justify-evenly">
          <Tooltip infotext={"Home"}>
            <NavLink to="/" className="nav-link ">
              <HomeIcon className="sm:w-8 h-auto w-[29px]" />
            </NavLink>
          </Tooltip>

          <Tooltip infotext={"About"}>
            <NavLink to="/about" className="nav-link">
              <AboutIcon className="sm:w-8 w-[29px] h-auto" />
            </NavLink>
          </Tooltip>
          <Tooltip infotext={"Projects"}>
            <NavLink to="/projects" className="nav-link">
              <ProjectIcon className="sm:w-8 w-[29px] h-auto" />
            </NavLink>
          </Tooltip>
          <Tooltip infotext={"Contacts"}>
            <NavLink to="/contacts" className="nav-link">
              <ContactIcon className="sm:w-8 w-[29px] h-auto" />
            </NavLink>
          </Tooltip>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

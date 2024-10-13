import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <>
      <h1 className="fixed top-0 font-black left-1 md:left-24 lg:left-32">
        <span className="text-2xl dark:text-tertiary text-primary dark:transition dark:duration-300 dark:delay-300">
          Alex
        </span>
        <br />
        <span className="text-xl leading-none dark:text-primary text-secondary dark:transition dark:duration-300 dark:delay-300">
          Elsalam
        </span>
        <span className="text-3xl dark:text-tertiary leading-[0.5rem] text-primary dark:transition dark:duration-300 dark:delay-300">
          .
        </span>
      </h1>
      <DarkMode />
    </>
  );
};

export default Header;

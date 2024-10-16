import { useState } from "react";

const Tooltip = ({ infotext, children }) => {
  //manage visibilitiy Tooltip
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative flex"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {/* bubble */}
      <div
        className={`absolute w-[4.5rem] -top-9 -right-4 lg:top-[0.3rem] lg:w-20 lg:h-8 rounded lg:text-lg text-secondary font-medium lg:-right-[5.5rem] text-center lg:rounded-md bg-tertiary transition-all duration-500 ${
          showTooltip ? "opacity-1 " : "opacity-0 "
        }`}
      >
        <p className="lg:pt-[0.15rem]">{infotext}</p>
        {/* arrow */}
        <div className="absolute w-3 rounded-sm h-4 rotate-45 border-b-2 border-l-2  right-7 top-[0.9rem] lg:top-[0.38rem]  bg-tertiary -z-10 lg:right-[4.53rem]"></div>
      </div>
    </div>
  );
};

export default Tooltip;

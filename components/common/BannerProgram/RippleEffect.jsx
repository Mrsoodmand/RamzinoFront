import React from "react";
import style from "./style.module.css";
const RippleEffect = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="absolute z-10 top-[50%] translate-y-[-25%] md:left-[0%] left-[65%] translate-x-[-100%]    w-full h-[260px] md:translate-x-[-20%] lg:translate-x-[-34%]  ">
        <div className="relative w-[85px] h-[85px]">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className={`absolute border border-[#00000038] rounded-full ${style["animate-ripple"]}`}
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RippleEffect;

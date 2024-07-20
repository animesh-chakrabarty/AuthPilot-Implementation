import React from "react";
import AppNavBarCard from "../cards/AppNavBarCard.jsx";
import { AppPageNavBarList } from "../../constants";
import logo from "../../assets/logo-bg.png"

const AppNavBar = () => {
  return (
    <div className="flex items-center justify-evenly w-full h-16 font-grotesk font-semibold px-5">
      <img src={logo} className="h-12" />
      <div className="w-[60%] flex justify-center">
        <div className="flex gap-10">
          {AppPageNavBarList.map((item) => (
            <AppNavBarCard content={item} />
          ))}
        </div>
      </div>
      <div>
        pro
      </div>
    </div>
  );
};

export default AppNavBar;

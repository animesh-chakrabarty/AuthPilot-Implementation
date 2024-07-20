import AppMain from "@/components/AppMain";
import AppNavBar from "@/components/NavBar/AppNavBar";
import React from "react";

const AppPage = () => {
  return (
    <div className="flex flex-col h-full p-3 gap-3">
      <AppNavBar />
      <AppMain />
    </div>
  );
};

export default AppPage;

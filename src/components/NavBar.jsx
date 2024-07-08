import Login from "@/components/modals/Login";
import Signup from "@/components/modals/Signup";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import OTP from "./modals/OTP";

const NavBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

  // handle login/signup button click on home page NAV
  const handleButtonClick = () => {
    setIsLoginModalOpen((prev) => !prev);
    // EDGE CASE: if user clicks on login/signup button when signup modal is open the intention is to close all the modals
    if (isSignupModalOpen) {
      setIsSignupModalOpen(false);
      setIsLoginModalOpen(false);
    }
  };

  // handle signup button click inside login modal
  const handleSignupButtonClick = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  // handle login button click inside signup modal
  const handleLoginButtonClick = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const closeSignupLoginModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  return (
    <nav className="h-full">
      <div className="flex items-center justify-between">
        <Button></Button>
        <Button onClick={handleButtonClick}>Login/Signup</Button>
      </div>

      {isLoginModalOpen && (
        <Login handleSignupButtonClick={handleSignupButtonClick} />
      )}
      {isSignupModalOpen && (
        <Signup
          handleLoginButtonClick={handleLoginButtonClick}
          setIsOTPModalOpen={setIsOTPModalOpen}
          closeSignupLoginModal={closeSignupLoginModal}
        />
      )}
      {isOTPModalOpen && <OTP />}
    </nav>
  );
};

export default NavBar;

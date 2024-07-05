import Login from "@/components/modals/Login";
import Signup from "@/components/modals/Signup";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

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
  return (
    <div className="h-full">
      <Button onClick={handleButtonClick}>Login/Signup</Button>
      {isLoginModalOpen && (
        <Login handleSignupButtonClick={handleSignupButtonClick} />
      )}
      {isSignupModalOpen && (
        <Signup handleLoginButtonClick={handleLoginButtonClick} />
      )}
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { setUserCredentials } from "@/features/authSlice";
import { useDispatch } from "react-redux";

const Signup = ({
  handleLoginButtonClick,
  setIsOTPModalOpen,
  closeSignupLoginModal,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOTPDialogue = () => {
    setIsOTPModalOpen(true);
    closeSignupLoginModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);

    // POST req body
    const data = {
      name,
      email,
      password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const userData = await fetch(
      "http://localhost:4000/api/users/user-signup",
      options
    );

    const userData_json = await userData.json();
    if (userData_json) {
      // set userCredentials to global state
      dispatch(
        setUserCredentials({
          email: userData_json.email,
          token: userData_json.token,
        })
      );
      // save userCredentials to localStorage
      localStorage.setItem(
        "savvy-user-credentials",
        JSON.stringify({
          email: userData_json.email,
          token: userData_json.token,
        })
      );
      // open OTP modal
      handleOTPDialogue();
    }

    console.log(userData_json);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  return (
    <Card className="w-[350px] flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <CardHeader className="text-center">
        <CardTitle>Sign-up</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col justify-center w-full gap-4"
          onKeyDown={handleKeyDown}
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></Input>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-center">
        <Button className="w-full" type="submit" onClick={handleSubmit}>
          Signup
        </Button>
        <p>
          Already have an account ?
          <button onClick={handleLoginButtonClick}>log-in</button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Signup;

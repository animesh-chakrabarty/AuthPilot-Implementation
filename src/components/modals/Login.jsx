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
import { useDispatch } from "react-redux";
import { setUserCredentials } from "@/features/authSlice";

const Login = ({ handleSignupButtonClick }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const postData = {
      email,
      password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };
    try {
      const userCredentials = await fetch(
        "http://localhost:4000/api/users/user-login",
        options
      );
      const userCredentials_json = await userCredentials.json();

      if (userCredentials_json) {
        // set user credentials to local storage
        localStorage.setItem(
          "savvy-user-credentials",
          JSON.stringify(userCredentials_json)
        );
        // set user credentials to global state
        dispatch(setUserCredentials(userCredentials_json));
      }
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <Card className="w-[350px] flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <CardHeader className="text-center">
        <CardTitle>Log-in</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action="submit"
          className="flex flex-col justify-center w-full gap-4"
        >
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
      <CardFooter className="flex flex-col">
        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
        <p>
          Don't have an account ?{" "}
          <button onClick={handleSignupButtonClick}>sign-up</button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Login;

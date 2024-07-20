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
import { setUserCredentials } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = ({ handleSignupButtonClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    // POST req body
    const postData = {
      email,
      password,
    };
    // POST req. options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    // POST req. to -
    try {
      const res = await fetch(
        "http://localhost:4000/api/users/user-login",
        options
      );

      const res_json = await res.json();

      if (res.ok) {
        if (res_json) {
          // set user credentials to local storage
          localStorage.setItem(
            "savvy-user-credentials",
            JSON.stringify(res_json)
          );
          // set user credentials to global state
          dispatch(setUserCredentials(res_json));
          // navigate user to dashboard
          navigate("/app");
        }
      } else {
        setError(
          res_json.Error || "An unexpected error occured, Please try again"
        );
      }
    } catch (error) {
      setError("Network Error, Please try again");
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
        {error && <p className="text-red-500">{error}</p>}
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

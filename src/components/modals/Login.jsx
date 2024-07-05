import React from "react";
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

const Login = ({ handleSignupButtonClick }) => {
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
            ></Input>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
            ></Input>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="w-full">Login</Button>
        <p>
          Don't have an account ?{" "}
          <button onClick={handleSignupButtonClick}>sign-up</button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Login;

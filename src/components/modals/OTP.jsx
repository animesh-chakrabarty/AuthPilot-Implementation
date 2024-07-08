import React, { useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

const OTP = () => {
  const { userCredentials } = useSelector((state) => state.auth);
  const [OTP, setOTP] = useState("");

  const verifyOTP = async () => {
    console.log(userCredentials);
    console.log(OTP);
    const postData = {
      OTP: OTP,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userCredentials.token}`,
      },
      body: JSON.stringify(postData),
    };

    console.log(options);

    try {
      const verificationMessage = await fetch(
        "http://localhost:4000/api/verify",
        options
      );

      const verificationMessage_json = await verificationMessage.json();

      console.log(verificationMessage_json);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-[350px] justify-center items-center text-center border rounded-md p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p>
        we've sent a mail to you. <br />
        Enter the OTP below:{" "}
      </p>
      <InputOTP maxLength={4} value={OTP} onChange={(OTP) => setOTP(OTP)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <Button onClick={verifyOTP}>Verify</Button>
    </div>
  );
};

export default OTP;

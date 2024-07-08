import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import OTPSlice from "@/features/OTPSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    OTP: OTPSlice,
  },
});

export default store;

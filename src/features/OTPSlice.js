import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  OTP: "",
};

const OTPSlice = createSlice({
  name: "OTP",
  initialState,
  reducers: {
    setOTP: (state, action) => {
      state.OTP = action.payload;
    },
    removeOTP: (state, action) => {
      state.OTP = "";
    },
  },
});

export default OTPSlice.reducer;
export const { setOTP, removeOTP } = OTPSlice.actions;

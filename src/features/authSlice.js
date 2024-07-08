import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCredentials: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCredentials: (state, action) => {
      state.userCredentials = action.payload;
    },
    removeUserCredentials: (state, act) => {
      state.userCredentials = null;
    },
  },
});

export default authSlice.reducer;
export const { setUserCredentials, removeUserCredentials } = authSlice.actions;

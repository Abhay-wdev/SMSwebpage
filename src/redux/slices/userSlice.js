import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    profile: null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.profile = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.profile = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

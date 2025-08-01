import { configureStore } from "@reduxjs/toolkit";
// import your reducers
import userReducer from "./slices/userSlice";
import notificationReducer from "./slices/notificationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    notifications: notificationReducer,
    // add more reducers as needed
  },
});

import { configureStore } from "@reduxjs/toolkit";
// import your reducers
import userReducer from "./slices/userSlice";
import notificationReducer from "./slices/notificationSlice";
import tokenReducer from './slices/tokenSlice'; // optional

export const store = configureStore({
  reducer: {
    user: userReducer,
    notifications: notificationReducer,
      token: tokenReducer, // optional if you're using token
    // add more reducers as needed
  },
});

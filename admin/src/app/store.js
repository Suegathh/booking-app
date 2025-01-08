import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import roomReducer from "../features/auth/roomSlice";
import bookingReducer from "../features/auth/bookingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
    booking: bookingReducer,
  },
});
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { State } from "./userSlice";
import userSlice from "./userSlice";
export const store: EnhancedStore<{ user: State }> = configureStore({
  reducer: {
    user: userSlice,
  },
});

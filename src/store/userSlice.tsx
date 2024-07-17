import { createSlice } from "@reduxjs/toolkit";

export type State = {
  name?: string;
  email_address?: string;
  phone_number?: string;

  plans_type?: string;
  plans_price?: string;
  plans_subscription?: string;

  add_ons_type?: string;
  add_ons_price?: string;
  isAvailable?: boolean;
};

const initialState: State = {
  name: "",
  email_address: "",
  phone_number: "",

  plans_type: "",
  plans_price: "",
  plans_subscription: "",

  add_ons_type: "",
  add_ons_price: "",

  isAvailable: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      const data: State = action.payload;
      return data;
    },
  },
});
export const { addUser } = userSlice.actions;

export default userSlice.reducer;

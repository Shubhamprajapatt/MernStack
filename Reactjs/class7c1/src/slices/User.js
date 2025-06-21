import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
  name: "Userslice",
  initialState: {
    name: "shubham",
    age: 24,
    email: "shubham12@gmail.com",
  },
  reducers: {
    changeuser: (state) => {
      (state.name = "aviraj"),
        (state.age = 30),
        (state.email = "aviraj@gmail.com");
    },
  },
});
export const { changeuser } = User.actions;
export default User.reducer;

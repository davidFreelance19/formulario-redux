import { createSlice } from "@reduxjs/toolkit";
const usuarioLocal = JSON.parse(localStorage.getItem("user"))
const initialState = {
  name: usuarioLocal?.name ? usuarioLocal.name : '',
  email: usuarioLocal?.email ? usuarioLocal.email : '',
  phone: usuarioLocal?.phone ? usuarioLocal.phone : '',
};
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});
export default userSlice.reducer;
export const { setUser } = userSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface registerState {
  firstName: string;
  lastName: string;
  middleName: string;
  dob: string;
  age: number | null;
  email: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
}

const initialState: registerState = {
  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  age: null,
  email: "",
  phone: "",
  address: "",
  password: "",
  confirmPassword: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegister(state, action: PayloadAction<registerState>) {
      state.firstName = action.payload.firstName;
      state.middleName = action.payload.middleName;
      state.lastName = action.payload.lastName;
      state.dob = action.payload.dob;
      state.age = action.payload.age;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
    },
    clearRegister(state) {
      state.firstName = "";
      // Do the same for other 9 fields..
    },
  },
});

export const { setRegister, clearRegister } = registerSlice.actions;
export default registerSlice.reducer;

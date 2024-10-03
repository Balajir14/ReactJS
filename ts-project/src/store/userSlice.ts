import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  age: number | null;
}

const initialState: UserState = {
  name: "",
  age: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
    clearUser(state) {
      state.name = "";
      state.age = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

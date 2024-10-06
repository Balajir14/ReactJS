import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CrudState {
  name: string;
  email: string;
}

const initialState: CrudState = {
  name: "",
  email: "",
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    setCrud(state, action: PayloadAction<CrudState>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearCrud(state) {
      state.name = "";
      state.email = "";
    },
  },
});

export const { setCrud, clearCrud } = crudSlice.actions;
export default crudSlice.reducer;

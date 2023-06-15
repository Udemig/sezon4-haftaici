import { createSlice } from "@reduxjs/toolkit";
import { JHolderUser } from "../hooks/useJsonplaceholderApi";

export type JholderUserStateType = {
  users: JHolderUser[] | null;
};

const initialState: JholderUserStateType = {
  users: null,
};

export const jholderUserSlice = createSlice({
  name: "jholderUserSlice",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      // TODO action objesinin type'ını set etmemiz gerekiyor
      state.users = action.payload;
    },
  },
});

export const { setUsers } = jholderUserSlice.actions;

export default jholderUserSlice.reducer;

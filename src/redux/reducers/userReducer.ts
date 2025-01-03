import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  users: { id: number; name: string }[];
}

const initialState: UserState = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<string>) {
      state.users.push({
        id: state.users.length + 1,
        name: action.payload,
      });
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

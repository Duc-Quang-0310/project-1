import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iUserInfoState } from "../../../interfaces/userInfo";

const initialState: iUserInfoState = {
  name: "admin",
  district: "",
  subdistrict: "",
  city: "",
  displayName: "admin",
};

export const userInfoSlice = createSlice({
  name: "updateUser",
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<iUserInfoState>) => {
      state.name = action.payload.name;
      state["district"] = action.payload.district;
      state["subdistrict"] = action.payload.subdistrict;
      state["displayName"] = action.payload.displayName;
      state["city"] = action.payload.city;
      state["age"] = action.payload.age;
    },
  },
});

export const { updateUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;

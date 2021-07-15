import { createSlice } from "@reduxjs/toolkit";
import { iLogging } from "../../../interfaces/reduxToolKit";

const initialState:iLogging ={
    loggedIn: false
}

export const loggingSlice = createSlice({
    name:"loggedIn",
    initialState,
    reducers:{
        logging: (state) => {
            state.loggedIn = !state.loggedIn
        }
    }
})

export const {logging} = loggingSlice.actions;

export default loggingSlice.reducer
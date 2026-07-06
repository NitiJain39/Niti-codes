import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from './StudentSlice';


const store = configureStore({
    reducer: {
        user:StudentReducer

    }
})

export default store
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentApi from "../api/studentApi";
export const fetchStudents = createAsyncThunk("fetchStudents",
    studentApi.getAllStudents
)
export const saveStudent = createAsyncThunk("saveStudent",
    studentApi.createStudent
)

const studentSlice = createSlice({
    name:"student",
    initialState:{
        students: [],
        selectedStudent: null,
        status: "idle",
        message: ""  
    },
    reducers: {
        selectStudent:(state,action) =>{
            state.selectedStudent = action.payload
            return state
        }
    },
    extraReducers: (builder) =>{
        // fetch student cases i.e after on click of Login button (showing dashboard)
        builder
        .addCase(fetchStudents.pending,(state=>{
            state.status = "pending"
            return state
        }))
        .addCase(fetchStudents.fulfilled,(state,action)=>{
            state.status = "success"
            state.students = action.payload
            return state
        })
        .addCase(fetchStudents.rejected, (state) => {
            state.status = "failed"
            return state
        })
        // save student cases i.e after onclick of register button
        builder
        .addCase(saveStudent.pending, (state) => {
            state.status = "pending";
            return state;
        })
        .addCase(saveStudent.fulfilled, (state, action) => {
            state.status = "success";
            state.message = "Registered Student Successfully";
            state.students.push(action.payload);
            return state;
        })
        .addCase(saveStudent.rejected, (state) => {
            state.status = "failed";
            state.message = action.payload.message;
            return state;
        })
    }
}) 
export const {selectStudent} = studentSlice.actions
export default studentSlice.reducer
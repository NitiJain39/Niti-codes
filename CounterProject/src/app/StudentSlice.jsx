import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const FetchUsers= createAsyncThunk("FetchUsers",async ()=>{
    let response= await axios.get("https://jsonplaceholder.typicode.com/users")
    if (response.status===200){
        return response.data
    }
})
// var students = []
const StudentSlice =createSlice({
    name: 'user',
    initialState: {
        list:[],
        selectuser:null, //Moved State from user component
        isLoading: false,
        error : false
    },
    reducers:{
        // insertStudent: (state,action)=>{
        //     state= [...state,action.payload]
        //     return state
        // },
        deleteStudent : (state,action)=>{
            let index =state.list.findIndex((user)=>user.id ==action.payload)
            state.list.splice(index,1) 
            state.selectuser = null
            return state
        },
        selectUser:(state,action)=> {
            state ={...state,selectuser:action.payload}
            return state
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(FetchUsers.fulfilled, (state,action)=>{
            state = {...state,list:action.payload}
            state.isLoading =false 
            return state
        })
        builder.addCase(FetchUsers.pending,(state, action)=>{
            state.isLoading = true
            return state
        })
        builder.addCase(FetchUsers.rejected,(state,action) =>{
            state.isLoading =false 
            state.error = true
            return state
        })
    }
    })
export const {deleteStudent,selectUser} = StudentSlice.actions
export default StudentSlice.reducer

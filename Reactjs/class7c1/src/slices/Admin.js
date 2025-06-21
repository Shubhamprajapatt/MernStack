import { createSlice } from "@reduxjs/toolkit";

const Admin=createSlice({
name:"adminslice",

    initialState:{
        name:"tanishq",
        age:22,
        email:"tanishq@gmail.com"
    },

    reducers:{
        adminhandle:(state)=>{
            state.name="gaurav",
            state.age=32,
            state.email="gourav23@gmail.com"
        },
         
         }
    }
)
export const {adminhandle}=Admin.actions
export default Admin.reducer;
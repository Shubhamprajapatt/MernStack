import { configureStore } from "@reduxjs/toolkit";
import Admin from "../slices/Admin.js"
import User from "../slices/User.js"

 export const Store=configureStore({
    reducer:{
       adminslice:Admin,
       Userslice:User
    }
})

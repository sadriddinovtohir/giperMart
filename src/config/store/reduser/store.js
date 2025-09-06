import { configureStore } from "@reduxjs/toolkit";
import productReduserdata from "../reduser/productReduser"
import { loadState, saveState } from "../../store";
export const store = configureStore({
    reducer:{
productReduser:productReduserdata,
    },
    preloadedState:{
        productReduser: loadState("product") ||{
            dataList:[],
            dataCount:0,
        }
    }
})

store.subscribe(()=>{
    saveState("product", store.getState().productReduser)
})
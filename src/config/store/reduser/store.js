import { configureStore } from "@reduxjs/toolkit";
import productReduserdata from "./productReduser";
import { loadState, saveState } from "../../store";
import {
  createListenerMiddleware,
  isAnyOf,
  createAction,
} from "@reduxjs/toolkit";
import {
  addData,
  deleteData,
  incrementPrice,
  decrementPrice,
  TotalPriceData,
} from "./productReduser";

const productMidlever = createListenerMiddleware();

productMidlever.startListening({
  matcher: isAnyOf(addData, deleteData, incrementPrice, decrementPrice),
  effect: (_, api) => {
    api.dispatch(TotalPriceData())
    
  },
});

export const store = configureStore({
  reducer: {
    productReduser: productReduserdata,
  },
  preloadedState: {
    productReduser: loadState("product") || {
      dataList: [],
      dataCount: 0,
      totalPrice:0,
    },
  },
  middleware : (defaultMiddleware)=> defaultMiddleware().concat(productMidlever.middleware)
});
store.subscribe(() => {
  saveState("product", store.getState().productReduser);
});

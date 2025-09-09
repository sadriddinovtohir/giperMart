import { configureStore } from "@reduxjs/toolkit";
import productReduserdata from "./productReduser";
import { loadState, saveState } from "../../store";
export const store = configureStore({
  reducer: {
    productReduser: productReduserdata,
  },
  preloadedState: {
    productReduser: loadState("product") || {
      dataList: [],
      dataCount: 0,
    }
  },
  // middleware: (defaultMidlever) => defaultMidlever().concat(),
});

store.subscribe(() => {
  saveState("product", store.getState().productReduser);
});


import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dataList: [],
  dataCount: 0,
};
const productReduser = createSlice({
  name: "product",
  initialState,
  reducers: {
  addData: (state, action) => {
  const product = state.dataList.find(
    (item) => item.id == action.payload.id
  );
  if (!product) {
    return {
      ...state,
      dataList: [
        ...state.dataList, 
        { ...action.payload, UserPrice: action.payload.price, count: 1 },
      ],
      dataCount: state.dataCount + 1,
    };
  }
},

    incrementPrice: (state, action) => {
      const newPrice = state.dataList.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            count: item.count + 1,
            UserPrice: item.price * (item.count + 1),
          };
        }
        return item;
      });
            return{...state, dataList: newPrice}
    },
    decrementPrice: (state, action) => {
      const newPrice = state.dataList.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            count: item.count - 1,
            UserPrice: item.price * (item.count - 1),
          };
        }
        return item;
      });
      return{...state, dataList: newPrice}
    },
    deleteData: (state, action) => {
      if (state.dataCount <= 0) {
        return state;
      }
      return {
        ...state,
        dataCount: state.dataCount - 1,
        dataList: state.dataList.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export default productReduser.reducer;

export const { addData, incrementPrice, decrementPrice, deleteData } =
  productReduser.actions;

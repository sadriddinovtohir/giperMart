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
      return {
        ...state,
        dataList: [...state.dataList, action.payload],
        dataCount: state.dataCount + 1,
      };
    },
    deleteData: (state, action) => {
        if(state.dataCount <= 0) {
return state
        }
      return {
        ...state,
        dataCount: state.dataCount - 1,
        dataList: state.dataList.filter(
          (item) => item.id !== action.payload
        ),
      };
    },
  },
});

export default productReduser.reducer;

export const { addData, deleteData } = productReduser.actions;

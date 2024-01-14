import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import categoriesReducer from "./categories/categoriesSlice";
import goodsReducer from "./goods/goodsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    goods: goodsReducer,
  },
});

export default store;

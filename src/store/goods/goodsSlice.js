import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../../const";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchGoods = createAsyncThunk(
  "goods/fetchGoods",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const res = await fetch(GOODS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Не удалось получить список товаров");
    }

    return await res.json();
  },
);

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default goodsSlice.reducer;

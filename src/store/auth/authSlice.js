import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTH_URL } from "../../const";

const initialState = {
  accessToken: localStorage.getItem("accessToken_f") || null,
  loading: false,
  error: null,
};

export const fetchAccessToken = createAsyncThunk(
  "auth/fetchAccessToken",
  async () => {
    const res = await fetch(AUTH_URL);

    if (!res.ok) {
      throw new Error("Не удалось получить токен доступа");
    }

    const data = await res.json();
    return data.accessKey;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken(state) {
      state.accessToken = null;
      localStorage.removeItem("accessToken_f");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload;
        localStorage.setItem("accessToken_f", state.accessToken);
        state.error = null;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.accessToken = null;
        state.error = action.error.message;
      });
  },
});

export const { removeToken } = authSlice.actions;
export default authSlice.reducer;

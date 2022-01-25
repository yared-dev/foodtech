import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//axios api
import { fetchUserToken } from "../../services/isAuth";

const initialState = {
  todoList: [],
  currentRequestId: "",
  loading: "fin",
  error: "",
};

export const fetchToDoList = createAsyncThunk(
  "auth/fetchList",
  async (_, { rejectWithValue }) => {
    try {
      const list = await fetchUserToken();
      return list;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);


const { actions, reducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchToDoList.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.todoList = payload;
        state.loading = "fin";
        state.currentRequestId = "";
      }
    },
    [fetchToDoList.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = "pending";
    },
    [fetchToDoList.rejected]: (state, { meta, payload, error }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.currentRequestId = meta;
        state.loading = "fin";
        state.todoList = payload;
        state.error = error;
      }
    },
  },
});

export default reducer;
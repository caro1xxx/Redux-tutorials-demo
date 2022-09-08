import { createSlice } from "@reduxjs/toolkit";

export const changeEditorState = createSlice({
  name: "EditorState",
  initialState: {
    value: false,
  },
  reducers: {
    // 改变state状态来控制Editor是否显示
    change: (state) => {
      state.value = !state.value;
    },
  },
});

export const { change } = changeEditorState.actions;

export default changeEditorState.reducer;

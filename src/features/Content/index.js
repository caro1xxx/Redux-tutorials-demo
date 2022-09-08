import { createSlice } from "@reduxjs/toolkit";
// nanoid 可以生成唯一key,比uuid库小
import { nanoid } from "nanoid";
export const ContentState = createSlice({
  name: "ContentState",
  initialState: {
    value: [
      {
        title: "hello",
        description: "It's a redux demo!!!",
        date: "2022/10/1",
        id: nanoid(),
      },
    ],
  },
  reducers: {
    // 改变state状态来控制Editor是否显示
    // 执行onclick时如果传入submit方法了参数,那么这个参数就在action身上
    submit: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { submit } = ContentState.actions;

export default ContentState.reducer;

import { configureStore } from "@reduxjs/toolkit";
import EditorState from "../features/EditorState";
import ContentState from "../features/Content";
export default configureStore({
  reducer: {
    // 添加写好的reducer
    change: EditorState,
    content: ContentState,
  },
});

import "./App.css";
import { Index as Navbar } from "./Navbar";
import { Index as Home } from "./Home";
import { Index as Editor } from "./Editor";

// useSelector, useDispatch是reudx hook
import { useSelector, useDispatch } from "react-redux";
// 我们写的方法
import { change } from "./features/EditorState";

function App() {
  // 获取store中editor的状态
  const editorState = useSelector((state) => state.change.value);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      {/* 如果editorState为真就显示<Editor>,反之就显示空 */}
      {editorState ? <Editor></Editor> : <></>}
    </div>
  );
}

export default App;

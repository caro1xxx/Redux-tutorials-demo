import React, { useState, useRef } from "react";
import styled from "styled-components";
// nanoid 可以生成唯一key,比uuid库小
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../features/EditorState";
import { submit } from "../features/Content";
const Wapper = styled.div`
  background-color: #f3f3f394;
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Content = styled.div`
  background-color: white;
  border: 2px solid rgb(239, 239, 239);
  z-index: 3;
  position: absolute;
  top: 5%;
  left: 5%;
  right: 5%;
  border-radius: 3px;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background-color: #f3f3f3;
  border-radius: 5px;
  width: 100%;
  margin: 10px 0px;
  height: 30px;
`;

const TextArea = styled.textarea`
  outline: none;
  border: none;
  background-color: #f3f3f3;
  border-radius: 5px;
  width: 100%;
  margin: 10px 0px;
`;

const Submit = styled.button`
  background-color: #99a3b4;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
`;

export const Index = () => {
  const dispatch = useDispatch();

  // title ref
  const titleEl = useRef(null);
  // description ref
  const descriptionEl = useRef(null);

  // 保存
  const save = () => {
    if (titleEl.current.value == "" || descriptionEl.current.value == "")
      return;
    // 提交之前先处理一下再传给reudcer
    let data = {
      title: titleEl.current.value,
      description: descriptionEl.current.value,
      id: nanoid(),
      date: "2022/10/1",
    };
    // 提交
    dispatch(submit(data));
    // 关闭编弹窗
    dispatch(change());
  };

  return (
    <Wapper>
      <Content>
        <svg
          onClick={() => {
            dispatch(change());
          }}
          style={{ position: "absolute", right: "10px", top: "10px" }}
          t="1662638506740"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2461"
          width="30"
          height="30"
        >
          <path
            d="M85.333333 512C85.333333 276.352 276.309333 85.333333 512 85.333333c235.648 0 426.666667 190.976 426.666667 426.666667 0 235.648-190.976 426.666667-426.666667 426.666667-235.648 0-426.666667-190.976-426.666667-426.666667z m426.666667-30.165333l-105.685333-105.706667a21.269333 21.269333 0 0 0-30.08 0.106667 21.205333 21.205333 0 0 0-0.106667 30.08L481.834667 512l-105.706667 105.685333a21.269333 21.269333 0 0 0 0.106667 30.08 21.205333 21.205333 0 0 0 30.08 0.106667L512 542.165333l105.685333 105.706667a21.269333 21.269333 0 0 0 30.08-0.106667 21.205333 21.205333 0 0 0 0.106667-30.08L542.165333 512l105.706667-105.685333a21.269333 21.269333 0 0 0-0.106667-30.08 21.205333 21.205333 0 0 0-30.08-0.106667L512 481.834667z"
            fill="#1296db"
            p-id="2462"
          ></path>
        </svg>
        <Title>Title</Title>
        <Input ref={titleEl} placeholder="标题"></Input>
        <Title>Description</Title>
        <TextArea ref={descriptionEl} rows={10} placeholder="描述"></TextArea>
        <Submit onClick={save}>提交</Submit>
      </Content>
    </Wapper>
  );
};

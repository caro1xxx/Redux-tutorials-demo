import React, { useState } from "react";
import styled from "styled-components";
import { Fragment } from "react";

// useSelector, useDispatch是reudx hook
import { useSelector, useDispatch } from "react-redux";
// 我们写的方法
import { change } from "../features/EditorState";

const Wapper = styled.div`
  margin: 5px 5px;
  border-radius: 3px;
`;

const Title = styled.div`
  font-size: 20px;
  font-style: italic;
`;

const Description = styled.div`
  font-size: 17px;
  font-style: italic;
  font-weight: 100;
  text-indent: 15px;
`;

const Date = styled.div`
  font-size: 10px;
  text-align: right;
`;

export const Index = () => {
  const content = useSelector((state) => state.content.value);
  // 获取dispatch
  // 这个dispatch就是要分发我们的方法
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Wapper>
        {content.map((item, index) => {
          // 因为是demo,所以这里的key我就直接用index了
          return (
            <div
              key={item.id}
              style={{
                margin: "10px 0px",
                backgroundColor: "white",
                padding: "5px",
              }}
            >
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Date>{item.date}</Date>
            </div>
          );
        })}
      </Wapper>
      <svg
        // 改变状态
        onClick={() => {
          dispatch(change());
        }}
        style={{ position: "absolute", bottom: "20px", right: "20px" }}
        t="1662637381232"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1399"
        width="50"
        height="50"
      >
        <path
          d="M514.972672 25.220096c-261.41696 0-473.339904 211.922944-473.339904 473.339904 0 261.424128 211.922944 473.344 473.339904 473.344 261.419008 0 473.34912-211.919872 473.34912-473.344C988.321792 237.14304 776.39168 25.220096 514.972672 25.220096zM810.990592 516.393984l-277.533696 0.64-0.584704 278.121472c-0.039936 10.202112-8.31488 18.477056-18.516992 18.477056l-0.039936 0c-10.202112-0.039936-18.477056-8.31488-18.477056-18.556928l0.582656-277.955584-277.376 0.64-0.039936 0c-10.202112 0-18.477056-8.274944-18.516992-18.477056 0-10.202112 8.233984-18.516992 18.477056-18.556928l277.533696-0.64 0.584704-278.121472c0.039936-10.202112 8.31488-18.477056 18.516992-18.477056l0.039936 0c10.202112 0.039936 18.477056 8.31488 18.477056 18.556928L533.53472 480l277.376-0.64 0.039936 0c10.202112 0 18.477056 8.274944 18.516992 18.477056C829.467648 508.039168 821.233664 516.353024 810.990592 516.393984z"
          p-id="1400"
          fill="#1296db"
        ></path>
      </svg>
    </Fragment>
  );
};

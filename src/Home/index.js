import React, { useState } from "react";
import styled from "styled-components";
// nanoid 可以生成唯一key,比uuid库小
import { nanoid } from "nanoid";
const Wapper = styled.div`
  background-color: white;
  margin: 10px 5px;
  padding: 5px;
  border-radius: 3px;
`;

const Title = styled.div`
  font-size: 20px;
  font-style: italic;
`;

const Description = styled.div`
  font-size: 14px;
  font-style: italic;
  font-weight: 100;
  text-indent: 15px;
`;

export const Index = () => {
  const [Data, setData] = useState([
    {
      title: "hello",
      description:
        "this is a redux demo!!!this is a redux demo!!!this is a redux demo!!!this is a redux demo!!!this is a redux demo!!!",
      id: nanoid(),
    },
  ]);

  return (
    <Wapper>
      {Data.map((item, index) => {
        // 因为是demo,所以这里的key我就直接用index了
        return (
          <div key={item.id}>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </div>
        );
      })}
    </Wapper>
  );
};

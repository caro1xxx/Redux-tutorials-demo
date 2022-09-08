import React from "react";
import styled from "styled-components";
const Wapper = styled.div`
  background-color: white;
  font-size: 20px;
  display: flex;
  line-height: 60px;
  border-bottom: 2px solid rgb(239, 239, 239);
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Tag = styled.div`
  margin: 0px 20px;
`;
export const Index = () => {
  return (
    <Wapper>
      <Logo>Navbar</Logo>
      <Tag>home</Tag>
      <Tag>written</Tag>
    </Wapper>
  );
};

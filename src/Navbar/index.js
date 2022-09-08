import React from "react";
import styled from "styled-components";
const Wapper = styled.div`
  background-color: white;
  font-size: 20px;
  line-height: 60px;
  border-bottom: 2px solid rgb(239, 239, 239);
  padding-left: 10px;
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
export const Index = () => {
  return (
    <Wapper>
      <Logo>Redux demo</Logo>
    </Wapper>
  );
};

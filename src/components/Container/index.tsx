import React from 'react';
import styled from "@emotion/styled";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <_Container>
      {children}
    </_Container>
  );
};

const _Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #f7f8f9;
`

export default Container;
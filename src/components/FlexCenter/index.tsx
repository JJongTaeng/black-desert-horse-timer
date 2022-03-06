import React from 'react';
import styled from "@emotion/styled";

interface FlexCenterProps {
  children: React.ReactNode;
}

const FlexCenter = ({children}: FlexCenterProps) => {
  return (
    <Flex>
      {children}
    </Flex>
  );
};

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default FlexCenter;
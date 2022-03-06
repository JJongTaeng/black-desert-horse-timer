import React from 'react';
import { GrNext } from "react-icons/gr";
import styled from "@emotion/styled";

interface NextButtonProps {
  onClick: () => void;
  style?: React.CSSProperties;
}

const NextButton = ({ onClick, style }: NextButtonProps) => {
  return (
    <>
      <Next onClick={onClick} style={style}/>
    </>
  );
};

const Next = styled(GrNext)`
  cursor: pointer;

`

export default NextButton;
import React from 'react';
import { GrPrevious } from "react-icons/gr";
import styled from "@emotion/styled";

interface PrevButtonProps {
  onClick: () => void;
  style?: React.CSSProperties;
}

const PrevButton = ({onClick, style}:PrevButtonProps) => {
  return (
      <Previous onClick={onClick} style={style} />
  );
};

const Previous = styled(GrPrevious)`
  cursor: pointer;
  
`

export default PrevButton;
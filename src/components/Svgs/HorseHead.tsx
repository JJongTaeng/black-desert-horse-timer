import React from 'react';
import { GiHorseHead } from "react-icons/all";

interface HorseHeadProps {
  size: number;
  color: string;
}

const HorseHead = ({ size, color }: HorseHeadProps) => {
  return (
    <GiHorseHead
      style={{ fontSize: `${size}px`, color: color}}
    />
  );
};

export default HorseHead;
import React from 'react';
import styled from "@emotion/styled";
import PrevButton from "../Svgs/PrevButton";
import { useNavigate } from "react-router-dom";
import NextButton from "../Svgs/NextButton";

interface HeaderProps {
  title: string;

}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <PrevButton style={{ margin: '0 1rem' }} onClick={() => navigate(-1)}/>
      <Title>
        {title}
      </Title>
      <NextButton style={{ margin: '0 1rem' }} onClick={() => navigate(1)}/>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.span`
  font-size: 2rem;
  display: flex;
  align-items: center;
`

export default Header;
import React from 'react';
import styled from "@emotion/styled";
import { Button, Col, Row } from "antd";
import FlexCenter from "../components/FlexCenter";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../App";

const Home = () => {
  let navigate = useNavigate();
  return (
      <Row >
        <Col span={24}>
          <P>안녕하세요. 조련하는 개발자입니다.</P>
          <P>잠수 컨텐츠인 <b>조련 레벨 타이머</b>입니다.</P>
          <P>조련 시 특정 레벨만큼 올리고 싶은데 해당 시간을 알 수 없어서 불편했습니다.</P>
          <P>말의 세대, 레벨, 경험치, 틱(틱마다 오르는 경험치량), 목표 레벨을 작성하시고 도달하는데 시간을 알아보세요!</P>
        </Col>
        <Col span={24}>
          <FlexCenter>
            <Button
              size='large'
              onClick={() => navigate(ROUTE_PATH.TEER)}
            >시작하기</Button>
          </FlexCenter>
        </Col>
      </Row>
  );
};

const P = styled.p`
  font-size: 1.2rem;
`

export default Home;
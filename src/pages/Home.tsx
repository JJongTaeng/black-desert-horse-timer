import React from 'react';
import styled from "@emotion/styled";
import { Button, Col, Divider, Row } from "antd";
import FlexCenter from "../components/FlexCenter";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../App";

const Home = () => {
  let navigate = useNavigate();

  localStorage.clear();

  return (
    <Row>
      <Col span={24}>
        <P>안녕하세요. 조련하는 개발자입니다.</P>
        <P>잠수 컨텐츠인 <b>조련 레벨 타이머</b>입니다.</P>
        <P>조련 시 특정 레벨만큼 올리고 싶은데 해당 시간을 알 수 없어서 불편했습니다.</P>
        <P>아래 목록을 입력하여 결과를 얻어보세요!</P>
        <Ul>
          <li>
            말의 세대
          </li>
          <li>
            레벨
          </li>
          <li>
            경험치
          </li>
          <li>
            틱(틱마다 오르는 경험치량)
          </li>
          <li>
            목표 레벨
          </li>
        </Ul>
      </Col>
      <Col span={24}>
        <Divider/>
      </Col>
      <Col span={24}>
        <FlexCenter>
          <CircleButton
            size='large'
            onClick={() => navigate(ROUTE_PATH.TEER)}
          >
            시작하기
          </CircleButton>
        </FlexCenter>
      </Col>
    </Row>
  );
};

const CircleButton = styled(Button)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

const P = styled.p`
  font-size: 1.2rem;
`

const Ul = styled.ul`
  font-size: 1.2rem;
`

export default Home;
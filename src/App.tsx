import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Teer from "./pages/Teer";
import styled from "@emotion/styled";
import { Col, Row, Steps } from "antd";
import CurrentLevel from "./pages/CurrentLevel";
import Experience from "./pages/Experience";
import Tick from "./pages/Tick";
import Result from "./pages/Result";

export enum ROUTE_PATH {
  HOME = '/',
  TEER = '/teer',
  LEVEL = '/level',
  EXPERIENCE = '/experience',
  TICK = '/tick',
  TARGET_LEVEL = '/target-level',
  RESULT = '/result'
}

function App() {
  const {pathname} = useLocation();
  return (
    <React.Fragment>
      <Container>
        <Header title={getTitle(pathname)} />
        <Row>
          <Col span={24}>
            <Padding>
              <Routes>
                <Route path={ROUTE_PATH.HOME} element={<Home />} />
                <Route path={ROUTE_PATH.TEER} element={<Teer />} />
                <Route path={ROUTE_PATH.LEVEL} element={<CurrentLevel />} />
                <Route path={ROUTE_PATH.EXPERIENCE} element={<Experience />} />
                <Route path={ROUTE_PATH.TICK} element={<Tick />} />
                <Route path={ROUTE_PATH.RESULT} element={<Result />} />
              </Routes>
            </Padding>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

function getTitle(pathname: string): string {
  switch(pathname) {
    case '/':
      return '시작하기'
    case '/teer':
      return '세대 수'
    case '/level':
      return '현재 레벨'
    case '/experience':
      return '경험치 증가량'
    case '/tick':
      return '증가 시간'
    case '/target-level':
      return '목표 레벨'
    case '/result':
      return '결과 창'
    default:
      return '잘못된 페이지'
  }
}
const Padding = styled.div`
  padding: 2rem;
`

const Container = styled.div`
  max-width: 600px;
  min-height: calc(100vh - 4rem);
  margin: auto;
  
  @media(min-width: 600px) {
    & {
      margin-top: 2rem;
      border: 1px solid #efefef;
      border-radius: 3px;
      padding: 20px;
    }
  }
`

export default App;


import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Teer from "./pages/Teer";
import styled from "@emotion/styled";
import { Col, Row } from "antd";
import CurrentLevel from "./pages/CurrentLevel";
import Experience from "./pages/Experience";
import Tick from "./pages/Tick";
import Result from "./pages/Result";
import { useSetRecoilState } from "recoil";
import { horseState } from "./store";

export enum ROUTE_PATH {
  HOME = '/black-desert-horse-timer/',
  TEER = '/black-desert-horse-timer/teer',
  LEVEL = '/black-desert-horse-timer/level',
  EXPERIENCE = '/black-desert-horse-timer/experience',
  TICK = '/black-desert-horse-timer/tick',
  TARGET_LEVEL = '/black-desert-horse-timer/target-level',
  RESULT = '/black-desert-horse-timer/result'
}

function App() {
  const { pathname } = useLocation();
  const setHorse = useSetRecoilState(horseState);
  useEffect(() => {

    if(allSettled()) {
      setHorse({
        currentLevel: parseInt(localStorage.getItem('currentLevel') as any),
        teer: parseInt(localStorage.getItem('teer') as any),
        targetLevel: parseInt(localStorage.getItem('targetLevel') as any),
        tick: parseFloat(localStorage.getItem('tick') as any),
        currentExperience: parseInt(localStorage.getItem('currentExperience') as any),
        nextExperience: parseInt(localStorage.getItem('nextExperience') as any)
      })
    }
  }, [])

  return (
    <React.Fragment>
      <Container>
        <Header title={getTitle(pathname)}/>
        <Row>
          <Col span={24}>
            <Padding>
              <Routes>
                <Route path={ROUTE_PATH.HOME} element={<Home/>}/>
                <Route path={ROUTE_PATH.TEER} element={<Teer/>}/>
                <Route path={ROUTE_PATH.LEVEL} element={<CurrentLevel/>}/>
                <Route path={ROUTE_PATH.EXPERIENCE} element={<Experience/>}/>
                <Route path={ROUTE_PATH.TICK} element={<Tick/>}/>
                <Route path={ROUTE_PATH.RESULT} element={<Result/>}/>
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
    case ROUTE_PATH.HOME:
      return '시작하기'
    case '/black-desert-horse-timer':
      return '시작하기'
    case ROUTE_PATH.TEER:
      return '세대 수'
    case ROUTE_PATH.LEVEL:
      return '현재 레벨'
    case ROUTE_PATH.EXPERIENCE:
      return '경험치 증가량'
    case ROUTE_PATH.TICK:
      return '증가 시간'
    case ROUTE_PATH.TARGET_LEVEL:
      return '목표 레벨'
    case ROUTE_PATH.RESULT:
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

  @media (min-width: 600px) {
    & {
      border: 1px solid #efefef;
      border-radius: 3px;
      padding: 20px;
    }
  }
`

function allSettled() {
  return localStorage.getItem('currentLevel') &&
  localStorage.getItem('teer') &&
  localStorage.getItem('targetLevel') &&
  localStorage.getItem('tick') &&
  localStorage.getItem('currentExperience') &&
  localStorage.getItem('nextExperience')
}

export default App;


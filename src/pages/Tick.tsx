import React, { useState } from 'react';
import { Button, Card, Col, Row } from "antd";
import { useRecoilState } from "recoil";
import { horseState } from "../store";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import moment from 'moment';
import FlexCenter from "../components/FlexCenter";
import { ROUTE_PATH } from "../App";

const Tick = () => {
  let [horse, setHorse] = useRecoilState(horseState);
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(moment());
  const [isStart, setIsStart] = useState(false);
  const [currentTime, setCurrentTime] = useState(moment());
  const [intervalId, setIntervalId] = useState(0);
  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Card
            title='입력된 정보'
            size='small'
          >
            <Row>
              <Col span={12}>세대 : </Col>
              <Col span={12}>{horse.teer}세대</Col>
              <Col span={12}>레벨 : </Col>
              <Col span={12}>{horse.currentLevel} Lv</Col>
              <Col span={12}>경험치 증가량 : </Col>
              <Col span={12}>{horse.nextExperience - horse.currentExperience} exp</Col>

            </Row>
          </Card>
        </Col>
        <Col span={24} style={{ margin: '2rem 0 0 0' }}>
          <P>현재 조련중인 말의 경험치 증가 시간을 입력하겠습니다.</P>
          <P>말의 경험치가 오르면 <b>시작</b>을 누르고 또 한번 오르면 <b>기록</b>을 눌러주세요</P>
        </Col>
        <Col span={24}>
          <FlexCenter>
            <Time>
              {(currentTime.diff(startTime) / 1000).toFixed(1)} s
            </Time>
          </FlexCenter>
        </Col>
        <Col span={24}>
          <FlexCenter>
            {
              isStart ? <Button
                size='large'
                style={{ width: '100%' }}
                onClick={() => {
                  setIsStart(false);
                  localStorage.setItem('tick', (currentTime.diff(startTime) / 1000).toString());
                  setHorse(prev => ({
                    ...prev,
                    tick: currentTime.diff(startTime) / 1000
                  }))
                  clearInterval(intervalId);
                  navigate(ROUTE_PATH.RESULT)
                }}>
                기록
              </Button> : <Button
                size='large'
                style={{ width: '100%' }}
                onClick={() => {
                  setIsStart(true);
                  setStartTime(moment())
                  let temp: any = setInterval(() => {
                    setCurrentTime(moment());
                  }, 10)

                  setIntervalId(temp)
                }}>
                시작
              </Button>
            }

          </FlexCenter>
        </Col>
      </Row>
    </>

  );
};

const P = styled.p`
  font-size: 1.2rem;
`

const Time = styled.span`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 2rem;
`

export default Tick;
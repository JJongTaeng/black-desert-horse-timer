import React, { useState } from 'react';
import { Button, Card, Col, Divider, message, Row } from "antd";
import { useRecoilState } from "recoil";
import { horseState } from "../store";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import moment from 'moment';
import FlexCenter from "../components/FlexCenter";
import { ROUTE_PATH } from "../App";
import { numberWithCommas } from "../utils/utils";

const Tick = () => {
  let [horse, setHorse] = useRecoilState(horseState);
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(moment());
  const [isStart, setIsStart] = useState(false);
  const [currentTime, setCurrentTime] = useState(moment());
  const [intervalId, setIntervalId] = useState(0);
  localStorage.removeItem('settledTime');

  const onStop = () => {

    if(currentTime.diff(startTime) / 1000 < 5) {
      message.error('5초 이상 기록을 해주세요.');
      return ;
    }

    setIsStart(false);
    localStorage.setItem('tick', (currentTime.diff(startTime) / 1000).toString());
    setHorse(prev => ({
      ...prev,
      tick: currentTime.diff(startTime) / 1000
    }))
    clearInterval(intervalId);
    navigate(ROUTE_PATH.RESULT)
  }

  const onStart = () => {
    setIsStart(true);
    setStartTime(moment())
    let temp: any = setInterval(() => {
      setCurrentTime(moment());
    }, 10)

    setIntervalId(temp)
  }

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
              <Col span={12}>{numberWithCommas(horse.nextExperience - horse.currentExperience)} exp</Col>

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
              {(currentTime.diff(startTime) / 1000).toFixed(1) < '0' ? '0.0' : (currentTime.diff(startTime) / 1000).toFixed(1)} s
            </Time>
          </FlexCenter>
        </Col>
        <Col span={24}>
          <Divider />
        </Col>
        <Col span={24}>
          <FlexCenter>
            {
              isStart ? <CircleButton
                size='large'
                onClick={onStop}
              >
                기록
              </CircleButton> : <CircleButton
                size='large'
                onClick={onStart}>
                시작
              </CircleButton>
            }

          </FlexCenter>
        </Col>
      </Row>
    </>

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

const Time = styled.span`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 2rem;
`

export default Tick;
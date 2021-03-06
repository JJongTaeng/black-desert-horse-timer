import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Divider, Row, Select } from "antd";
import { useRecoilState } from "recoil";
import { horseState } from "../store";
import { ROUTE_PATH } from "../App";
import { useNavigate } from "react-router-dom";
import { exp } from "../utils/exp";
import moment from "moment";
import styled from "@emotion/styled";
import FlexCenter from "../components/FlexCenter";
import { numberWithCommas } from "../utils/utils";

const Result = () => {
  let [horse, setHorse] = useRecoilState(horseState);
  const [settledTime, setSettledTime] = useState('');
  const [successTime, setSuccessTime] = useState('');
  const [totalExp, setTotalExp] = useState(0);
  const [remainDuration, setRemainDuration] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });  const [open, setOpen] = useState(true);
  moment.locale('ko', {
    calendar : {
      sameDay : '[오늘] LT',
      nextDay : '[내일] LT',
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    if(open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open])

  useEffect(() => {
    if(localStorage.getItem('settledTime')) {
      setSettledTime(localStorage.getItem('settledTime') as any);
    } else {
      localStorage.setItem('settledTime', moment().format('YYYY-MM-DD HH:mm:ss'));
      setSettledTime(moment().format('YYYY-MM-DD HH:mm:ss'));
    }
  }, [])

  useEffect(() => {
    let intervalId = setInterval(() => {
      const remainTime = moment.duration(moment(successTime).diff(moment())).asSeconds()
      const seconds = parseInt((remainTime % 3600 % 60).toString());
      const minutes = parseInt((remainTime % 3600 / 60).toString());
      const hours = parseInt((remainTime / 3600).toString());

      setRemainDuration({
        seconds,
        minutes,
        hours,
      })
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [successTime])

  useEffect(() => {
    const { currentLevel, targetLevel, teer, currentExperience, nextExperience, tick } = horse;

    if(currentLevel === 0 || !targetLevel) {
      return;
    }
    let totalExp = 0;
    for(let i = currentLevel; i < targetLevel; i++) {
      totalExp += exp[teer][i];
    }
    totalExp = totalExp - currentExperience;

    setTotalExp(totalExp);

    const increasedExp = nextExperience - currentExperience;

    const expPerSecond = increasedExp / tick;
    const endSecond = totalExp / expPerSecond;


    let date = moment(settledTime === '' ? moment() : settledTime).add( endSecond, 'seconds').format('YYYY-MM-DD HH:mm:ss')
    localStorage.setItem('successTime', date)
    setSuccessTime(date);

  }, [horse.targetLevel])

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
              <Col span={12}>증가 틱(s) : </Col>
              <Col span={12}>{horse.tick} sec</Col>
            </Row>
          </Card>
        </Col>
        <Col span={24}>
          <p>모든 설정을 마쳤습니다.<br /> 아래의 목표 레벨을 설정해주세요.</p>
        </Col>
        <Col span={24}>
          <Select
            open={open}
            onClick={() => setOpen(prev => !prev)}
            size='large'
            defaultValue={localStorage.getItem('targetLevel')}
            style={{ width: 200 }}
            onChange={(value) => {
              localStorage.setItem('targetLevel', value);
              setHorse((prev) => ({
                  ...prev,
                  targetLevel: parseInt(value)
                })
              )
            }}>
            {
              Array
                .from({ length: 30 - horse.currentLevel }, (_, index) => index + 1 + horse.currentLevel)
                .map(value => <Select.Option
                  key={value}
                  value={value}>{value}
                </Select.Option>)
            }
          </Select>
        </Col>
        <Col span={24}>
          <Divider/>
        </Col>
        <Col span={8}>
          남은 경험치량 :
        </Col>
        <Col span={16}>
          {
            numberWithCommas(totalExp)
          }
        </Col>
        <Col span={8}>
          완료 시간 :
        </Col>
        <Col span={16}>
          {
            successTime
          }
        </Col>
        <Col span={8}>
          남은 시간 :
        </Col>
        <Col span={16}>
          {
            remainDuration.seconds < 0 ? '설정하는 시간동안 이미 해당 레벨까지 도달했습니다.' : (
              <>
                <span>
                  {remainDuration.hours ? remainDuration.hours : 0}시간 {' '}
                </span>
                <span>
                  {remainDuration.minutes ? remainDuration.minutes : 0}분 {' '}
                </span>
                <span>
                  {remainDuration.seconds ? remainDuration.seconds : 0}초 남았습니다.
                </span>
              </>
            )
          }

        </Col>
        <Col span={24}>
          <Divider/>
        </Col>
        <Col span={24}>
          <FlexCenter>
            <CircleButton
              size='large'
              style={{ background: "dodgerblue", color: "white" }}
              onClick={() => {
                localStorage.clear();
                setHorse({
                  targetLevel: 0,
                  currentLevel: 0,
                  teer: 0,
                  tick: 0,
                  currentExperience: 0,
                  nextExperience: 0,
                });

                navigate(ROUTE_PATH.HOME);
              }}>
              초기화
            </CircleButton>
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

export default Result;
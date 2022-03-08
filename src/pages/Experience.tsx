import React from 'react';
import { Button, Card, Col, Input, Row } from "antd";
import { ROUTE_PATH } from "../App";
import { useRecoilState } from "recoil";
import { horseState } from "../store";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import FlexCenter from "../components/FlexCenter";

const Experience = () => {
  let [horse, setHorse] = useRecoilState(horseState);
  const navigate = useNavigate();



  const onButtonClick = () => {
    navigate(ROUTE_PATH.TICK)
  }

  return (
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
          </Row>
        </Card>
      </Col>
      <Col span={24} style={{ margin: '2rem 0 0 0' }}>
        <P><b>집중!</b> 2번의 경험치를 입력해야합니다.</P>
      </Col>
      <Col span={24}>
        <P>말의 상태창에서 지금 보이는 경험치를 입력해주세요.</P>
      </Col>
      <Col span={24}>
        <Input
          size='large'
          onChange={
            (e) => {
              localStorage.setItem('currentExperience', e.target.value);
              setHorse((prev) => {
                return ({
                  ...prev,
                  currentExperience: parseInt(e.target.value)
                })
              })
            }
          }
          placeholder='ex) 41000 -> 현재 보이는 경험치량'
          style={{ marginBottom: '1rem' }}
          type="number"
        />
      </Col>
      <Col span={24}>
        <P>경험치량이 오르면 오른 경험치량을 입력해주세요.</P>
      </Col>
      <Col span={24}>
        <Input
          size='large'
          onChange={
            (e) => {
              localStorage.setItem('nextExperience', e.target.value);
              setHorse((prev) => {
                return ({
                  ...prev,
                  nextExperience: parseInt(e.target.value)
                })
              })
            }
          }
          onKeyDown={(e) => {
            if(e.key === 'Enter') {
              onButtonClick();
            }
          }}
          placeholder='ex) 42000 -> 다음 경험치'
          style={{ marginBottom: '1rem' }}
          type="number"
        />
      </Col>
      <Col span={24}>
        <FlexCenter>
          <Button onClick={onButtonClick}>계속하기</Button>
        </FlexCenter>
      </Col>
    </Row>
  );
};

const P = styled.p`
  font-size: 1.2rem;
  margin: 0;
`

export default Experience;
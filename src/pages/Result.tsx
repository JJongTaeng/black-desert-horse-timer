import React from 'react';
import { Card, Col, Row, Select } from "antd";
import { useRecoilState } from "recoil";
import { horseState } from "../store";
import styled from "@emotion/styled";
import { exp } from "../utils/exp";

const Result = () => {
  let [horse, setHorse] = useRecoilState(horseState);
  
  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Card
            title='입력된 정보'
            size='small'
          >
            <Row>
              <Col span={5}>세대 : </Col>
              <Col span={19}>{horse.teer}세대</Col>
              <Col span={5}>레벨 : </Col>
              <Col span={19}>{horse.currentLevel} Lv</Col>
              <Col span={5}>경험치 증가량 : </Col>
              <Col span={19}>{horse.nextExperience - horse.currentExperience} exp</Col>
              <Col span={5}>증가 틱(s) : </Col>
              <Col span={19}>{horse.tick} sec</Col>
            </Row>
          </Card>
        </Col>
        <Col span={24} style={{ margin: '2rem 0 0 0' }}>
          <P>모든 설정을 마쳤습니다.</P>
          <P>아래의 목표 레벨을 설정해주세요.</P>
        </Col>
        <Col span={24}>
          <Select
            defaultValue="1"
            style={{ width: 200 }}
            onChange={(value) => {
              setHorse((prev) => ({
                  ...prev,
                  targetLevel: parseInt(value)
                })
              )
            }}>
            {
              Array
                .from({ length: 30 - horse.currentLevel }, (_, index) => index)
                .map(value => <Select.Option
                  value={value + horse.currentLevel + 1}>{value + horse.currentLevel + 1}</Select.Option>)
            }
          </Select>
        </Col>
      </Row>
    </>

  );
};
const P = styled.p`
  font-size: 1.2rem;
`
export default Result;
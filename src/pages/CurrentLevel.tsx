import React from 'react';
import { Card, Col, Row, Select } from "antd";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { horseState } from "../store";
import { ROUTE_PATH } from "../App";
import { useNavigate } from "react-router-dom";

const CurrentLevel = () => {
  let [horse, setHorse] = useRecoilState(horseState);
  const navigate = useNavigate();
  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Card
            title='입력된 정보'
            size='small'
          >
            <Row>
              <Col span={4}>세대 : </Col>
              <Col span={20}>{horse.teer}세대</Col>
            </Row>
          </Card>
        </Col>
        <Col span={24} style={{margin: '2rem 0 0 0'}}>
          <P>현재 조련중인 말의 레벨을 입력해주세요.</P>
        </Col>
        <Col span={24}>
          <Select
            defaultValue="1"
            style={{ width: 200 }}
            onChange={(value) => {
              setHorse((prev) => ({
                  ...prev,
                  currentLevel: parseInt(value)
                })
              )
              navigate(ROUTE_PATH.EXPERIENCE)
            }}>
            {
              Array
                .from({ length: 30 }, (_, index) => index)
                .map(value => <Select.Option value={value + 1}>{value + 1}</Select.Option>)
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
export default CurrentLevel;
import React from 'react';
import { Button, Col, Row, Select } from "antd";
import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import { horseState } from "../store";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../App";

const Teer = () => {
  const navigate = useNavigate();
  let setHorse = useSetRecoilState(horseState);

  return (
    <Row>
      <Col span={24}>
        <P>현재 조련중인 말의 세대를 입력해주세요.</P>
      </Col>
      <Col span={24}>
        <Select
          defaultValue="1"
          style={{ width: 200 }}
          onChange={(value) => {
            localStorage.setItem('teer', value);
            setHorse((prev) => ({
                ...prev,
                teer: parseInt(value),
              })
            )
            navigate(ROUTE_PATH.LEVEL)
          }}>
          <Select.Option value="1">1세대</Select.Option>
          <Select.Option value="2">2세대</Select.Option>
          <Select.Option value="3">3세대</Select.Option>
          <Select.Option value="4">4세대</Select.Option>
          <Select.Option value="5">5세대</Select.Option>
          <Select.Option value="6">6세대</Select.Option>
          <Select.Option value="7">7세대</Select.Option>
          <Select.Option value="8">8세대</Select.Option>
        </Select>
      </Col>
    </Row>
  );
};
const P = styled.p`
  font-size: 1.2rem;
`

export default Teer;
import React, { useEffect, useState } from 'react';
import { Card, Col, Divider, Row, Select } from "antd";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { horseState } from "../store";
import { ROUTE_PATH } from "../App";
import { useNavigate } from "react-router-dom";

const CurrentLevel = () => {
  let [horse, setHorse] = useRecoilState(horseState);
  const navigate = useNavigate();
  localStorage.removeItem('settledTime');
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if(open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open])

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
            </Row>
          </Card>
        </Col>
        <Col span={24} style={{margin: '2rem 0 0 0'}}>
          <P>현재 조련중인 말의 레벨을 입력해주세요.</P>
        </Col>
        <Col span={24}>
          <Divider />
        </Col>
        <Col span={24}>
          <Select
            open={open}
            onClick={() => setOpen(prev => !prev)}
            size="large"
            defaultOpen={true}
            defaultValue="1"
            style={{ width: 200 }}
            onChange={(value) => {
              localStorage.setItem('currentLevel', value);
              setHorse((prev) => ({
                  ...prev,
                  currentLevel: parseInt(value)
                })
              )
              document.body.style.overflow = 'auto';
              navigate(ROUTE_PATH.EXPERIENCE)
            }}>
            {
              Array
                .from({ length: 30 }, (_, index) => index)
                .map(value => <Select.Option key={value} value={value + 1}>{value + 1}</Select.Option>)
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
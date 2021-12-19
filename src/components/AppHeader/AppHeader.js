import React from "react";
import { Layout, Button, Row, Col, Image, Typography } from 'antd';
import { Navigator } from '../';
import logo from '../../assets/peoples_mortgage_logo.png'

const { Header } = Layout;
const { Title, Text } = Typography;


export default function AppHeader(props) {
  const showLogo = true;
  return (
    <React.Fragment>
      <Header>
        <Row>
          <Col span={23} align="right">
            <Button type="primary" shape="round" size="medium">
              Free Quote
            </Button>
          </Col>
        </Row>
      </Header>
      <Header style={{backgroundColor: "#fff"}}>
        <Row>
          {showLogo ? <Col xs={14} lg={6} align="center">
            <div className="Header__Logo">
              <img className="Header__Logo__image" src={logo}/>
            </div>
          </Col> :
          <Col xs={20} lg={6} align="center">
            <div className="Header__Container">
              <Title italic className="Header__Logo" level={3}>People's Mortgage
                <Text italic className="Header__Logo-sub" type="secondary">Lending LLC</Text>
              </Title>
            </div>
          </Col>}
          <Col xs={6} lg={17} align="right" offset={4}>
            <Navigator style={{textAlign: 'right'}}/>
          </Col>
        </Row>
      </Header>
    </React.Fragment>
  );
}

import React from 'react';
import { Parallax } from 'react-parallax';
import { Divider, PageHeader, Typography, Button, Space, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { LoanPrograms, Location } from '../../containers';
import image from '../../assets/images/background.jpeg';
import image2 from '../../assets/images/background2.jpeg';
import './index.css';

const { Text } = Typography;

function Homepage(props) {
  return (
    <React.Fragment>
      <Parallax blur={0} bgImage={image} bgImageAlt="house" strength={100}>
        <div style={{ height: '500px' }} />
        <div className="site-layout-parallax">
          <PageHeader
            className="site-page-header"
            title="Our Programs"
            subTitle="Prepare to walk an illuminated path on your journey with us as you are never left in the dark"
          />
        </div>

      </Parallax>
      <div className="site-layout-parallax site-layout-parallax--dark">
        <LoanPrograms perRow={4}/>
        <Divider/>
        <Row>
          <Col span={24} align="right">
            <Button type="primary" shape="round" size="medium">
              <Link to="loan-programs/">
                View all of our Loan Programs
              </Link>
            </Button>
          </Col>
        </Row>
      </div>

      <div className="site-layout-content">
        <PageHeader
          className="site-page-header"
          title="People's Mortgage Lending LLC"
          subTitle="260 Northland Blvd, Cincinnati, OH 45246"
        />
        <Divider/>
        <Location/>
      </div>
    </React.Fragment>
  )
}

export default Homepage;

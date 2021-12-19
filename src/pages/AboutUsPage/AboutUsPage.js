import React from 'react';
import { Row, Col, PageHeader, Typography, Divider, Button  } from 'antd';
import { Link } from "react-router-dom";
import { aboutSections } from '../../constants';

const { Title, Text } = Typography;

function AboutUsPage(props) {

  return (
    <React.Fragment>
      <div className="site-layout-content">
        <Row>
          <Col span={24}>
          <PageHeader
            className="site-page-header"
            title="About Us"
            subTitle="Cincinnati  · NMLS# 1812948"
          />

            {aboutSections.map( (section, key) => {
              return (
                <div key={key}>
                  <Title level={2}>{section.heading}</Title>
                  <Text>{section.paragraph}</Text>
                  <Divider/>
                </div>
              )
            })}

          </Col>
        </Row>
        <Row>
          <Col span={24} align="right">
            <Button type="primary" shape="round" size="medium">
              <Link to="/contact-us/">
                Contact Us
              </Link>
            </Button>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default AboutUsPage;

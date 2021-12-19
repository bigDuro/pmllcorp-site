import React, { useState } from "react";
import { Row, Col, Card, PageHeader, Typography, Divider, Button } from 'antd';
import { Link } from "react-router-dom";
import Form from 'react-jsonschema-form-antd';
import { Map, ContactForm } from '../../components';
import { homepageAboutUs } from '../../constants';
import image from '../../assets/house-contact-us.png';

const { Text } = Typography;
const handleSave = (data) => {
  console.log('data:: ', data);
}

const handleChange = (data) => {
  console.log('data:: ', data);
}

export default function Location(props) {
  const [size, setSize] = useState('large');
  return (
      <div>
        <Row>
          <Col xs={24} lg={12} align="left">
          <div className="site-card-border-less-wrapper">
            {homepageAboutUs.map((section, idx) => {
              const { title, description } = section;
              return (
                <Row>
                  <Col xs={22} align="left">
                    <div key={idx}>
                      <PageHeader
                        className="site-page-header"
                        title={title}
                        subTitle=""
                      />
                      <Text>
                        {description}
                      </Text>
                      <Divider/>
                    </div>
                  </Col>

                </Row>
              )
            })}
            <Row>
              <Col span={22} align="right">
                <Button type="primary" shape="round" size="medium">
                  <Link to="about-us/">
                    More About Us
                  </Link>
                </Button>
              </Col>
            </Row>
          </div>

          </Col>
          <Col xs={24} lg={12} align="center">
            <Map mwidth={500} mheight={500}/>
          </Col>
        </Row>
      </div>
  );
}

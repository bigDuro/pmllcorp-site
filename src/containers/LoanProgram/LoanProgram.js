import React, { useState, useEffect } from "react";
import { Row, Col, PageHeader, Divider, Typography, Button  } from 'antd';
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import { AppCards } from '../../components';
import { loanPrograms, navigationData } from '../../constants';

const { Text } = Typography;

export default function LoanProgram(props) {
  const { pathname } = window.location;
  const [ program, setProgram ] = useState({});

  useEffect(() => {
    const paths = [...pathname.split('/')].filter(path => path !== '');
    const subLinks = navigationData.reduce((links, item) => {
      return [...links, ...item.links];
    }, []);
    const allNavLinks = [ ...navigationData, ...subLinks ];
    const allNavItems = paths.map(path => {
      return allNavLinks.filter(item => item.href === `/${path}/` || item.href === pathname)
    })
    const allPgrm = allNavItems.map(item => {
      return item[0];
    })
    const prgmNav = allPgrm.filter(p => p.href === pathname)[0];
    const prgm = loanPrograms.filter(p => p.name === prgmNav.name)[0];
    console.log('loanPrograms:: ', prgm);
    setProgram(prgm)
  }, [pathname])
  return (
      <Row>
        {program.name ?
        <Col xs={24} align="center">
          <PageHeader
            className="site-page-header"
            title={program.name}
            subTitle=""
          />
          <Divider/>
          <Row>
            <Col xs={24} md={1}/>
            <Col xs={24} md={8} align="center">
              <Parallax blur={0} bgImage={program.image.src} bgImageAlt={program.image.alt} strength={100}>
                <div style={{ height: '250px' }} />
              </Parallax>
            </Col>

            <Col xs={24} md={1}/>
            <Col xs={24} md={12} align="left">
              <Text>{program.description}</Text>
              <Divider/>
              <Row>
                <Col span={24} align="right">
                  <Button type="primary" shape="round" size="medium">
                    <Link to="#">
                      Free Quote!
                    </Link>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col> : '' }
      </Row>
  );
}

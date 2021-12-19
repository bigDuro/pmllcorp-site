import React, { useEffect, useState } from "react";
import { Breadcrumb, Row, Col  } from 'antd';
import { Link } from "react-router-dom";
import { navigationData } from '../../constants';

export default function AppBreadcrumbs(props) {
  const { pathname } = window.location;
  const [ breadcrumbs, setBreadcrumbs ] = useState([]);

  useEffect(() => {
    const paths = [...pathname.split('/')].filter(path => path !== '');
    const subLinks = navigationData.reduce((links, item) => {
      return [...links, ...item.links];
    }, []);
    const allNavLinks = [ ...navigationData, ...subLinks ];
    const allNavItems = paths.map(path => {
      return allNavLinks.filter(item => item.href === `/${path}/` || item.href === pathname)
    })
    const bcrumbs = allNavItems.map(item => {
      return item[0];
    })
    setBreadcrumbs(bcrumbs)
  }, [pathname])

  return (
    <Row>
      <Col span={24}>
      {breadcrumbs.length ?
        <React.Fragment>
          <Breadcrumb className="app-breadcrumb">
            <Breadcrumb.Item>
              <Link to="/">
                Home
              </Link>
            </Breadcrumb.Item>
            {
              breadcrumbs.map((breadcrumb, idx) => {
                return (
                  breadcrumb && breadcrumb.label ?
                  <Breadcrumb.Item key={idx}>
                    <Link to={breadcrumb.href}>
                      {breadcrumb.label}
                    </Link>

                  </Breadcrumb.Item> : ""
                )
              })
            }
          </Breadcrumb>
        </React.Fragment>
        : ''}
      </Col>
    </Row>
  );
}

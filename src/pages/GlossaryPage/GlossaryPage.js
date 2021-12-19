import React from 'react';
import { PageHeader, Row, Col } from 'antd';


function GlossaryPage() {
  return (
    <React.Fragment>
      <div className="site-layout-content">
        <Row>
          <Col span={24}>
            <PageHeader
              className="site-page-header"
              title="Glossary"
              subTitle=""
            />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}


export default GlossaryPage;

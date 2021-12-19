import React from 'react';
import { Row, Col, PageHeader  } from 'antd';
import { MortgageRefinanceCalc } from '../../components';

function Calculators(props) {
  return (
    <React.Fragment>
      <div className="site-layout-content">
        <Row>
          <Col span={24}>
          <PageHeader
            className="site-page-header"
            title="Calculators"
            subtitle=""
          />

            <MortgageRefinanceCalc/>

          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}


export default Calculators;

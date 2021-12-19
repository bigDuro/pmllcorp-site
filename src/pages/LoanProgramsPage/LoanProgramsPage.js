import React from 'react';
import { Row, Col, PageHeader } from 'antd';
import { LoanPrograms } from '../../containers';
import { loanPrograms } from '../../constants'

function LoanProgramsPage(props) {
  const { history } = props;
  return (
    <React.Fragment>
      <div className="site-layout-content">
        <Row>
          <Col span={24}>
          <PageHeader
            className="site-page-header"
            title="Loan Programs"
            subTitle="Cincinnati  · NMLS# 1812948"
          />
        <LoanPrograms />
      </Col>
    </Row>
  </div>
</React.Fragment>
  )
}

export default LoanProgramsPage;


// <SectionHeader
//   title=" We are ready, willing, and able to help you find the product..."
//   subtitle="Prepare to walk an illuminated path on your journey with us as you are never left in the dark...."
//   align="left"
//   disableGutter
// />

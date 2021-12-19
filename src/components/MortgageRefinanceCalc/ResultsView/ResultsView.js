import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const ResultsView = (props) => {
  const { data } = props;

  return (
    <>
    <Title level={5}>
      Monthly Payment
    </Title>
    <Text>
      {data.monthlyPayment}
    </Text>
    <Divider/>
    <Title level={5}>
      Total Loan Amount:
    </Title>
    <Text>
      {data.totalLoan}
    </Text>
    <Divider/>
    <Title level={5}>
      Total Interest:
    </Title>
    <Text>
      {data.loanInterest}
    </Text>
    </>
  )

};

export default ResultsView;

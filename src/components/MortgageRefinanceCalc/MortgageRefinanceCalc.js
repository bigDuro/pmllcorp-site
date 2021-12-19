import React from 'react';
import { Row, Col, PageHeader, Card, Divider, Typography  } from 'antd';
import { MortgageCalc } from './MortgageCalc';
import { RefinanceCalc } from './RefinanceCalc';
import { ResultsView } from './ResultsView';
import { DoughnutChart } from './DoughnutChart';
import { calc } from '../../constants';


const { Meta } = Card;
const { Title, Text } = Typography;

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

function MortgageRefinanceCalc(props) {
  const mortgageData = {
    label: "Purchase",
    title: "Purchase",
    subtitle: "Purchase Calculator",
    type: "mortgage"
  }
  const refiData = {
    label: "Refinance",
    title: "Refinance",
    subtitle: "Refinance Calculator",
    type: "refinance"
  }

  const data = {
    totalLoan: '$106,450',
    labels: [
      'Total Interest',
      'Total Loan Amount',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [26450, 80000],
      backgroundColor: [
        'rgb(204, 204, 204)',
        'rgb(25, 117, 210)'
      ],
      hoverOffset: 4
    }]
  };

  const resultsData = {
    monthlyPayment: '$295.70',
    totalLoan: '$80,000',
    loanInterest: '$26,450'
  }

  const [ calcData, setCalcData ] = React.useState(mortgageData);
  const [ inputData, setInputData ] = React.useState(data);
  const [ results, setResults ] = React.useState(resultsData)

  const handleChange = (data) => {
    setCalcData(data)
  }

  const handleCalulation = (data) => {
    setInputData(data)
    setResults(data)
  }

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Row>
      <Col xs={{ span:24 }} lg={12}>
        <Card
          hoverable
          style={{padding: '15px', backgroundColor: '#fff', borderRadius: '10px', margin: '10px', textAlign: 'left', height: 'auto'}}
          cover={
            <Title level={5}>
            Total Payment: {data.totalLoan}
          </Title>
          }
            >

          <Row align="center">
            <Col xs={24} lg={10}>
              <ResultsView data={results}/>
            </Col>
            <Col xs={24} lg={14}>
              <DoughnutChart data={inputData}/>
            </Col>
          </Row>
        </Card>



      </Col>
      <Col xs={{ span:24}} lg={12}>
        {
          calcData.type === 'mortgage' ?
          <Card
            hoverable
            cover={
              <Title level={5}>
                Mortgage Calculator
              </Title>
            }
            style={{padding: '15px', backgroundColor: '#fff', borderRadius: '10px', margin: '10px', textAlign: 'left', height: 'auto'}}
              >
              <MortgageCalc handleCalulation={handleCalulation}/>
              <Divider/>
            <Meta title="Calculator"/>
            <Text italic style={{fontSize: "10px", display: "block", marginTop: "10px"}}>{calc.disclaimer}</Text>
          </Card>
          :

          <Card
            hoverable
            cover={
              <Title level={5}>
                Refinance Calculator
              </Title>
            }
            style={{padding: '15px', backgroundColor: '#fff', borderRadius: '10px', margin: '10px', textAlign: 'left', height: 'auto'}}
              >
              <RefinanceCalc  handleCalulation={handleCalulation}/>
              <Divider/>
            <Meta title="Calculator"/>
            <Text italic style={{fontSize: "10px", display: "block", marginTop: "10px"}}>{calc.disclaimer}</Text>
          </Card>

        }

      </Col>
    </Row>
  )
}

export default MortgageRefinanceCalc;

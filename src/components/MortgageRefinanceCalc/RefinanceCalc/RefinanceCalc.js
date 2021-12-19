import React from 'react';
import Form from 'react-jsonschema-form-antd';
import { Typography, Divider } from 'antd';
import { formData, calc } from '../../../constants';

const { Text } = Typography;
const { jSONSchema, uISchema, data } = formData.refinanceCalcForm;

const RefinanceCalc = (props) => {
  const {  handleCalulation } = props;

  const handleSave = (data) => {
    console.log(data);
  }
  const handleChange = (data) => {
    console.log(data);
  }

  return (
    <>
    <Form
      schema={jSONSchema}
      uiSchema={uISchema}
      formData={data}
      onSubmit={(data) => handleSave(data.formData)}
      disabled={false}
      onChange={(data) => handleChange(data.formData)}/>
      <Divider/>
      <Text>{calc.disclaimer}</Text>
    </>
  );
};

export default RefinanceCalc;


// <div>
//   <form name="purchasCalculator" method="post" onSubmit={handleSubmit}>
//     <Row spacing={2}>
//       <Col span={24}>
//         <Input
//           placeholder="Current Loan Balance"
//           name="loanBalance"
//           onChange={handleChange}
//           type="number"
//           value={formState.values.loanBalance || ''}
//         />
//       </Col>
//       <Col span={12}>
//         <Input
//           placeholder="Current Monthly Payment"
//           name="monthlyPayment"
//           onChange={handleChange}
//           type="number"
//           value={formState.values.monthlyPayment || ''}
//         />
//       </Col>
//       <Col span={12}>
//         <Input
//           placeholder="Current Interest Rate"
//           name="interestRate"
//           onChange={handleChange}
//           type="number"
//           value={formState.values.interestRate || ''}
//         />
//       </Col>
//       <Col span={12}>
//         <Input
//           placeholder="New Interest Rate"
//           name="interestRate"
//           onChange={handleChange}
//           type="number"
//           value={formState.values.interestRate || ''}
//         />
//       </Col>
//       <Col span={12}>
//         <Input
//           placeholder="Term"
//           name="term"
//           onChange={handleChange}
//           type="number"
//           value={formState.values.term || ''}
//         />
//       </Col>
//       <Col span={24}>
//         <i>
//           <Text>
//             Fields that are marked with * sign are required.
//           </Text>
//         </i>
//       </Col>
//       <Col span={24}>
//         <Button
//           type="submit"
//         >
//           Calculate
//         </Button>
//       </Col>
//       <Col span={24}>
//         <Text>
//           People’s Mortgage Lending LLC, is providing the calculator tools above as a courtesy and results are estimates only. Please consult with a licensed American Financial Network, Inc. Loan Originator for more specific information and to discuss your individual needs and circumstances. Standard disclaimers apply.
//         </Text>
//       </Col>
//     </Row>
//   </form>
// </div>

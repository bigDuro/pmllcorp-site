import React from 'react';
import Form from 'react-jsonschema-form-antd';
import { Typography, Divider, Card } from 'antd';
import { formData } from '../../../constants';

const { Meta } = Card;
const { Text } = Typography;
const { jSONSchema, uISchema, data } = formData.mortgageCalcForm;
const MortgageCalc = (props) => {
  const {  handleCalulation } = props;

  const handleSave = (data) => {
    console.log(data);
  }
  const handleChange = (data) => {
    console.log(data);
  }

  return (
    <Form
    schema={jSONSchema}
    uiSchema={uISchema}
    formData={data}
    onSubmit={(data) => handleSave(data.formData)}
    disabled={false}
    onChange={(data) => handleChange(data.formData)}/>
  );
};

export default MortgageCalc;

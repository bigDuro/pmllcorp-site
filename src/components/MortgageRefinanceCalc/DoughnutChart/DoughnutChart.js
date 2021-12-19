import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = (props) => {
  const { data } = props;

  return (
    <Doughnut data={data} />
  )

};

export default DoughnutChart;

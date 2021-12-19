import React, { useState } from "react";
import { Row, Col, Carousel, Divider  } from 'antd';
import useMediaQuery, { MediaQueryKey } from 'use-media-antd-query';
import { ProgramCard } from '../../components';
import { loanPrograms } from '../../constants';


const getCards = (count, start) => {
  return loanPrograms.slice(start,count).map((program, index) => {
    return (
      <Col key={index} xs={24} sm={12} xl={6} align="center">
        <ProgramCard program={program}/>
      </Col>
    )
  })
}

export default function LoanPrograms(props) {
  const { perRow } = props;
  const colSize = useMediaQuery();
  const count = loanPrograms.length;
  const rows = colSize === 'xs' ? count : count/perRow;
  return (
    rows && colSize !== 'xs' ?
    <Carousel>
      {[...Array(rows)].map((row, index) => {
        return (
          <Row key={index}>
              {getCards(count/rows*(index+1), count/rows*index)}
          </Row>
        )
      })
    }
    </Carousel> :
    <Row>
        {getCards(count, 0)}
    </Row>
  );
}

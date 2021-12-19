import React from 'react';
import { FreeQuote } from '../../components';
import { loanPrograms } from '../../constants'


function FreeQuotePage(props) {
  return (
    <FreeQuote data={loanPrograms} {...props}/>
  )
}

export default FreeQuotePage;

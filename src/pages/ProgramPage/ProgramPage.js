import React from 'react';
import { LoanProgram } from '../../containers';
import { loanPrograms } from '../../constants'


function ProgramPage(props) {
  const pathname = window.location.pathname
  console.log('pathname:: ', pathname);
  return (
    <div className="site-layout-content">
      <LoanProgram {...props}/>
    </div>
  )
}

export default ProgramPage;

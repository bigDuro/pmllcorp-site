'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import './index.css'

const styles = {
  backgroundColor: '#555',
  paddingTop: '20px',
}

export const Footer = () => (
  <Container maxWidth='100%' style={styles}>
      <Box sx={{ width: '100%', padding: '20px 10%' }}>
        <Typography variant='body2' gutterBottom>
        A pre-approval does not constitute a loan commitment or guarantee of a loan. Pre-approval is subject to a satisfactory appraisal, satisfactory title search, and no meaningful change to borrower&#39;s financial condition.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ width: '100%', padding: '20px 10%' }}>
        <Typography variant='body2' gutterBottom>
        Branch NMLS# 2006097. Refer to www.nmlsconsumeraccess.org and input NMLS #2006097 to see where Peoples Mortgage Lending LLC. is a licensed lender. In all states, the principal licensed office of Peoples Mortgage Lending LLC. is 8050 Beckett Center Drive suite 223B, West Chester Ohio 45069; (NMLS ID#2006097). This is not an offer for extension of credit or commitment to lend. All loans must satisfy company underwriting guidelines. Not all applicants qualify. Information and pricing are subject to change at any time and without notice. The content in this advertisement is for informational purposes only. Products not available in all areas. As prohibited by federal law, we do not engage in business practices that discriminate on the basis of race, color, religion, national origin, sex, marital status, age (provided you have the capacity to enter into a binding contract), because all or part of your income may be derived from any public assistance program, or because you have, in good faith, exercised any right under the Consumer Credit Protection Act. The federal agency that administers our compliance with these federal laws is the Federal Trade Commission, Equal Credit Opportunity, Washington, DC, 20580. Peoples Mortgage Lending LLC. is an Equal Housing Lender.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ width: '100%', padding: '10px 10%', textAlign: 'center' }}>
        <Typography variant='caption' display='block' gutterBottom>
        Peoples Mortgage Lending LLC ©2023 Created by YoungAngel
        </Typography>
      </Box>
  </Container>
)
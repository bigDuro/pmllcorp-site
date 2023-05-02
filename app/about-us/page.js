'use client';

import { Divider } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Map } from '../components/map/map';

export default function AboutUs() {
  return (
    <main>
      <Container maxWidth="90%" style={{ padding: '2% 10% 5%', backgroundColor: '#f9fafa' }}>
        <Typography gutterBottom variant="h5" component="div" style={{ margin: '3% 0', color: '#666' }}>
          About Us &nbsp;
          <Typography gutterBottom variant="h6" component="span">
            Cincinnati · NMLS# 2006097
          </Typography>
        </Typography>
        <Typography gutterBottom variant="body1" component="p" style={{ color: "#666" }}>
        As your dedicated mortgage lending team, we are familiar with a variety of loan types and specialized programs. We are ready, willing, and able to help you find the mortgage product that may be right for you. Whether you are looking to purchase a personal residence, 2nd home, or investment property, or if you need to refinance an existing mortgage, we can help you find the product that suits your needs and circumstance. Peoples Mortgage Lending LLC. (PML) offers Conventional, FHA, VA, USDA, Jumbo, and Specialty products, and with team support your Loan Originator is prepared to help you find one that is right for you.
        </Typography>
        <Divider style={{margin: '3%'}}/>
        <Typography gutterBottom variant="body1" component="p" style={{ color: "#666" }}>
        Prepare to walk an illuminated path on your journey with us as you are never left in the dark. We will regularly communicate status updates to you as your loan reaches certain milestones in the process. With AFN as your mortgage lender, you have an entire team dedicated to carrying your loan from application, through processing and underwriting and over the finish line where your loan is finalized (closed) and funded.
        </Typography>
        <Divider style={{margin: '3%'}}/>
        <Typography gutterBottom variant="body1" component="p" style={{ color: "#666" }}>
        If you ever have a concern or question, we are a quick phone call or email away, and we always look forward to opportunities to communicate with you.
        </Typography>
        <Divider style={{margin: '3%'}}/>
        <Map mwidth={500} mheight={500}/>
      </Container>
    </main>
  )
}
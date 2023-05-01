'use client';

import { useRouter } from 'next/navigation';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import { Hero } from './components/hero/hero';
import { LoanPrograms } from './components/loanPrograms/loanPrograms';
import { loanProgramsShort } from './components/loanPrograms/programs'
import { Map } from './components/map/map';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Hero />
      <Container maxWidth="90%" style={{ padding: '3% 10% 5%', backgroundColor: '#837e7a' }}>
        <Typography gutterBottom variant="h5" component="div" style={{ marginBottom: '3%' }}>
          Our Loan Programs &nbsp;
          <Typography gutterBottom variant="h6" component="span">
            Take the first step toward the right mortgage.
          </Typography>
        </Typography>
        <LoanPrograms loanPrograms={loanProgramsShort} />
        <Grid container spacing={5}>
          <Grid item xs={12} style={{ textAlign: 'right', marginTop: '3%' }}>
            <Button style={{ color: 'white', textTransform: 'none' }} variant="text" onClick={() => router.push('/loan-programs')}>View All our Loan Programs </Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="90%" style={{ padding: '3% 10% 5%', backgroundColor: '#f9fafa', color: "#666" }}>
        <Typography gutterBottom variant="h5" component="div" style={{ marginBottom: '3%' }}>
          Peoples Mortgage Lending LLC &nbsp;
          <Typography gutterBottom variant="h6" component="span">
            260 Northland Blvd, Cincinnati, OH 45246
          </Typography>
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} style={{ marginTop: '3%' }}>
            <Typography gutterBottom variant="h5" component="div" style={{ marginBottom: '3%' }}>
              Who We Are
            </Typography>
            <Typography gutterBottom variant="body1" component="p" style={{ color: "#666" }}>
              Peoples Mortgage Lending LLC, is a family owned company that focuses on values and relationships which we believe are the foundation of success. We constantly evolve and adapt to ensure our employees are equipped with the right blend of products, service, and training to ensure that you have the best possible experience in one of the most important decisions in your life.
            </Typography>
            <Typography gutterBottom variant="h5" component="div" style={{ marginBottom: '3%' }}>
              Our Mission
            </Typography>
            <Divider style={{margin: '3%'}}/>
            <Typography gutterBottom variant="body1" component="p" style={{ color: "#666" }}>
              Peoples Mortgage Lending LLC has been serving the lending needs of real estate professionals, builders and individual homebuyers throughout the United States since 2001. Our Mission is to be the best, most trusted, and admired mortgage lenders with unique, affordable and convenient products while maintaining a close, family-oriented culture.
            </Typography>
            <div style={{textAlign:'right'}}>
              <Button style={{ textTransform: 'none' }} variant="text" onClick={() => router.push('/about-us')}>More About Us</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: '2%' }}>
            <Typography gutterBottom variant="h5" component="div" style={{ marginBottom: '3%' }}>
              Our Location
            </Typography>
            <Map/>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

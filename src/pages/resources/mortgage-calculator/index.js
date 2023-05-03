'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { MortgageCalculator } from '@/src/components/mortgageCalculator/mortgageCalculator';

export default function Resources() {
  return (
    <main>
      <Container maxWidth="90%" style={{ padding: '2% 10% 5%', backgroundColor: '#f9fafa' }}>
        <Typography gutterBottom variant="h5" component="div" style={{ margin: '3% 0', color: '#666' }}>
          Mortgage Calculator
        </Typography>
        <Grid item xs={12} style={{ marginTop: '2%' }}>
            <MortgageCalculator />
          </Grid>
      </Container>
    </main>
  )
}
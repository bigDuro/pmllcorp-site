'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { RefinanceCalculator } from '@/src/components/refinanceCalculator/refinanceCalculator';

export default function Resources() {
  return (
    <main>
      <Container maxWidth="90%" style={{ padding: '2% 10% 5%', backgroundColor: '#f9fafa' }}>
        <Typography gutterBottom variant="h5" component="div" style={{ margin: '3% 0', color: '#666' }}>
            Refinance Calculator
        </Typography>
        <Grid item xs={12} style={{ marginTop: '2%' }}>
            <RefinanceCalculator />
          </Grid>
      </Container>
    </main>
  )
}
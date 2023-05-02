'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Resources() {
  return (
    <main>
      <Container maxWidth="90%" style={{ padding: '2% 10% 5%', backgroundColor: '#f9fafa' }}>
        <Typography gutterBottom variant="h5" component="div" style={{ margin: '3% 0', color: '#666' }}>
          Resources &nbsp;
          <Typography gutterBottom variant="h6" component="span">
            Cincinnati · NMLS# 2006097
          </Typography>
          </Typography>
      </Container>
    </main>
  )
}
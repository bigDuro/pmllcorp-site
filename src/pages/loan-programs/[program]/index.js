'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { loanProgramsAll } from '@/src/components/loanPrograms/programs';
import { usePathname, useRouter } from 'next/navigation';
import { Button, Divider } from '@mui/material';
import Image from 'next/image';

export default function Program() {
  const router = useRouter();
  const pathname = usePathname();
  const pathParts = pathname?.split('/');
  const programName = pathname && pathParts[pathParts?.length - 1];
  const program = programName && loanProgramsAll.filter(program => program?.href.includes(programName))[0];
  return (
    <main>
      <Container maxWidth="90%" style={{ padding: '2% 10% 5%', backgroundColor: '#f9fafa' }}>
        <Typography gutterBottom variant="h5" component="div" style={{ margin: '3% 0', color: '#666' }}>
          Loan Program &nbsp;
          <Typography gutterBottom variant="h6" component="span">
            {program?.name}
          </Typography>
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={5} style={{}}>
            <Image src={program?.image.src} alt={program?.image.alt} onClick={() => window.location = '/'} style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} md={7} style={{}}>
            <Typography gutterBottom variant="body1" component="p" style={{ color: "#666" }}>
              {program?.description}
            </Typography>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: '3%' }} />
        <Grid item xs={12} style={{ textAlign: 'right', marginTop: '2%' }}>
          <Button variant="contained" onClick={() => router.push('/application')} style={{ textTransform: 'none' }}>Apply Now!</Button>
        </Grid>
      </Container>

    </main>
  )
}

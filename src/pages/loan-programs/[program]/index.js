'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { loanProgramsAll } from '@/src/components/loanPrograms/programs';
import { usePathname, useRouter } from 'next/navigation';
import { Button, Divider } from '@mui/material';
import Image from 'next/image';

const staticPaths = loanProgramsAll.reduce((list, program) => {
  const pathParts = program.href.split('/')
  const programName = pathParts[pathParts?.length - 2]
  return [
    ...list,
    { params: { program: programName } }
  ]
}, [])

export async function getStaticPaths() {
  return {
    paths: [...staticPaths],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  console.log('context:: ', context)
  return {
    // Passed to the page component as props
    props: { program: {} },
  }
}

export default function Program({ program }) {
  const router = useRouter();
  const pathname = usePathname();
  const pathParts = pathname?.split('/');
  const programName = pathname && pathParts[pathParts?.length - 2];
  const prgm = program && loanProgramsAll.filter(prgm => prgm?.href.includes(programName))[0];
  
  return (
    <main>
      <Container maxWidth="90%" style={{ padding: '2% 10% 5%', backgroundColor: '#f9fafa' }}>
        <Typography gutterBottom variant="h5" component="div" style={{ margin: '3% 0', color: '#666' }}>
          Loan Program &nbsp;
          <Typography gutterBottom variant="h6" component="span">
            {prgm?.name}
          </Typography>
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={5} style={{}}>
            <Image src={prgm?.image.src} alt={prgm?.image.alt} onClick={() => window.location = '/'} style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} md={7} style={{}}>
            <Typography gutterBottom variant="body1" component="p" style={{ color: "#666" }}>
              {prgm?.description}
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

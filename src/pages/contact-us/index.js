'use client';

import { ContactForm } from '@/src/components/contactForm/contactForm';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Map } from '../../components/map/map';

export default function ContactUs() {
    return (
        <main>
            <Container maxWidth="90%" style={{ padding: '2% 10% 5%', backgroundColor: '#f9fafa' }}>
                <Typography gutterBottom variant="h5" component="div" style={{ margin: '3% 0', color: '#666' }}>
                    Contact Us &nbsp;
                    <Typography gutterBottom variant="h6" component="span">
                        Cincinnati · NMLS# 2006097
                    </Typography>
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6} style={{ marginTop: '3%' }}>
                        <ContactForm />
                    </Grid>
                    <Grid item xs={12} md={6} style={{ marginTop: '3%' }}>
                        <Map mwidth={500} mheight={500} />
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}
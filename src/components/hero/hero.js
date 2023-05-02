'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BGImage from '../../assets/heroImage.jpeg';


export const Hero = () => {
    const router = useRouter();
    return (
        <Container maxWidth="100%" style={{backgroundColor: 'white', backgroundImage: `url('${BGImage.src}')`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                width: '100%',
                                padding: '5%',
                                margin: '5%',
                                color: '#000',
                            }}
                            >
                                <Typography variant="h5" gutterBottom>
                                    Prepare to walk an illuminated path on your journey with us!
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    With Peoples Mortgage as your mortgage lender, you have an entire team dedicated to carrying your loan from application, through processing and underwriting and over the finish line where your loan is finalized (closed) and funded.
                                </Typography>
                                <Grid item xs={12} style={{textAlign: 'right'}}>
                                    <Button variant="contained" onClick={() => router.push('/application')} style={{textTransform:'none'}}>Apply Now!</Button>  
                                </Grid>
                        </Box>
                    </Grid>
                </Grid>
        </Container>
    )
}
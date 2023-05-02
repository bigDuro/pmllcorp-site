'use client';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import LoanCard from './loanCard';

export const LoanPrograms = ({ loanPrograms }) => {
    return (
        <Grid container spacing={5}>
            {loanPrograms?.map(program => (
                <Grid item xs={12} md={6} lg={3} key={program.name}>
                    <LoanCard {...program} />
                </Grid>
            ))}
        </Grid>
            

    )
}
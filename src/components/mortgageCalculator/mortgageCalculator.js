'use client'

import React, { useState } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";

export const MortgageCalculator = () => {
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("7.1");
    const [loanTerm, setLoanTerm] = useState("30");
    const [monthlyPayment, setMonthlyPayment] = useState("");

    const calculatePayment = () => {
        const principle = parseFloat(loanAmount);
        const interest = parseFloat(interestRate) / 100 / 12;
        const payments = parseFloat(loanTerm) * 12;

        const x = Math.pow(1 + interest, payments);
        const monthly = (principle * x * interest) / (x - 1);

        if (isFinite(monthly)) {
            setMonthlyPayment(monthly.toFixed(2));
        } else {
            setMonthlyPayment("");
        }
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Loan Amount"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Interest Rate"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Loan Term (in years)"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} style={{textAlign: 'right'}}>
                    <Button variant="contained" onClick={calculatePayment}>
                        Calculate
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Monthly Payment"
                        value={monthlyPayment}
                        disabled
                    />
                </Grid>
            </Grid>
        </>
    )
}

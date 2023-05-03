'use client'
import React, { useState } from "react";
import {
    Container,
    Grid,
    TextField,
    Button,
    Typography,
    Divider,
} from "@mui/material";

export const RefinanceCalculator = () => {
    const [currentLoanBalance, setCurrentLoanBalance] = useState(null);
    const [interestRate, setInterestRate] = useState(null);
    const [loanTerm, setLoanTerm] = useState(null);
    const [newInterestRate, setNewInterestRate] = useState(null);
    const [newLoanTerm, setNewLoanTerm] = useState(null);
    const [closingCosts, setClosingCosts] = useState(null);

    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [newMonthlyPayment, setNewMonthlyPayment] = useState(null);
    const [totalInterestPaid, setTotalInterestPaid] = useState(null);
    const [savings, setSavings] = useState(null);

    const calculate = () => {
        // Calculate current mortgage payment
        const currentMonthlyRate = interestRate / 12 / 100;
        const currentLoanTermMonths = loanTerm * 12;
        const currentMonthlyPayment =
            (currentLoanBalance *
                currentMonthlyRate *
                (1 + currentMonthlyRate) ** currentLoanTermMonths) /
            ((1 + currentMonthlyRate) ** currentLoanTermMonths - 1);
        setMonthlyPayment(currentMonthlyPayment);

        // Calculate new mortgage payment
        const newMonthlyRate = newInterestRate / 12 / 100;
        const newLoanTermMonths = newLoanTerm * 12;
        const newMonthlyPayment =
            (currentLoanBalance *
                newMonthlyRate *
                (1 + newMonthlyRate) ** newLoanTermMonths) /
            ((1 + newMonthlyRate) ** newLoanTermMonths - 1);
        setNewMonthlyPayment(newMonthlyPayment);

        // Calculate total interest paid
        const currentTotalInterestPaid =
            currentMonthlyPayment * currentLoanTermMonths - currentLoanBalance;
        const newTotalInterestPaid =
            newMonthlyPayment * newLoanTermMonths - currentLoanBalance;
        setTotalInterestPaid(currentTotalInterestPaid - newTotalInterestPaid);

        // Calculate savings
        const closingCostsNet =
            closingCosts -
            (currentMonthlyPayment - newMonthlyPayment) * newLoanTermMonths;
        setSavings(currentTotalInterestPaid - newTotalInterestPaid - closingCostsNet);
    };

    return (
        <div style={{color: '#666'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Current Loan Balance"
                                fullWidth
                                type="number"
                                value={currentLoanBalance}
                                onChange={(e) => setCurrentLoanBalance(Number(e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Current Interest Rate"
                                fullWidth
                                type="number"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Current Loan Term (Years)"
                                fullWidth
                                type="number"
                                value={loanTerm}
                                onChange={(e) => setLoanTerm(Number(e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="          New Interest Rate"
                                fullWidth
                                type="number"
                                value={newInterestRate}
                                onChange={(e) => setNewInterestRate(Number(e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="New Loan Term (Years)"
                                fullWidth
                                type="number"
                                value={newLoanTerm}
                                onChange={(e) => setNewLoanTerm(Number(e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Closing Costs"
                                fullWidth
                                type="number"
                                value={closingCosts}
                                onChange={(e) => setClosingCosts(Number(e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={12} style={{textAlign:'right'}}>
                            <Button variant="contained" color="primary" onClick={calculate} style={{margin:'3% 0 0'}}>
                                Calculate
                            </Button>
                        </Grid>
                    </Grid>
                    
                    <Divider style={{margin: '3%'}}/>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h6">Current Payment</Typography>
                            <Typography variant="subtitle1">
                                ${monthlyPayment?.toFixed(2)}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">New Payment</Typography>
                            <Typography variant="subtitle1">
                                ${newMonthlyPayment?.toFixed(2)}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Total Interest Paid</Typography>
                            <Typography variant="subtitle1">
                                ${totalInterestPaid?.toFixed(2)}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Savings</Typography>
                            <Typography variant="subtitle1">
                                ${savings?.toFixed(2)}
                            </Typography>
                        </Grid>
                    </Grid>
        </div>
    );
}    

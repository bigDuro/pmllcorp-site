import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Snackbar,
} from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://pmllcorp.com/api/sendEmail/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (res.ok) {
      setName('');
      setEmail('');
      setMessage('');
      setSuccessSnackbar(true);
    } else {
      setErrorSnackbar(true);
    }
  };

  const handleSuccessSnackbarClose = () => {
    setSuccessSnackbar(false);
  };

  const handleErrorSnackbarClose = () => {
    setErrorSnackbar(false);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div style={{textAlign:'right'}}>
            <Button type="submit" variant="contained" color="primary">
            Submit
            </Button>
        </div>
        
      </form>
      <Snackbar
        open={successSnackbar}
        onClose={handleSuccessSnackbarClose}
        message="Email sent successfully!"
        autoHideDuration={5000}
      />
      <Snackbar
        open={errorSnackbar}
        onClose={handleErrorSnackbarClose}
        message="Error sending email. Please try again later."
        autoHideDuration={5000}
      />
    </Container>
  );
};


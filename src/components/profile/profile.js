'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const styles = {backgroundColor: '#c32e3d', textTransform:'none'}
export const Profile = () => {
  const router = useRouter();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Button variant="contained" style={styles} onClick={() => router.push('/portal')}>Client Portal</Button>
          </Box>
    )
}
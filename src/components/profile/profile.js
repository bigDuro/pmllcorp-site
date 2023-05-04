'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const styles = {backgroundColor: '#c32e3d', textTransform:'none'}
export const Profile = ({lgScreen}) => {
  const router = useRouter();
    return (
        <>
            <Button variant="contained" style={styles} onClick={() => router.push('/portal')}>{lgScreen ? 'Client' : ''} Portal</Button>
          </>
    )
}
'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const styles = {textTransform:'none', marginLeft: '10px'}
export const ApplyNow = ({lgScreen}) => {
  const router = useRouter();
    return (
        <>
            <Button variant="contained" style={styles} onClick={() => router.push('/application')}>Apply {lgScreen ? 'Now!' : ''}</Button>
          </>
    )
}
'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import useMediaQuery from '@mui/material/useMediaQuery';


export const Header = () => {
  const lgScreen = useMediaQuery('(min-width:900px)');
  return ( 
    
    <AppBar position="static">
      Header
    </AppBar>
  )
}
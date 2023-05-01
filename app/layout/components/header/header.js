'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Navigation } from '../../../components/navigation/navigation';
import { Profile } from '../../../components/profile/profile';
import { Logo } from '../../../components/logo/logo';
import './header.css'
import AppBreadcrumb from '@/app/components/breadcrumb/breadcrumb';


export const Header = () => {

  return ( 
    
    <AppBar position="static">
      <Container maxWidth="100%" className='headerBGDark'>
        <Toolbar disableGutters>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Logo/>
            <div className='navigation'>
              <Profile/>
            </div>
          </Grid>
        </Grid>
          
        </Toolbar>
      </Container>
      <Container maxWidth="100%" className='headerBGLight'>
        <Toolbar disableGutters>
        <Grid container>
          <Grid item xs={12}>
            <div className='navigation'>
              <Navigation/>
            </div>
            </Grid>
        </Grid>
        </Toolbar>
      </Container>
      <AppBreadcrumb/>
    </AppBar>
  )
}
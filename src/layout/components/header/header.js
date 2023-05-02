'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Navigation } from '../../../components/navigation/navigation';
import { Profile } from '../../../components/profile/profile';
import { Logo } from '../../../components/logo/logo';
import AppBreadcrumb from '@/src/components/breadcrumb/breadcrumb';
// import './header.css'

const styles = {
  headerBGDark: {
    backgroundColor: '#001529',
    position: 'relative',
    zIndex: '2'
  },
  headerBGLight: {
      backgroundColor: '#f2f2f2',
      position: 'relative',
      zIndex: '1',
      textAlign: 'right'
  },
  navigation: {
      textAlign: 'right',
      marginRight: '5%'
  }
}

export const Header = () => {

  return ( 
    
    <AppBar position="static">
      <Container maxWidth="100%" style={styles['headerBGDark']}>
        <Toolbar disableGutters>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Logo/>
            <div style={styles['navigation']}>
              <Profile/>
            </div>
          </Grid>
        </Grid>
          
        </Toolbar>
      </Container>
      <Container maxWidth="100%" style={styles['headerBGLight']}>
        <Toolbar disableGutters>
        <Grid container>
          <Grid item xs={12}>
            <div style={styles['navigation']}>
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
'use client';

import * as React from 'react';
import LogoImg from '../../assets/peoples_mortgage_logo.png';
import Image from 'next/image';
// import './index.css';

const styles = {
  position: 'absolute',
  width: '225px',
  top: '-10px',
  left: '5%',
  borderRadius: '0px 0px 5px 5px',
  boxShadow: '0 1px 0 0 hsl(0deg 0% 100%/30%), 0 2px 4px 0 rgba(0,0,0,.33)',
  padding: '10px',
  backgroundColor: 'white',
  cursor: 'pointer',
  /* z-index: 10; */
}

export const Logo = () => {
    return (
        <>
          <Image width={225} height={130} src={LogoImg.src} alt="Peoples Mortgage Lending Logo" style={styles} onClick={() => window.location = '/'}/>
        </>
    )
}
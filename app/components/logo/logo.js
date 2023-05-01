'use client';

import * as React from 'react';
import LogoImg from '../../assets/peoples_mortgage_logo.png';
import Image from 'next/image';
import './index.css';

export const Logo = () => {
    return (
        <>
          <Image width={225} height={130} src={LogoImg.src} alt="Peoples Mortgage Lending Logo" className='logoImg' onClick={() => window.location = '/'}/>
        </>
    )
}
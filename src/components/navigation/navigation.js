'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import { navigationData } from '@/src/constants/navigationData';

const pages = [...navigationData];
const styles = { textTransform: 'none', 'color': '#333' }

export const Navigation = () => {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = anchorEl?.id;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e, href) => {
        if(href && href !== 'backdropClick') {
            router.push(href);
        }
        setAnchorEl(null);
    };
    return (
        <>
            {pages.map((item) => (
                !item.hide && !item.links.length ?
                    <Button
                        className='navigation_button'
                        key={item.name}
                        sx={{}}
                        style={styles}
                        onClick={() => router.push(item.href)}
                        target={item.blank ? '_blank' : '_self'}
                    >
                        {item.name}
                    </Button> : 
                    !item.hide && item.links.length ?
                        <span key={item.name}>
                            <Button
                                id={item.name}
                                aria-controls={open == item.name ? item.name : undefined}
                                aria-haspopup="true"
                                aria-expanded={open !== item.name ? 'true' : undefined}
                                onClick={handleClick}
                                key={item.name}
                                style={styles}
                            >
                                {item.name}
                            </Button>
                            <Menu
                                id={item.name}
                                aria-labelledby={item.name}
                                anchorEl={anchorEl}
                                open={open === item.name}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                style={{top: '40px'}}
                            >   
                                {item.links.map(sublink => <MenuItem onClick={(e) => handleClose(e, sublink.href)} key={sublink.name}>{sublink.name}</MenuItem>)}
                                
                            </Menu>
                        </span>  : ''





            ))}
        </>
    )
}

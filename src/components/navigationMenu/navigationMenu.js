
import { navigationData } from '@/src/constants/navigationData';
import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, List, ListItem, ListItemText, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export const NavigationMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenus, setOpenMenus] = useState([]);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenus([])
    };

    const handleSubmenuClick = (index) => {
        setOpenMenus([])
        setOpenMenus((openMenus) => [...openMenus, index]);
    };

    const handleSubmenuClose = (index) => {
        setOpenMenus((openMenus) => openMenus.filter((item) => item !== index));
    };

    const renderMenuItems = (items) => {
        return items.map((item, index) => {
            if (!item.hide && item.links && item.links.length > 0) {
                const isOpen = openMenus.includes(index);

                return (
                    <span key={index}>
                        <ListItem button onClick={() => handleSubmenuClick(index)}>
                            <ListItemText primary={item.name} />
                        </ListItem>
                        <Collapse in={isOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {renderMenuItems(item.links)}
                            </List>
                        </Collapse>
                    </span>
                );
            } else {
                return (
                    !item.hide ?
                    <MenuItem key={index} onClick={() => handleMenuClose(item)}>
                        <Link href={item.href} target={item.blank ? '_blank' : '_self'} style={{width:'100%'}}>
                            {item.name}
                        </Link>
                    </MenuItem> : ''
                );
            }
        });
    };

    return (
        <>
            <IconButton onClick={handleMenuOpen} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {renderMenuItems(navigationData)}
            </Menu>
        </>
    );
};

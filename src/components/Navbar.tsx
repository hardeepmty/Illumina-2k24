"use client";
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobileView = useMediaQuery('(max-width: 600px)'); 

  const trigger = useScrollTrigger({
    threshold: 50, 
  });

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Schedule', path: '/schedule' },
    { text: 'Events', path: '/events' },
    { text: 'Administration', path: '/admin' }
  ];

  return (
    <div>
      <AppBar position="fixed" sx={{ 
        backgroundColor: trigger ? '#7D7B7E' : 'transparent', 
        transition: 'background-color 0.5s ease',
        boxShadow: 'none',
      }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* <Typography variant="h6" component="div" sx={{ color: trigger ? 'black' : 'white', fontWeight: '500' }}>
            ILLUMINA
          </Typography> */}
          <Image className='illumina' src="/illumina 2024.png" alt='illumina' width={70} height={70}/>
          {isMobileView ? (
            <IconButton
              size="large"
              aria-label="menu"
              sx={{ color: trigger ? 'black' : 'white' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <List sx={{ display: 'flex', color: trigger ? 'white' : 'white' }}>
              {navLinks.map((link) => (
                <ListItem button key={link.text}>
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
            </List>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.text}>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;

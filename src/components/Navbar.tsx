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

type NavbarProps = {
  onClic1: () => void;
  onClic2: () => void;
  onClic3: () => void;
  onClic4: () => void;
};

const Navbar = ({ onClic1, onClic2, onClic3, onClic4 }: NavbarProps) => {
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
    { text: 'HOME', path: '/', onClick: onClic1 },
    { text: 'EVENTS', path: '/schedule', onClick: onClic2 },
    { text: 'GALLERY', path: '/events', onClick: onClic3 },
    { text: 'ADMINISTRATION', path: '/admin', onClick: onClic4 },
  ];

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: trigger ? 'transparent' : 'transparent',
          transition: 'background-color 0.5s ease',
          boxShadow: 'none',
          backdropFilter: trigger ? 'blur(5px)' : 'none', // Apply blur effect on scroll
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Image className="illumina" src="/illumina 2024.png" alt="illumina" width={70} height={70} />
          {isMobileView ? (
            <IconButton
              size="large"
              aria-label="menu"
              sx={{ color: trigger ? 'orange' : 'white' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <List sx={{ display: 'flex', gap: '25px', color: trigger ? 'white' : 'orange' }}>
              {navLinks.map((link) => (
                <ListItem button key={link.text} onClick={link.onClick}>
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
            </List>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.text} onClick={link.onClick}>
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

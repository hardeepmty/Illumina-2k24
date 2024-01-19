import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

function Hero() {
  return (
    <Stack position="relative" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" sx={{ marginBottom: 0, bgcolor:"black" }}>
      <Image src="/hero.jpg" alt="hero" width={1510} height={800} style={{ width: '100%', height: '100vh', objectFit: 'cover', opacity:"50%", filter:"blur(2px)" }} />
      <Typography
        variant="h2"
        component="div"
        sx={{
          fontWeight: 'bold',
          position: 'absolute',
          color: 'white',
          textAlign: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: { xs: '24px', sm: '36px', md: '48px', lg: '60px' },
        }}
      >
        ILLUMINA 2024
      </Typography>
      <Typography
        component="div"
        sx={{
          position: 'absolute',
          color: 'white',
          textAlign: 'center',
          top: '57%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize:{xs:"15px", sm:"20px", md:"25px"}
        }}
      >
        27th and 28th January, VSSUT, Burla
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          position: 'absolute',
          top: '65%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'transparent',
          color: 'white',
          fontWeight: 'bold',
          border: "2px solid white",
        }}
      >
        EXPLORE MORE
      </Button>
    </Stack>
  );
}

export default Hero;

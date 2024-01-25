"use client";
import  Stack  from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import memberData from '@/library/data/memberData';
import ScoreCard from './HouseCard';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Monospace',
    fontWeightBold:"bolder",
  },
});

function Members() {
  return (
    <ThemeProvider theme={theme}>
    <Stack sx={{ gap: '20px', padding: '20px', justifyContent: 'space-between', mt: '50px', mb: '25px', overflowX:"hidden" }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold',color:"white" }}>
        ADMINISTRATION
      </Typography>

      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4, 1fr)' },
          gap: { xs: '5px', md: '10px' },
        }}
      >
        {memberData.map((member) => (
          <Stack
            className='member'
            key={member.id}
            sx={{
              gap: '5px',
              bgcolor: '#A9ABAC',
              border: '5px solid gray',
              borderRadius: '8px',
              minWidth: '100px',
              justifyContent: 'center',
              padding: '10px',
              mb: '20px',
            }}
          >
            <Avatar alt={member.name} src={`/majhi.jpeg`} sx={{ width: 55, height: 55, ml: '5px' }} />
            <Typography sx={{ fontWeight: 'bold', ml: '5px', color:"black" }}>{member.name}</Typography>
            <Typography sx={{ ml: '5px',color:"black" }}>{member.role}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
    </ThemeProvider>
  );
}

export default Members;

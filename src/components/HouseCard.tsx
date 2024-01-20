import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';

const HouseCard = ({ houseName, gold, silver, bronze }) => {
  const totalMedals = gold + silver + bronze;

  return (
    <Stack sx={{ paddingLeft: "10px", paddingRight: "10px", flexDirection: "row", justifyContent: 'center' }}>
      <Card className='card' sx={{ mt: "50px", textAlign: "center",   }}>
        <CardContent sx={{ alignContent: "center", padding:"30px" }}>
          {/* Image at the top */}
          {/* <Avatar alt={houseName} src={`/${houseName}.png`} sx={{ width: 85, height: 85, margin: 'auto' }} /> */}
          <Image alt={houseName} src={`/${houseName}.png`} width={100} height={100} style={{borderRadius:"100%"}} />

          {/* Medals in the middle */}
          <Grid container spacing={1} sx={{ mt: "15px", flexDirection: "row", justifyContent: 'center', gap:"10px" }}>
            <Stack item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: "600",fontSize:"15px",color:"#E07824" }}>
                <Image className='medal' src="/gold.svg" alt='gold' width={30} height={30} />: {gold}
              </Typography>
            </Stack>
            <Stack item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: "600", fontSize:"15px",color:"#E07824" }}>
                <Image className='medal' src="/silver.svg" alt='silver' width={30} height={30} />: {silver}
              </Typography>
            </Stack>
            <Stack item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: "600",fontSize:"15px",color:"#E07824" }}>
                <Image className='medal' src="/bronze.svg" alt='bronze' width={30} height={30} />: {bronze}
              </Typography>
            </Stack>
          </Grid>

          {/* Total Medals at the bottom */}
          <Stack sx={{ flexDirection: "row", justifyContent: 'center', mt:"15px" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "600", display: "flex", flexDirection: "row",color:"#E07824" }}>TOTAL: {totalMedals}</Typography>
          </Stack>

        </CardContent>
      </Card>
    </Stack>
  );
};

export default HouseCard;

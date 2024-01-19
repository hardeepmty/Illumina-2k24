import React from 'react'
import Grid from '@mui/material/Grid';
import HouseCard from './HouseCard';

function ScoreCard() {
  return (
    <div>
       <Grid container spacing={2}>
         <Grid item xs={6} sm={6} md={3}>
           <HouseCard houseName="MAITRI" gold={5} silver={3} bronze={2} />
         </Grid>
         <Grid item xs={6} sm={6} md={3}>
           <HouseCard houseName="SHAKTI" gold={3} silver={2} bronze={4} />
         </Grid>
         <Grid item xs={6} sm={6} md={3}>
           <HouseCard houseName="SHANTI" gold={2} silver={4} bronze={1} />
         </Grid>
         <Grid item xs={6} sm={6} md={3}>
           <HouseCard houseName="PRAGATI" gold={2} silver={3} bronze={1} />
         </Grid>
       </Grid>
     </div>
  )
}

export default ScoreCard

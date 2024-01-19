// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Image from 'next/image';

// const ScoreCard = ({ houseName, gold, silver, bronze }) => {
//   const totalMedals = gold + silver + bronze;

//   return (
//     <Stack sx={{ padding: "10px", flexDirection: "row", justifyContent: 'center' }}>
//       <Card sx={{ mt: "50px", textAlign: "center", bgcolor: "#f1f1f1", border: "1px solid black" }}>
//         <CardContent>
//           <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
//             {houseName}
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <Image src="/gold.svg" alt='gold' width={30} height={30} />: {gold}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <Image src="/silver.svg" alt='silver' width={30} height={30} />: {silver}
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <Image src="/bronze.svg" alt='bronze' width={30} height={30}  />: {bronze}
//               </Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="subtitle1">TOTAL: {totalMedals}</Typography>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </Stack>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       <Grid container spacing={2}>
//         <Grid item xs={6} sm={6} md={3}>
//           <ScoreCard houseName="MAITRI" gold={5} silver={3} bronze={2} />
//         </Grid>
//         <Grid item xs={6} sm={6} md={3}>
//           <ScoreCard houseName="SHAKTI" gold={3} silver={2} bronze={4} />
//         </Grid>
//         <Grid item xs={6} sm={6} md={3}>
//           <ScoreCard houseName="SHANTI" gold={2} silver={4} bronze={1} />
//         </Grid>
//         <Grid item xs={6} sm={6} md={3}>
//           <ScoreCard houseName="PRAGATI" gold={2} silver={3} bronze={1} />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// components/ScoreCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

const HouseCard = ({ houseName, gold, silver, bronze }) => {
  const totalMedals = gold + silver + bronze;

  return (
    <Stack sx={{ paddingLeft: "10px", paddingRight:"10px", flexDirection: "row", justifyContent: 'center' }}>
      <Card sx={{ mt: "50px", textAlign: "center", bgcolor: "#ffebcc", border: "3px solid black"}}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            {houseName}
          </Typography>
          <Grid container spacing={2} sx={{mt:"3px"}}>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight:"600" }}>
                <Image src="/gold.svg" alt='gold' width={30} height={30} />: {gold}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight:"600" }}>
                <Image src="/silver.svg" alt='silver' width={30} height={30} />: {silver}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight:"600" }}>
                <Image src="/bronze.svg" alt='bronze' width={30} height={30}  />: {bronze}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{fontWeight:"600"}}>TOTAL: {totalMedals}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default HouseCard;


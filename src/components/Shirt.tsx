import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import IlluminaLogo from '../../public/merch.png';

export default function Shirt() {
  return (
    <Stack
      sx={{
        mt: { xs: '500px', md: '100px' },
        mb: '50px',
        bgcolor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
    >
      <Stack
        sx={{
          whiteSpace: 'nowrap',
          bgcolor: 'black',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      ></Stack>

      <Stack
        sx={{
          whiteSpace: 'nowrap',
          ml:{xs:"10px",md:"200px"},
          mt: '20px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '30px', sm: '50px', md: '66px' } }}>GEAR UP FOR GAMEDAY</Typography>
        <Image src={IlluminaLogo} alt='tshirt' width={380} height={380} />
      </Stack>
    </Stack>
  );
}

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import IlluminaLogo from '../../public/merch.png';

export default function Shirt() {
  return (
    <Stack className='shirt'
      sx={{
        mt: "50px",
        // bgcolor: "orange",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "0", md: "50px" },
        alignItems: "center",
        paddingLeft: { md: "130px" },
        paddingRight: { md: "80px" },
        height:{xs:"32vh",sm:"auto", md:"auto"}, // Adjust the height as needed
      }}
    >
      <Stack>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "30px", md: "68px" },
            mt: { xs: "25px", md: "30px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          GEAR UP FOR GAMEDAY
        </Typography>
      </Stack>

      <Stack sx={{ maxWidth: "30%", mt: { xs: "0px" } }}>
        <Image
          className='image'
          src={IlluminaLogo}
          alt='shirt'
          style={{
            // backgroundColor: "black",
            maxWidth: '100%',
            height: "auto",
          }}
        />
      </Stack>
    </Stack>
  );
}

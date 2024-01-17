import { Stack, Typography} from '@mui/material';
import Avatar from '@mui/material/Avatar';  
import React from 'react';

function Members() {
  return (
    <Stack sx={{ gap: "20px", padding: "20px", justifyContent: "space-between", mt: "500px", mb: "25px" }}>
      <Typography variant='h6' sx={{fontWeight:"bold"}}>ADMINISTRATION</Typography>

      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          gap: { xs: '20px', md: '10px' },
        }}
      >
        {/* Member 1 */}
        <Stack
          sx={{
            gap: "5px",
            bgcolor: "white",
            border: "2px solid black",
            borderRadius: "8px",
            minWidth: "200px",
            justifyContent: "center",
            padding: "10px",
            mb: "20px",
          }}
        >
          <Avatar alt="Prof. Fourth Member" src="/majhi.jpeg" sx={{ width: 55, height: 55, ml:"5px" }} />
          <Typography sx={{ fontWeight: "bold", ml: "5px" }}>PROF.FOURTH MEMBER</Typography>
          <Typography sx={{ml:"5px"}}>Fourth Member Role</Typography>
        </Stack>

              {/* Member 2 */}
              <Stack
          sx={{
            gap: "5px",
            bgcolor: "white",
            border: "2px solid black",
            borderRadius: "8px",
            minWidth: "200px",
            justifyContent: "center",
            padding: "10px",
            mb: "20px",
          }}
        >
          <Avatar alt="Prof. Fourth Member" src="/majhi.jpeg" sx={{ width: 55, height: 55, ml:"5px" }} />
          <Typography sx={{ fontWeight: "bold", ml: "5px" }}>PROF.FOURTH MEMBER</Typography>
          <Typography sx={{ml:"5px"}}>Fourth Member Role</Typography>
        </Stack>

              {/* Member 3 */}
              <Stack
          sx={{
            gap: "5px",
            bgcolor: "white",
            border: "2px solid black",
            borderRadius: "8px",
            minWidth: "200px",
            justifyContent: "center",
            padding: "10px",
            mb: "20px",
          }}
        >
          <Avatar alt="Prof. Fourth Member" src="/majhi.jpeg" sx={{ width: 55, height: 55, ml:"5px" }} />
          <Typography sx={{ fontWeight: "bold", ml: "5px" }}>PROF.FOURTH MEMBER</Typography>
          <Typography sx={{ml:"5px"}}>Fourth Member Role</Typography>
        </Stack>

              {/* Member 4 */}
              <Stack
          sx={{
            gap: "5px",
            bgcolor: "white",
            border: "2px solid black",
            borderRadius: "8px",
            minWidth: "200px",
            justifyContent: "center",
            padding: "10px",
            mb: "20px",
          }}
        >
          <Avatar alt="Prof. Fourth Member" src="/majhi.jpeg" sx={{ width: 55, height: 55, ml:"5px" }} />
          <Typography sx={{ fontWeight: "bold", ml: "5px" }}>PROF.FOURTH MEMBER</Typography>
          <Typography sx={{ml:"5px"}}>Fourth Member Role</Typography>
        </Stack>


              {/* Member 5 */}
              <Stack
          sx={{
            gap: "5px",
            bgcolor: "white",
            border: "2px solid black",
            borderRadius: "8px",
            minWidth: "200px",
            justifyContent: "center",
            padding: "10px",
            mb: "20px",
          }}
        >
          <Avatar alt="Prof. Fourth Member" src="/majhi.jpeg" sx={{ width: 55, height: 55, ml:"5px" }} />
          <Typography sx={{ fontWeight: "bold", ml: "5px" }}>PROF.FOURTH MEMBER</Typography>
          <Typography sx={{ml:"5px"}}>Fourth Member Role</Typography>
        </Stack>

              {/* Member 6 */}
              <Stack
          sx={{
            gap: "5px",
            bgcolor: "white",
            border: "2px solid black",
            borderRadius: "8px",
            minWidth: "200px",
            justifyContent: "center",
            padding: "10px",
            mb: "20px",
          }}
        >
          <Avatar alt="Prof. Fourth Member" src="/majhi.jpeg" sx={{ width: 55, height: 55, ml:"5px" }} />
          <Typography sx={{ fontWeight: "bold", ml: "5px" }}>PROF.FOURTH MEMBER</Typography>
          <Typography sx={{ml:"5px"}}>Fourth Member Role</Typography>
        </Stack>

              {/* Member 7 */}
              <Stack
          sx={{
            gap: "5px",
            bgcolor: "white",
            border: "2px solid black",
            borderRadius: "8px",
            minWidth: "200px",
            justifyContent: "center",
            padding: "10px",
            mb: "20px",
          }}
        >
          <Avatar alt="Prof. Fourth Member" src="/majhi.jpeg" sx={{ width: 55, height: 55, ml:"5px" }} />
          <Typography sx={{ fontWeight: "bold", ml: "5px" }}>PROF.FOURTH MEMBER</Typography>
          <Typography sx={{ml:"5px"}}>Fourth Member Role</Typography>
        </Stack>

              {/* Member 8 */}
              <Stack
          sx={{
            gap: "5px",
            bgcolor: "white",
            border: "2px solid black",
            borderRadius: "8px",
            minWidth: "200px",
            justifyContent: "center",
            padding: "10px",
            mb: "20px",
          }}
        >
          <Avatar alt="Prof. Fourth Member" src="/majhi.jpeg" sx={{ width: 55, height: 55, ml:"5px" }} />
          <Typography sx={{ fontWeight: "bold", ml: "5px" }}>PROF.FOURTH MEMBER</Typography>
          <Typography sx={{ml:"5px"}}>Fourth Member Role</Typography>
        </Stack>

      </Stack>
    </Stack>
  );
}

export default Members;

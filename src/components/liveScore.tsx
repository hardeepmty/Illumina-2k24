import React from "react";
import LiveSport from "./livesport";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const LiveFeed = () => {
  return (
    <Container>
      <Grid container  display="flex" justifyContent="center" alignItems="center" padding="20px">
        
          <LiveSport title={"Football live"} game={"football"} sport={"football"} />
        
          <LiveSport title={"Volley Ball Live"} game={"volleyball"} sport={"volleyball"} />
        
          <LiveSport title={"Cricket Live"} game={"cricket"} sport={"cricket"} />
        
          <LiveSport title={"Kho Kho Live"} game={"khokho"} sport={"khokho"} />
        
          <LiveSport title={"Kabbadi Live"} game={"kabbadi"} sport={"kabbadi"} />
      </Grid>
    </Container>
  );
};

export default LiveFeed;

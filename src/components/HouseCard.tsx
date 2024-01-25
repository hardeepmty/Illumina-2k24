"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import { useTheme,ThemeProvider,createTheme } from "@mui/system";


const theme1=createTheme({
  typography:{
    h5:{
      fontFamily: "monospace",
      fontWeight: "bold",
      fontSize: "1.5rem", 
    }
  }
})
interface HouseCardProps {
  houseName: string;
  Gold: number;
  Silver: number;
  Bronze: number;
  back: string;
}

const HouseCard: React.FC<HouseCardProps> = ({
  houseName,
  Gold,
  Silver,
  Bronze,
  back,
}) => {
  const totalMedals = Gold + Silver + Bronze;
  return (
    <Stack
      sx={{
        padding: "2%",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Card className="card">
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <ThemeProvider theme={theme1}>
          <Typography
            variant="h5"
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              backgroundColor: `${back}`,
              textTransform: "uppercase", // Change here to make letters capital
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {houseName}
          </Typography>
          </ThemeProvider>

          {/* Medals in the middle */}
          <Grid
            container
            spacing={1}
            sx={{
              mt: "15px",
              flexDirection: "row",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "600",
                  fontSize: "15px",
                  color: "white",
                }}
              >
                <Image
                  className="medal"
                  src="/Gold.svg"
                  alt="Gold"
                  width={30}
                  height={30}
                />
                : {Gold}
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "600",
                  fontSize: "15px",
                  color: "white",
                }}
              >
                <Image
                  className="medal"
                  src="/Silver.svg"
                  alt="Silver"
                  width={30}
                  height={30}
                />
                : {Silver}
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "600",
                  fontSize: "15px",
                  color: "white",
                }}
              >
                <Image
                  className="medal"
                  src="/Bronze.svg"
                  alt="Bronze"
                  width={30}
                  height={30}
                />
                : {Bronze}
              </Typography>
            </Stack>
          </Grid>

          {/* Total Medals at the bottom */}
          <Stack
            sx={{ flexDirection: "row", justifyContent: "center", mt: "15px" }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "600",
                display: "flex",
                flexDirection: "row",
                color: "orange",
              }}
            >
              TOTAL: {totalMedals}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default HouseCard;

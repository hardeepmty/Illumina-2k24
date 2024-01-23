"use client";
import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider, createTheme } from "@mui/material";

const theme1 = createTheme({
  typography: {
    h5: {
      fontFamily: "Roboto Condensed, sans-serif",
      color: "white",
    },
  },
});

const theme2 = createTheme({
  typography: {
    body2: {
      fontFamily: "monospace",
      fontWeight: "bold",
    },
  },
});
interface ScoreData {
  gameId: string;
  scores: {
    teamA: string;
    teamB: string;
  };
  teams: {
    t1: string;
    t2: string;
  };
}

interface LiveSportProps {
  sport: string;
  game: string;
  title: string;
}

const LiveSport: React.FC<LiveSportProps> = ({ sport, game, title }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    const scoreUpdateEvent = `scoreUpdated${sport}`;

    newSocket.on(scoreUpdateEvent, (data: ScoreData) => {
      console.log("Received scoreUpdated event:", data);
      setScoreData(data);
    });

    return () => {
      if (newSocket) {
        newSocket.off(scoreUpdateEvent);
        newSocket.disconnect();
      }
    };
  }, [sport]);

  useEffect(() => {
    if (!scoreData) {
      fetchDataFromServer();
    }
  }, [scoreData, sport]);

  const fetchDataFromServer = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/getStoredData${sport}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      if (data.length > 0) {
        setScoreData(data[data.length - 1]);
      }
    } catch (error) {
      console.error("Error fetching data from server:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      sx={{
        width: 280,
        margin: "10px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        background: "linear-gradient(45deg, #2C3E50, #E74C3C, #1F2D3D)",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <ThemeProvider theme={theme1}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {title}
          </Typography>
        </ThemeProvider>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <ThemeProvider theme={theme2}>
              <Stack
                style={{
                  flexDirection: "row",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: 1,
                    background: "linear-gradient(to right, #2193b0, #6dd5ed)",
                    height: "30px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    position: "relative",
                    width: "90px",
                    textAlign: "center",
                    top: "5px",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    paddingLeft: "10px",
                    border: "1px solid #fff", // Add border
                  }}
                >
                  {scoreData?.gameId === game
                    ? `${scoreData.teams.t1}`
                    : "TeamA"}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: 1,
                    display: "flex",
                    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100px",
                    borderRadius: "2px",
                    border: "1px solid #fff", // Add border
                  }}
                >
                  {scoreData && scoreData.gameId === game ? (
                    <>
                      {scoreData.scores.teamA} - {scoreData.scores.teamB}
                    </>
                  ) : (
                    "No Live"
                  )}
                </Typography>

                <Typography
                  variant="body2"

                  sx={{
                    marginBottom: 1,
                    background: "linear-gradient(to right, #2193b0, #6dd5ed)",
                    height: "30px",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    position: "relative",
                    width: "90px",
                    textAlign: "center",
                    top: "5px",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    paddingRight: "10px",
                    border: "1px solid #fff", // Add border
                  }}
                >
                  {scoreData?.gameId === game
                    ? `${scoreData.teams.t2}`
                    : "TeamB"}
                </Typography>
              </Stack>
            </ThemeProvider>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default LiveSport;

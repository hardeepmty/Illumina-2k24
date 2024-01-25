"use client";
import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

interface ScoreData {
  gameId: string;
  scores: {
    teamA: number;
    teamB: number;
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
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    const scoreUpdateEvent = `scoreUpdated${sport}`;

    newSocket.on(scoreUpdateEvent, (data: ScoreData) => {
      console.log('Received scoreUpdated event:', data);
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
      const response = await fetch(`http://localhost:5000/getStoredData${sport}`);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      if (data.length > 0) {
        setScoreData(data[data.length - 1]);
      }
    } catch (error) {
      console.error('Error fetching data from server:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ width: 250, margin: '10px', backgroundColor: '#f0f0f0' }}>
      <CardContent>
        <Typography variant="h6" sx={{ color: '#333' }}>{title}</Typography>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
              {scoreData?.gameId === game ? `${scoreData.teams.t1} :` : 'Team A:'}{' '}
              {scoreData?.gameId === game ? scoreData.scores.teamA : 'N/A'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {scoreData?.gameId === game ? `${scoreData.teams.t2} :` : 'Team B:'}{' '}
              {scoreData?.gameId === game ? scoreData.scores.teamB : 'N/A'}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default LiveSport;

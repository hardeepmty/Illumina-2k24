// Assuming this is ScoreCard.tsx
"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import HouseCard from "./HouseCard";
import axios from "axios";

interface MedalData {
  groupName: string;
  Gold: number;
  Silver: number;
  Bronze: number;
  goldCount: number;
  silverCount: number;
  bronzeCount: number;
}

function ScoreCard() {
  const [data, setData] = useState<MedalData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = "http://localhost:5000/events/medal_data";
    axios
      .get<MedalData[]>(apiUrl)
      .then((response) => {
        const sortedData = response.data.sort((a, b) => {
          const aPoints = a.goldCount * 3 + a.silverCount * 2 + a.bronzeCount;
          const bPoints = b.goldCount * 3 + b.silverCount * 2 + b.bronzeCount;
          return bPoints - aPoints;
        });

        const slicedData = sortedData.slice(0, 4);

        setData(slicedData);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const getBackgroundColor = (groupName: string) => {
    switch (groupName) {
      case "maitri":
        return "rgba(239,167,53,255)";
      case "pragati":
        return "rgba(7,147,76,255)";
      case "shanti":
        return "rgba(13,122,187,255)";
      case "shakti":
        return "rgba(220,57,82,255)";
      default:
        return "yellow";
    }
  };

  return (
    <div>
      <Grid container spacing={2} className="scoreCard" sx={{ mt: "50px",padding:"5px" }}>
        {data?.map((item, index) => (
          <Grid key={index} item xs={6} sm={6} md={3}>
            {item && (
              <HouseCard
                houseName={item.groupName}
                Gold={item.goldCount}
                Silver={item.silverCount}
                Bronze={item.bronzeCount}
                back={getBackgroundColor(item.groupName)}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ScoreCard;

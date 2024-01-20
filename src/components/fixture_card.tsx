import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

interface CardProps {
  sport: string;
  team1: string;
  team2: string;
  time:  string;
  venue: string;
}

const CustomCard: React.FC<CardProps> = ({ team1, team2, time, venue, sport }) => {
  return (
    <Card
      style={{
        border: "1px solid #000000",
        width: "200px",
        height: "300px",
        backgroundColor: "#ef701f",
        position: "relative", 
      }}
    >
      <Typography
        variant="body1"
        component="div"
        style={{
          position: "absolute",
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          width:"25px",
          height:"25px",
          borderRadius:"50%",
          backgroundColor:"white",
          display:"flex",
          alignContent:"center",
          justifyContent:"center",
        }}
      >
        vs
      </Typography>
      <Stack
        style={{
          width: "100%",
          height: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ><Typography variant="h6" component="div">{`${sport}`}</Typography></Stack>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height: "60%",
          padding: "5px",
          gap: "2px",
        }}
      >
        <Card
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#debbaf",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="body1" component="div">
            {`${team1}`}
          </Typography>
        </Card>
        <Card
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#debbaf",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="body1" component="div">
            {`${team2}`}
          </Typography>
        </Card>
      </CardContent>
      <Stack
        style={{
          width: "100%",
          height: "20%",
        }}
      >
        <Typography variant="body1" component="div">Time:{`${time}`}</Typography>
        <Typography variant="body1" component="div">Venue:{`${venue}`}</Typography>
      </Stack>
    </Card>
  );
};

export default CustomCard;

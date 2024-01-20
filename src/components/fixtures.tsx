"use client";
import { useEffect, useState } from "react";
import CustomCard from "./fixture_card"; // Update the import path as needed
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stack from "@mui/material/Stack";
import cardsData from "@/lib/data/match_fixtures";

const CardContainer: React.FC = () => {
  const cardArray = Object.entries(cardsData);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box p={3} textAlign="center">
      {isMobile ? (
        <Stack sx={{ margin: "0 auto", marginTop: "50px", maxWidth: "200px" }}>
          <Slider {...settings}>
            {cardArray.map(([fixtureKey, data]) => (
              <div key={fixtureKey} style={{ margin: "0 10px" }}>
                <CustomCard team1={data.team1} team2={data.team2} />
              </div>
            ))}
          </Slider>
        </Stack>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {cardArray.map(([fixtureKey, data]) => (
            <Grid item key={fixtureKey}>
              <CustomCard team1={data.team1} team2={data.team2} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CardContainer;

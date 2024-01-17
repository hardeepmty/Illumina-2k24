"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Card, Stack } from "@mui/material";

interface Image {
  src: string;
  alt: string;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  autoplay: boolean;
  arrows: boolean;
  autoplaySpeed: number;
}

const Gallery: React.FC = () => {
  const imageList: Image[] = [
    { src: "/1.jpg", alt: "Image 1" },
    { src: "/2.jpg", alt: "Image 2" },
    { src: "/3.jpg", alt: "Image 3" },
    { src: "/4.jpg", alt: "Image 4" },
    { src: "/5.jpg", alt: "Image 5" },
    { src: "/6.jpg", alt: "Image 6" },
  ];

  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };

  return (
    <Stack
      sx={{
        maxWidth: { xs: "300px", sm: "500px", md: "700px", lg: "700px" },
        margin: "0 auto",
        marginTop: "50px",
      }}
    >
      <Slider {...settings}>
        {imageList.map((image, index) => (
          <div key={index} style={{ margin: "0 10px" }}>
            <Card
              className="box"
              sx={{
                maxWidth: {
                  xs: "300px",
                  sm: "500px",
                  md: "700px",
                  lg: "700px",
                },
                background: "white",
                overflow: "hidden",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width="0"
                height="0"
                sizes="(max-width: 300px) 100vw, (max-width: 500px) 500px, (max-width: 700px) 700px, 700px"
                style={{
                  width: "100%", // Make the image responsive within its container
                  height: "auto", // Maintain the aspect ratio
                  maxWidth: "100%", // Ensure the image doesn't exceed its container's width
                }}
              />
            </Card>
          </div>
        ))}
      </Slider>
    </Stack>
  );
};

export default Gallery;

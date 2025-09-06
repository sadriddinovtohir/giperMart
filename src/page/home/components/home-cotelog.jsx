import React from "react";
import useCatalogGet from "../queriy/useCatalogGet";
import { Stack, Typography } from "@mui/material";
import Slider from "react-slick";

export default function HomeCotelog() {
  const { data, isLoading, isError, error } = useCatalogGet();

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 3,
      responsive: [
    {
      breakpoint: 1350, 
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 1050, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 738, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 474, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  };
  return (
    <div>
      {isLoading ? (
        "loading"
      ) : (
        <Slider {...settings}>
          {data.map((item) => (
            <Stack key={item.id} direction={"row"} gap={"15px"} py={"35px"}>
              <Stack
                bgcolor={"#f6f6f6"}
                direction={"row"}
                alignItems={"center"}
                gap={"15px"}
                justifyContent={"center"}
              >
                <img
                  style={{ width: "95px", height: "95px" }}
                  src={item.img}
                  alt="img"
                />
                <Typography maxWidth={"140px"}>{item.text}</Typography>
              </Stack>
            </Stack>
          ))}
        </Slider>
      )}
    </div>
  );
}

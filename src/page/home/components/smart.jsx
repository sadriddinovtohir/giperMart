import {
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import useGetPhone from "../queriy/useGetPhone";
import Slider from "react-slick";
import Like_icons from "../../../assets/icon/like_icons";
import Card_icons from "../../../assets/icon/card_icons";
import Left_icons from "../../../assets/icon/left_icons";
import Right_icons from "../../../assets/icon/right_icons";
import ProductPhone from "../../../components/product/product-phone";
import { Link } from "react-router-dom";
import { COLOR } from "../../../config/ui/color";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "-55px",
        right: "55px",
      }}
      onClick={onClick}
    >
      <IconButton>
        <Right_icons />
      </IconButton>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "none",
        position: "absolute",
        left: "90%",
        top: "-55px",
      }}
      onClick={onClick}
    >
      <IconButton>
        <Left_icons />
      </IconButton>
    </div>
  );
}

export function Smart({ name, path }) {
  const { data, isLoading, isError, error } = useGetPhone(path);

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <Container>
      <Stack position={"relative"} my={"48px"}>
        <Typography
          variant="h3"
          fontWeight={600}
          sx={{ fontSize: { xs: "19px", md: "18px", lg: "24px", xl: "30px" } }}
        >
          {name}
        </Typography>
        <Slider {...settings}>
          {isLoading ? (
            <div>loading</div>
          ) : (
            data?.map((item) => (
              <Stack
                my={"18px"}
                position={"relative"}
                justifyContent={"center"}
                direction={"row"}
                width={"100%"}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: COLOR["--m3-read-only-dark-black"],
                  }}
                  to={`/SingleProduct/${item.id}`}
                >
                  <ProductPhone item={item} />
                </Link>
              </Stack>
            ))
          )}
        </Slider>
      </Stack>
    </Container>
  );
}

import { Button, Container, IconButton, Stack, Typography } from "@mui/material";
import useGetPhone from "../queriy/useGetPhone";
import Slider from "react-slick";
import Like_icons from "../../../assets/icon/like_icons";
import Card_icons from "../../../assets/icon/card_icons";
import Left_icons from "../../../assets/icon/left_icons";
import Right_icons from "../../../assets/icon/right_icons";
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
        right:"55px"
      }}
      onClick={onClick}
    >
        <IconButton>

        <Right_icons/>
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
        backgroundColor:"none",
        position:"absolute",
       left:"90%",
       top:"-55px"
      }}
      onClick={onClick}
    >
     <IconButton ><Left_icons/></IconButton>   
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
      breakpoint: "1250px", 
      settings: {
        slidesToShow: 6,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: "1050px", 
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: "576px", 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  };
  return (
    <Container>
      <Stack position={"relative"} my={"48px"} >
        <Typography variant="h3"  fontSize={"24px"} fontWeight={600}>{name}</Typography>
        <Slider {...settings}>
          {isLoading ? (
            <div>loading</div>
          ) : (
            data?.map((item) => (
              <Stack my={"18px"}  position={"relative"} justifyContent={"center"} direction={"row"} width={"100%"}>
                <Stack
                  width={"234px"}
                  height={"273px"}
                  justifyContent={"space-between"}
                  style={{ paddingLeft: "4px", paddingRight: "48px" }}
                  key={item.id}
                >
                  <Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <img
                        style={{ maxWidth: "130px" }}
                        src={item.img}
                        alt="img"
                      />
                      <Like_icons />
                    </Stack>
                    <Typography variant="h6">{item.title}</Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h3" fontSize={"13px"} fontWeight={600}>
                      {item.price} CYM
                    </Typography>
                    <Button style={{ backgroundColor: "yellow" }} variant="btn">
                      <Card_icons />
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            ))
          )}
        </Slider>
      </Stack>
    </Container>
  );
}

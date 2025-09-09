import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Card_icons from "../../assets/icon/card_icons";
import Like_icons from "../../assets/icon/like_icons";
import { useDispatch } from "react-redux";
import { addData } from "../../config/store/reduser/productReduser";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { COLOR } from "../../config/ui/color";
import { playSound } from "../notfication/not";
import notfication from "../../assets/notfication/nutfications.mp3";

export default function ProductPhone({item, path}) {
  
  const dis = useDispatch();
  const handledata = (item) => {
    const newNumber = Number(item.price.split(" ").join(""))
    dis(addData({...item, price:newNumber}));
    toast.success("malumotlar savatchaga solindi");
    playSound(notfication);
  };
  return (
    <div>
      <Stack
        width={"234px"}
        height={"300px"}
        justifyContent={"space-between"}
        style={{ paddingLeft: "26px", paddingRight: "26px" }}
        key={item.id}
      >
        <Stack>
          <Stack direction={"row"} justifyContent={"center"} gap={"5px"}>
            <Link
              style={{
                textDecoration: "none",
                color: `${COLOR["--m3-read-only-dark-black"]}`,
              }}
              to={`/singleproduct/${item.id}/${path}`}
            >
              <img style={{ maxWidth: "130px" }} src={item.img} alt="img" />
            </Link>
            <Like_icons />
          </Stack>
          {path == "phones" ? (
            <Typography variant="h2"  fontSize={"20px"}>{item.title}</Typography>
          ) : (
            <Typography variant="h6" fontSize={"16px"}>
              {item.title}
            </Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h3" fontSize={"13px"} fontWeight={600}>
            {item.price} CYM
          </Typography>
          <Button
            onClick={() => handledata(item)}
            style={{ backgroundColor: "yellow", marginRight: "7px" }}
            variant="btn"
          >
            <Card_icons />
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

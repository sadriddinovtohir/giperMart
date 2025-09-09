import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Like_icons from "../../assets/icon/like_icons";
import Card_icons from "../../assets/icon/card_icons";
import { useDispatch } from "react-redux";
import { addData } from "../../config/store/reduser/productReduser";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { playSound } from "../notfication/not";
import notfication from '../../assets/notfication/nutfications.mp3'

export default function CotalodDetaile(item) {
  const dis = useDispatch();
  const {path} = useParams();
  
  
  
  const handledata = (item) => {
      const newNumber = Number(item.price.split(" ").join(""))
    dis(addData({...item, price:newNumber}));
     toast.success("malumotlar savatchaga solindi");
       playSound(notfication);
  };
  return (
    <Stack maxWidth={"250px"} justifyContent={"center"} alignItems={"center"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/singleproduct/${item.id}/${path}`}
        >
          <img style={{ width: "200px" }} src={item.img} alt="img" />
        </Link>
        <Like_icons />
      </Stack>
      <Typography variant="h3" fontSize={"16px"} fontWeight={400}>
        {item.title}
      </Typography>
      <Stack
        alignItems={"center"}
        direction={"row"}
        gap={"10px"}
        mr={"14px"}
      >
        <Typography variant="h5">{item.price}</Typography>
        <Stack style={{ width: "36px" }}>
          <Button
            onClick={() => handledata(item)}
            style={{ backgroundColor: "yellow", marginRight: "7px" }}
            variant="btn"
          >
            <Card_icons />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

import { Stack } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import Profile from "../../page/profile/home/profile";
import Prfile_datnni_icons from "../../assets/icon/prfile_datnni_iconst";
import Cards_icons from "../../assets/icon/cards_icons";
import Location_icons from "../../assets/icon/location_icons";
import Massegs_icons from "../../assets/icon/massegs_icons";
import Like_icons from "../../assets/icon/like_icons";
import { COLOR } from "../../config/ui/color";

export default function ProfileLayout() {
  return (
    <Stack py={"50px"} direction={"row"}  gap={"40px"}>
      <Stack>
        <Profile />
      </Stack>
      <Stack gap={"30px"} alignItems={"start"} justifyContent={"start"}>
        <Stack width={"329px"}>
          <NavLink
            style={({isActive})=>({ color: "black", textDecoration: "none",   border: isActive ? "1px solid black" : "1px solid #BFBFBF", paddingTop:"12px", paddingBottom:"12px", paddingRight:"90px", paddingLeft:"24px"})}
            to={"/profile/userdata"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"10px"}
             
            >
              <Prfile_datnni_icons /> Персональные данные
            </Stack>
          </NavLink>
        </Stack>
        <Stack width={"329px"} >
          <NavLink
            style={({isActive})=>({ color: "black", textDecoration: "none",   border: isActive ? "1px solid black" : "1px solid #BFBFBF", paddingTop:"12px", paddingBottom:"12px", paddingRight:"90px", paddingLeft:"24px"})}
            to={"/profile/usercard"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"10px"}
             

            >
              <Cards_icons /> Мои заказы
            </Stack>
          </NavLink>
        </Stack>
        <Stack width={"329px"}>
          <NavLink
            style={({isActive})=>({ color: "black", textDecoration: "none",   border: isActive ? "1px solid black" : "1px solid #BFBFBF", paddingTop:"12px", paddingBottom:"12px", paddingRight:"90px", paddingLeft:"24px"})}
            to={"/profile/profile_location"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"10px"}
             
            >
              <Location_icons /> Адреса
            </Stack>
          </NavLink>
        </Stack>
        <Stack width={"329px"}>
          <NavLink
            style={({isActive})=>({ color: "black", textDecoration: "none",   border: isActive ? "1px solid black" : "1px solid #BFBFBF", paddingTop:"12px", paddingBottom:"12px", paddingRight:"90px", paddingLeft:"24px"})}
            to={"/profile/likedata"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"10px"}
             
            >
              <Like_icons /> Избранные товары
            </Stack>
          </NavLink>
        </Stack>
        <Stack width={"329px"}>
          <NavLink
            style={({isActive})=>({ color: "black", textDecoration: "none",   border: isActive ? "1px solid black" : "1px solid #BFBFBF", paddingTop:"12px", paddingBottom:"12px", paddingRight:"90px", paddingLeft:"24px"})}
            to={"/profile/massage"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"12px"}
             
            >
              <Massegs_icons /> Уведомления
            </Stack>
          </NavLink>
        </Stack>
      </Stack>
      <Outlet />
    </Stack>
  );
}

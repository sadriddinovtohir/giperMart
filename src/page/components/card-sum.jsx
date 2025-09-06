import { Button, Stack, Typography } from "@mui/material";
import Like_icons from "../../assets/icon/like_icons";
import { Buttons } from "../../config/ui/style";
import Delete_icons from "../../assets/icon/delete_icons";
import { useDispatch } from "react-redux";
import { deleteData } from "../../config/store/reduser/productReduser";

export default function CardSum(item) {
    const dis = useDispatch()

  return (
    <Stack direction={"row"}  justifyContent={"space-between"} alignItems={"center"}>
      <Stack
        borderBottom={"1px solid #959595"}
        direction={"row"}
        width={"100%"}
        py={"20px"}
        my={"10px"}
        gap={"20px"}
        justifyContent={"space-between"}
      >
        <img
          style={{ width: "200px", height: "200px" }}
          src={item.img}
          alt={item.title}
        />  
<Stack gap={"10px"}>
            <Typography variant="h4" fontWeight={700}>
            {item.title}
        </Typography>
        <Typography fontSize={"16px"} fontWeight={600}>({item.rame})</Typography>
       <Stack direction={"row"} alignItems={"center"} gap={"30px"}>
         <Stack direction={"row"} gap={"10px"} color={"#929292"}>
            <Like_icons/> В избранное
        </Stack>
        <Buttons onClick={()=> dis(deleteData(item.id))}> <Delete_icons/> Удалить</Buttons>
       </Stack>
</Stack>
<Stack>
    <Typography variant="h6" fontWeight={700}>{item.price} Сум</Typography>
</Stack>
     
      </Stack>
     
    </Stack>
  );
}

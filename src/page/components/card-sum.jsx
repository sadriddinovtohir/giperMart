import { Box, Stack, Typography } from "@mui/material";
import Like_icons from "../../assets/icon/like_icons";
import { Buttons } from "../../config/ui/style";
import Delete_icons from "../../assets/icon/delete_icons";
import { useDispatch } from "react-redux";
import {
  decrementPrice,
  deleteData,
  incrementPrice,
} from "../../config/store/reduser/productReduser";
import { forrmator } from "../../config/formator/formator";

export default function CardSum({ id, img, title, UserPrice, rame, count }) {
  const dis = useDispatch();

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack
        borderBottom={"1px solid #959595"}
        direction={"row"}
        width={"100%"}
        py={"20px"}
        my={"10px"}
        gap={"20px"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} gap={"30px"}>
          <img
            style={{ width: "200px", height: "200px" }}
            src={img}
            alt="img"
          />
          <Stack gap={"10px"}>
            <Typography variant="h5" maxWidth={"450px"} fontWeight={400}>
              {title}
            </Typography>
            {rame ? (
              <Typography fontSize={"16px"} fontWeight={600}>
                ({rame})
              </Typography>
            ) : (
              <Typography fontSize={"16px"} fontWeight={600}>
                ({id})
              </Typography>
            )}
            <Stack direction={"row"} alignItems={"center"} gap={"30px"}>
              <Stack direction={"row"} gap={"10px"} color={"#929292"}>
                <Like_icons /> В избранное
              </Stack>
              <Buttons
                style={{ cursor: "pointer" }}
                onClick={() => dis(deleteData(id))}
              >
                {" "}
                <Delete_icons /> Удалить
              </Buttons>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h6" fontWeight={700}>
            {forrmator(UserPrice)} Сум
          </Typography>
          <Stack
            bgcolor={"#ededed"}
            direction={"row"}
            width={"100px"}
            mr={"auto"}
            ml={"auto"}
            mt={"20px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"5px"}
          >
           {count == 1 ?  <button 
              onClick={() => dis(deleteData(id))}
              style={{ cursor: "pointer", backgroundColor:"red", color:"#fff"}}
            >
              X
            </button>:  <button
              onClick={() => dis(decrementPrice({ id: id }))}
              style={{ cursor: "pointer",  }}
            >
              -
            </button>}
            <Box>{count}</Box>
            <button
              onClick={() => dis(incrementPrice({ id: id }))}
              style={{ cursor: "pointer" }}
            >
              +
            </button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

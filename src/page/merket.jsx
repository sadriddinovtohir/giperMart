import { useSelector } from "react-redux";
import { loadState } from "../config/store";
import CardSum from "./components/card-sum";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { forrmator } from "../config/formator/formator";

export default function Merket() {
  // const size = useMediaQuery("(min-Width:1143px)");
  const nav = useNavigate();
  const { dataList, dataCount, totalPrice } = useSelector((state) => state.productReduser);

  const localdata = loadState("user");

  const handleCheckout = () => {
    if (!localdata || !localdata.name) {
      nav("/login");
      return;
    }
    // proceed to checkout flow (to be implemented)
  };
  return (
    <Container>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        <Stack>
          {dataList && dataList.length > 0 ? (
            dataList.map((item) => (
              <CardSum key={item.id} img={item.img} id={item.id} title={item.title} UserPrice={item.UserPrice} rame={item.rame} count={item.count} />
            ))
          ) : (
            <Typography>Корзина пуста</Typography>
          )}
        </Stack>

        <Stack
          justifyContent={"space-between"}
          width={"330px"}
          height={"259px"}
          bgcolor={"#f7f7f7"}
          pt={"20px"}
        >
          <Stack pl={"24px"} gap={"12px"}>
            <Typography>В корзине</Typography>
            <Typography>Товаров: {dataCount}</Typography>
            <Typography color="red">Введите промокод</Typography>
            <Typography mt={"20px"}> AllPrice: {forrmator(totalPrice || 0)} UZS</Typography>
          </Stack>
          <Button onClick={handleCheckout} style={{ marginBottom: "1px" }} variant="contained">
            Оформить заказ
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
//   {size ?  <Stack  direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
// <Stack>
//          {dataList.map((item) => (
//         <CardSum key={item.id} {...item} />
//       ))}
// </Stack>

//     <Stack   justifyContent={"space-between"} width={"330px"} height={"259px"} bgcolor={ "#f7f7f7"} pt={"20px"}>
// <Stack pl={"24px"} gap={"12px"}>
// <Typography>В корзине</Typography>
// <Typography>Товаров: {dataCount}</Typography>
// <Typography color="red">Введите промокод</Typography>
// <Typography mt={"20px"}>price</Typography>
// </Stack>
// <Button style={{marginBottom:"1px"}} variant="contained">Оформить заказ</Button>
//     </Stack>

//      </Stack> :  <Stack  direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
// <Stack>
//          {dataList.map((item) => (
//         <CardSum flexWrap={"wrap"} key={item.id} {...item} />
//       ))}
// </Stack>

//     <Stack   justifyContent={"space-between"} width={"730px"} height={"259px"} my={"50px"} bgcolor={ "#f7f7f7"} pt={"20px"}>
// <Stack pl={"24px"} gap={"12px"}>
// <Typography>В корзине</Typography>
// <Typography>Товаров: {dataCount}</Typography>
// <Typography color="red">Введите промокод</Typography>
// <Typography mt={"20px"}>price</Typography>
// </Stack>
// <Button style={{marginBottom:"1px"}} variant="contained">Оформить заказ</Button>
//     </Stack>

//      </Stack> }

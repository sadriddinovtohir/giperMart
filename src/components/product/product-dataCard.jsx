import {
  Box,
  Button,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Like_icons from "../../assets/icon/like_icons";
import { Text } from "../../config/ui/style";
import { useDispatch } from "react-redux";
import { addData } from "../../config/store/reduser/productReduser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import nutfications from '../../assets/notfication/nutfications.mp3'
import { playSound } from "../notfication/not";

export default function ProductDataCard({ product }) {
  const nav = useNavigate();
  const dispatch = useDispatch();
   
  const productItem = (product) => {
     const newNumber = Number(product.price.split(" ").join(""))
         dispatch(addData({ ...product, price:newNumber }));
    nav("/");
    toast.success("✅ Siz ma'lumotni sotib oldingiz!");
    playSound(nutfications)
  };

  const size = useMediaQuery("(min-width:1072px)");
  return (
    <div>
      <Stack>
        <Typography variant="h3" fontSize={"24px"} fontWeight={600}>
          {product.title}
        </Typography>
        <Stack py={"20px"} width={"100%"} borderBottom={"1px solid #cfcfcf"}>
          <Stack direction={"row"} gap={"15px"}>
            <Rating name="half-rating" defaultValue={5} precision={0.5} />
            <Stack direction={"row"} gap={"10px"}>
              <Like_icons />
              <Typography>В избранное</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          my={"20px"}
          direction={"row"}
          width={"100%"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {size ? (
            <>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
              >
                <img
                  style={{
                    maxWidth: "435px",
                    height: "340px",
                    paddingLeft: "70px",
                    paddingRight: "70px",
                  }}
                  src={product.img}
                  alt="img"
                />
                <Stack>
                  {product.rame ? (
                    <>
                      <Typography variant="h6" fontWeight={600}>
                        Объем памяти
                      </Typography>
                      <Box
                        px={"12px"}
                        py={"9px"}
                        border={"3px solid red"}
                        mb={"20px"}
                        maxWidth={"116px"}
                        textAlign={"center"}
                      >
                        {product.rame}
                      </Box>{" "}
                    </>
                  ) : (
                    ""
                  )}

                  <Typography variant="h6" fontWeight={600} mb={"16px"}>
                    Характеристики
                  </Typography>
                  <Stack
                    direction={"row"}
                    gap={"10px"}
                    alignItems={"center"}
                    fontSize={"16px"}
                  >
                    {" "}
                    {product.color ? (
                      <>
                        {" "}
                        <Text>Цвет:</Text>{" "}
                        <Typography>{product.color}</Typography>
                      </>
                    ) : (
                      ""
                    )}
                  </Stack>
                  <Stack
                    direction={"row"}
                    gap={"10px"}
                    alignItems={"center"}
                    fontSize={"16px"}
                  >
                    {" "}
                    {product.brand ? (
                      <>
                        {" "}
                        <Text>brand:</Text>{" "}
                        <Typography>{product.brand}</Typography>{" "}
                      </>
                    ) : (
                      ""
                    )}
                  </Stack>
                  <Stack
                    direction={"row"}
                    gap={"10px"}
                    alignItems={"center"}
                    fontSize={"16px"}
                  >
                    {" "}
                    {product.rame ? (
                      <>
                        {" "}
                        <Text>оперативная память:</Text>{" "}
                        <Typography>{product.rame} </Typography>{" "}
                      </>
                    ) : (
                      ""
                    )}
                  </Stack>
                  <Stack
                    direction={"row"}
                    gap={"10px"}
                    alignItems={"center"}
                    fontSize={"16px"}
                  >
                    <Typography color="red">Все характеристики</Typography>{" "}
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                padding={"20px"}
                width={"350px"}
                maxHeight={"120px"}
                border={"1px solid #c4c4c4"}
              >
                <Typography variant="h4">{product.price} Сум</Typography>
                <Button
                  onClick={() => productItem(product)}
                  variant="contained"
                  style={{ width: "100%" }}
                >
                  В корзину
                </Button>
              </Stack>
            </>
          ) : (
            <>
              <Stack direction={"row"} ml={"auto"} mr={"auto"}>
                <img
                  style={{
                    maxWidth: "370px",
                    height: "auto",
                    paddingRight: "50px",
                  }}
                  src={product.img}
                  alt="img"
                />
              </Stack>
              <Stack ml={"30px"}>
                <Typography variant="h6" fontWeight={600}>
                  Объем памяти
                </Typography>
                <Box
                  px={"12px"}
                  py={"9px"}
                  border={"3px solid red"}
                  mb={"20px"}
                  maxWidth={"106px"}
                  textAlign={"center"}
                >
                  {product.rame}
                </Box>

                <Typography variant="h6" fontWeight={600} mb={"16px"}>
                  Характеристики
                </Typography>
                <Stack
                  direction={"row"}
                  gap={"10px"}
                  alignItems={"center"}
                  fontSize={"16px"}
                >
                  {" "}
                  <Text>Цвет:</Text> <Typography>{product.color}</Typography>{" "}
                </Stack>
                <Stack
                  direction={"row"}
                  gap={"10px"}
                  alignItems={"center"}
                  fontSize={"16px"}
                >
                  {" "}
                  <Text>brand:</Text> <Typography>{product.brand}</Typography>{" "}
                </Stack>
                <Stack
                  direction={"row"}
                  gap={"10px"}
                  alignItems={"center"}
                  fontSize={"16px"}
                >
                  {" "}
                  <Text>оперативная память:</Text>{" "}
                  <Typography>{product.rame} </Typography>{" "}
                </Stack>
                <Stack
                  direction={"row"}
                  gap={"10px"}
                  alignItems={"center"}
                  fontSize={"16px"}
                >
                  <Typography color="red">Все характеристики</Typography>{" "}
                </Stack>
              </Stack>
              <Stack
                padding={"17px"}
                mt={"30px"}
                py={"10px"}
                width={"100%"}
                border={"1px solid #c4c4c4"}
              >
                <Typography textAlign={"center"} variant="h4">
                  {product.price} Сум
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => productItem(product)}
                >
                  В корзину
                </Button>
              </Stack>
            </>
          )}
        </Stack>
      </Stack>
    </div>
  );
}

import {
  Badge,
  Box,
  Button,
  Container,
  Dialog,
  Drawer,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { COLOR } from "../../config/ui/color";
import Tel_icons from "../../assets/icon/tel_icons";
import header_svg from "../../assets/svg/header.svg";
import Menu_icons from "../../assets/icon/menu_icons";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/form/form";
import User_icons from "../../assets/icon/user_icons";
import Like_icons from "../../assets/icon/like_icons";
import Card_icons from "../../assets/icon/card_icons";
import React from "react";
import menu_icons_dr from "../../assets/svg/menu.svg";
import { useSelector } from "react-redux";
import useCatalogGet from "../../page/home/queriy/useCatalogGet";
import Catalog from "./components/catalog";
export default function Header() {
  const [open, setopen] = React.useState(false);
  const sizedrower = useMediaQuery("(max-width:1229px)");
  const sizedrowers = useMediaQuery("(max-width:1021px)");
  const inputs = useMediaQuery("(min-width:695px)");
  const form = useMediaQuery("(min-width:540px)");
  const nav = useNavigate();
  const { dataCount } = useSelector((state) => state.productReduser);
  const toggleDrawer = (data) => {
    setopen(data);
  };
  const { data, isLoading, isError, error } = useCatalogGet();
  const [modal, setmodal] = React.useState(false);
  const btn_item = () => {
    setmodal(true);
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <header>
      <Dialog maxWidth="100%" open={modal} onClose={() => setmodal(false)}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          padding={"30px"}
          bgcolor={"white"}
          width={"900px"}
          gap={"20px"}
        >
          {isLoading ? (
            <h1>loading</h1>
          ) : (
            <>
              {data?.map((item) => (
                <Catalog
                  click={setmodal}
                  key={item.id}
                  img={item.img}
                  id={item.id}
                  text={item.text}
                  name={item.name}
                />
              ))}
            </>
          )}
        </Stack>
      </Dialog>
      {inputs ? (
        <div className="header_top">
          <Container>
            <Stack
              py={"8px"}
              gap={"24px"}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"end"}
            >
              <Typography
                fontSize={"16px"}
                color={COLOR["--m3-sys-light-on-background"]}
              >
                Доставка и оплата
              </Typography>
              <Typography
                fontSize={"16px"}
                color={COLOR["--m3-sys-light-on-background"]}
              >
                Пункты выдачи
              </Typography>
              <Typography
                fontSize={"16px"}
                color={COLOR["--m3-sys-light-on-background"]}
              >
                Поддержка
              </Typography>
              <Typography
                fontSize={"16px"}
                color={COLOR["--m3-sys-light-on-background"]}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: COLOR["--m3-sys-light-on-background"],
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                  href="tel:998 90 253 77 53"
                >
                  <Tel_icons />
                  +998 90 253 77 53
                </a>
              </Typography>
            </Stack>
          </Container>
        </div>
      ) : null}

      <div className="header">
        <Container>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            py={"17px"}
          >
            <Link to={"/"}>
              <img
                style={{ maxWidth: "130px" }}
                src={header_svg}
                alt="header_img"
              />
            </Link>
            {inputs ? (
              <Stack>
                <Button
                  onClick={btn_item}
                  sx={{ maxWidth: "150px" }}
                  variant="contained"
                >
                  <Stack direction={"row"} gap={"12px"} alignItems={"center"}>
                    <Menu_icons />
                    Каталог
                  </Stack>
                </Button>
              </Stack>
            ) : null}

            {form ? <Form page={"header"} /> : null}

            {!sizedrowers ? (
              <>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to={"/profile"}
                >
                  <Stack alignItems={"center"}>
                    <User_icons />
                    <Typography>Войти</Typography>
                  </Stack>
                </Link>
                <Stack alignItems={"center"}>
                  <Like_icons />
                  <Typography color="#000">Избранное</Typography>
                </Stack>
              </>
            ) : (
              ""
            )}
            {!sizedrower ? (
              <Button>
                <Stack onClick={() => nav("/market")} alignItems={"center"}>
                  <Badge
                    color="secondary"
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "red",
                        color: "white",
                      },
                    }}
                    badgeContent={dataCount}
                    showZero
                  >
                    <Card_icons />
                  </Badge>
                  <Typography color="black">Корзина</Typography>
                </Stack>
              </Button>
            ) : null}

            {sizedrower ? (
              <>
                {" "}
                <Button onClick={() => toggleDrawer(true)}>
                  <img src={menu_icons_dr} alt="img" />
                </Button>{" "}
                <Drawer
                  anchor="right"
                  style={{ padding: "20px" }}
                  open={open}
                  onClose={() => toggleDrawer(false)}
                >
                  <Stack p={"30px"}>
                    {!inputs ? (
                      <div className="header_top">
                        <Container>
                          <Stack
                            py={"8px"}
                            gap={"24px"}
                            mb={"30px"}
                            alignItems={"center"}
                            justifyContent={"end"}
                          >
                            <Typography
                              fontSize={"16px"}
                              color={COLOR["--m3-sys-light-on-background"]}
                            >
                              Доставка и оплата
                            </Typography>
                            <Typography
                              fontSize={"16px"}
                              color={COLOR["--m3-sys-light-on-background"]}
                            >
                              Пункты выдачи
                            </Typography>
                            <Typography
                              fontSize={"16px"}
                              color={COLOR["--m3-sys-light-on-background"]}
                            >
                              Поддержка
                            </Typography>
                            <Typography
                              fontSize={"16px"}
                              color={COLOR["--m3-sys-light-on-background"]}
                            >
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: COLOR["--m3-sys-light-on-background"],
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                }}
                                href="tel:998 90 253 77 53"
                              >
                                <Tel_icons />
                                +998 90 253 77 53
                              </a>
                            </Typography>
                          </Stack>
                        </Container>
                      </div>
                    ) : null}
                    <Stack direction={"row"} gap={"30px"}>
                      {sizedrower ? (
                        <Button onClick={() => nav("/market")}>
                          <Stack alignItems={"center"}>
                            <Badge
                              color="secondary"
                              sx={{
                                "& .MuiBadge-badge": {
                                  backgroundColor: "red",
                                  color: "white",
                                },
                              }}
                              badgeContent={dataCount}
                              showZero
                            >
                              <Card_icons />
                            </Badge>
                            <Typography color="black">Корзина</Typography>
                          </Stack>
                        </Button>
                      ) : null}
                      {sizedrowers ? (
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          gap={"50px"}
                        >
                          <Link
                            style={{ color: "black", textDecoration: "none" }}
                            to={"/profile"}
                          >
                            <Stack alignItems={"center"}>
                              <User_icons />
                              <Typography>Войти</Typography>
                            </Stack>
                          </Link>
                          <Stack alignItems={"center"}>
                            <Like_icons />
                            <Typography>Избранное</Typography>
                          </Stack>
                        </Stack>
                      ) : null}
                    </Stack>
                    {!inputs ? (
                      <Button
                        sx={{ maxWidth: "150px" }}
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginTop: "20px",
                        }}
                        variant="contained"
                      >
                        <Stack
                          direction={"row"}
                          gap={"12px"}
                          alignItems={"center"}
                        >
                          <Menu_icons />
                          Каталог
                        </Stack>
                      </Button>
                    ) : null}
                  </Stack>
                </Drawer>
              </>
            ) : (
              ""
            )}
          </Stack>
        </Container>
      </div>
    </header>
  );
}

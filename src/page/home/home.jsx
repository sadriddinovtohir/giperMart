import { Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import SliceSlider from "./components/slice-slider";
import HomeCotelog from "./components/home-cotelog";
import {Smart} from "./components/smart";
import Discount from "./components/discount";
import useGetDiscount from "./queriy/useGetDiscount";
import usegetmodel from "./queriy/usegetmodel";
import Brands from "../../components/brands/brands";

export default function Home() {
  const { data, isLoading, isError, error } = useGetDiscount();
  const { data:dattta, isLoading:lod, isError:is, error:err } = usegetmodel();
 const size = useMediaQuery("(max-width:350px)")
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  if (is) {
    return <h1>{err.message}</h1>;
  }
  return (
    <main>
      <div className="hero">
       <SliceSlider/>
    </div>
    <div className="cotolog">
      <Container>
        <HomeCotelog/>
      </Container>
    </div>
      <div className="phone">
        <Container>
          <Smart  name={"Смартфоны и планшеты"} path={"phones"} />
        </Container>
      </div>
   {!size ?  <div style={{ backgroundColor:"#00cbfe", paddingTop:"16px", paddingBottom:"30px"}}>
        <Container>
          <Typography variant="h3" fontSize={"18px"} fontWeight={600} pb={"24px"}>Акции</Typography>
          {isLoading ? (
            <h1>loading</h1>
          ) : (
              <Grid container spacing={3} justifyContent={"center"}>
                {data.map((item) => (
                  <Discount key={item.id}img={item.img} />
                ))}
              </Grid>
            
          )}
        </Container>
      </div> : null}
       <div className="phone">
        <Container>
          <Smart  name={"Смартфоны и планшеты"} path={"phones"} />
        </Container>
      </div>
       <div className="notebook">
        <Container>
          <Smart  name={"Ноутбуки, планшеты и компьютеры"} path={"computers"} page={"computers"} />
        </Container>
      </div>
      <div>
        <Container>
          <Stack>
            
          <Typography mt={"30px"} mb={"20px"} color="black">
            Популярные бренды
          </Typography>
          <Stack direction={"row"} py={"30px"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
            {dattta?.map((item)=> <Brands key={item.id} img={item.img}/>)}
          </Stack>
          </Stack>
        </Container>
      </div>
    </main>
  );
}

import { Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import SliceSlider from "./components/slice-slider";
import HomeCotelog from "./components/home-cotelog";
import {Smart} from "./components/smart";
import Discount from "./components/discount";
import useGetDiscount from "./queriy/useGetDiscount";

export default function Home() {
  const { data, isLoading, isError, error } = useGetDiscount();
 const size = useMediaQuery("(max-width:350px)")
  if (isError) {
    return <h1>{error.message}</h1>;
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
          <Smart  name={"Ноутбуки, планшеты и компьютеры"} path={"computers"} />
        </Container>
      </div>
    </main>
  );
}

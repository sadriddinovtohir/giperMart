import { Container } from "@mui/material";
import SliceSlider from "./components/slice-slider";
import HomeCotelog from "./components/home-cotelog";

export default function Home() {
  
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
    </main>
  )
}

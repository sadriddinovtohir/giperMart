import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./page/home/home";
import { loadState } from "./config/store";
import Login from "./page/public/login/login";
import Merket from "./page/merket";
import Campaign from "./page/campaign";
import SingleProduct from "./components/single-product/singleProduct";

function App() {
 const token = loadState("user")
  return (
    <>
   {token ?  <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="market" element={<Merket/>}/>
      <Route path="Campaign" element={<Campaign/>}/>
      <Route path="SingleProduct/:id" element={<SingleProduct/>}/>
      </Route>
    </Routes> : <Login/>}
    </>
  );
}
export default App;

import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./page/home/home";
import Login from "./page/public/login/login";
import Merket from "./page/merket";
import Campaign from "./page/campaign";
import SingleProduct from "./components/single-product/singleProduct";

import CotalogSinglePage from "./components/cotalogPage/cotalog-single-page";
import Profile from "./page/profile/home/profile";
import ProfileLayout from "./layout/profile-layout/profileLayout";
import UserData from "./page/profile/userData";
import Massage from "./page/profile/massage";
import LikeData from "./page/profile/like-data";
import Profile_location from "./page/profile/profile_location";
import UserCard from "./page/profile/userCard";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="market" element={<Merket />} />
          <Route path="Campaign" element={<Campaign />} />
          <Route path="singleproduct/:id/:path" element={<SingleProduct />} />
          <Route
            path="cotalogsinglepage/:path"
            element={<CotalogSinglePage />}
          />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="userdata" element={<UserData />} />
            <Route path="usercard" element={<UserCard />} />
            <Route path="profile_location" element={<Profile_location />} />
            <Route path="likedata" element={<LikeData />} />
            <Route path="massage" element={<Massage />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
export default App;

import React from "react";
import useGetDiscount from "../queriy/useGetDiscount";
import { Grid, Stack, useMediaQuery } from "@mui/material";

export default function Discount({img}) {
   
  return <>
  <div>
  
  <img style={{maxWidth:"350px", maxHeight:"200px"}} src={img} alt="img" /> 
  </div>
  </>;
}

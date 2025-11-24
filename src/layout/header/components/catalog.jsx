import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Catalog({img, name , text, click }) {
  return (
   <Stack style={{overflowX:"hidden"}}  p={"10px"} alignItems={"center"}>
    <Link onClick={()=>click(false)} to={`/cotalogsinglepage/${name}`}>
        <Stack  direction={"row"}  gap={"30px"} bgcolor={"#f6f6f6"} mb={"20px"} alignItems={"center"} width={"240px"}  >
        <img style={{maxWidth:"96px"}} src={img} alt="img" />
      <Typography>{name}</Typography>
      </Stack>
    </Link>
      <Typography>
        {text}
      </Typography>
   </Stack>
  )
}

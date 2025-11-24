import React from 'react'
  import message_no from "../../assets/img/message_no.png"
import { Stack } from '@mui/material'
export default function Massage() {
  return (
    <Stack direction={"row"} width={"600px"} justifyContent={"center"} alignItems={"center"}>
      <img src={message_no} alt="img" />
    </Stack>
  )
}

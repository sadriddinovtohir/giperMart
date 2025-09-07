import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Card_icons from '../../assets/icon/card_icons'
import Like_icons from '../../assets/icon/like_icons'

export default function ProductPhone({item,path}) {
  return (
    <div>
      
      <Stack
                  width={"234px"}
                  height={"300px"}
                  justifyContent={"space-between"}
                  style={{ paddingLeft: "26px", paddingRight: "26px" }}
                  key={item.id}
                >
                  <Stack>
                    <Stack direction={"row"} justifyContent={"center"} gap={"5px"}>
                      <img
                        style={{ maxWidth: "130px" }}
                        src={item.img}
                        alt="img"
                      />
                      <Like_icons />
                    </Stack>
                   {path == "phones"? <Typography variant="h2" >{item.title}</Typography> :<Typography variant="h6" fontSize={"16px"} >{item.title}</Typography>} 
                  </Stack>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h3" fontSize={"13px"}   fontWeight={600}>
                      {item.price} CYM
                    </Typography>
                    <Button style={{ backgroundColor: "yellow", marginRight:"7px" }} variant="btn">
                      <Card_icons />
                    </Button>
                  </Stack>
                </Stack>
    </div>
  )
}

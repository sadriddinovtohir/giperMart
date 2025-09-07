import { Button, Container, Stack, Typography } from '@mui/material'

import { loadState } from '../config/store'
import CardSum from './components/card-sum'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
export default function Merket() {
  const { dataCount } = useSelector((state) => state.productReduser);
// if(dataCount == 0){
//     return <Container> <Typography variant='h6' textAlign={"center"} my={"50px"} >siz hali maxsulod xarid qilmadingiz</Typography>
//     <Stack direction={"row"} justifyContent={"center"} pb={"30px"}>
//       <Link to={"/"}>
//       <Button variant='contained' >bosh sahifaqa qaytish</Button></Link>
//     </Stack>
//     </Container>
//   }
  const data = loadState("product")
  const nav = useNavigate()
if(dataCount == 0){
  return <Link to={"/"}></Link>
    
}
  return (
  <Container>
      <Stack direction={"row"} justifyContent={"space-between"}>
<Stack>
       {dataCount ?  <>{data?.dataList.map((item, index)=> <CardSum key={index} {...item}/> )}</> : "malumotlar yoq"}
</Stack>
    <Stack
        width={"330px"}
        maxHeight={"259px"}
        bgcolor={"#eaeaea"}
        pt={"24px"}
        pb={0}
      >
<Stack pl={"25px"}>
          <Typography variant='h5' mb={"15px"} fontSize={"24px"} fontWeight={400}>В корзине</Typography>
        <Typography variant='h6'>Товаров:{dataCount}</Typography>
        <Typography variant='h6' mt={"17px"} color='red'>Введите промокод</Typography>
        <Typography variant='h6' mb={"20px"}>allPrice</Typography>
</Stack>
<Button style={{height:"100vh"}} variant="contained">Оформить заказ</Button>
      </Stack>
    </Stack>
  </Container>
  )
}


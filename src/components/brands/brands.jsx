import { Stack } from '@mui/material'

export default function Brands({img}) {
  return (
    <Stack style={{width:"170px", height:"auto"}}>
   
        <img style={{width:"150px", height:"auto"}}  src={img} alt="img" />
    </Stack>
  )
}

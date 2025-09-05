import { useQuery } from '@tanstack/react-query'
import { request } from '../../../config/data/data'

export default function useGetDiscount() {
  return useQuery({
    queryKey:["count"],
    queryFn:()=> request.get("/ads").then((res)=> res.data)
  })
}

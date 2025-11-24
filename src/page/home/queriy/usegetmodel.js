import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../config/data/data'

export default function usegetmodel() {
  return useQuery({
    queryKey:["model"],
    queryFn:()=> request.get("/brand").then((res)=>res.data)
   })
}

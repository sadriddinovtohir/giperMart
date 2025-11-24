import { useQuery } from "@tanstack/react-query"
import { request } from "../../../config/data/data"

export const  userAllSearch = ()=>{
    return useQuery({
        queryKey:["search"],
        queryFn:()=> request.gat("/all").then((res)=>res.data)
    })
}
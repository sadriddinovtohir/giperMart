import { Container, Stack } from "@mui/material"
import { userAllSearch } from "../queriy/userAllSearch";
import { useDebounce } from "@uidotdev/usehooks";

export const SearchData = ()=>{
    const {data, isLoading, isError, error} = userAllSearch()
    if(isError){
        return <h1>{error.message}</h1>
    }
    return(
        <Container>
{isLoading ? <h1>Loading</h1> : <Stack>
        {data.map((item)=> (
            <div key={item.id}>
                <h2>{item.name}</h2>
            </div>
        ))}
    </Stack>}
        </Container>
    )
}
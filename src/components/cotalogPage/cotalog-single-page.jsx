import React from "react";
import useGetPhone from "../../page/home/queriy/useGetPhone";
import { useParams } from "react-router-dom";
import { Container, Grid, Stack } from "@mui/material";
import CotalodDetaile from "./cotalod-Detaile";

export default function CotalogSinglePage() {
  const { path } = useParams();
  const { data, isError, isLoading, error } = useGetPhone(path);

  console.log(path);

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <Container>
      {isLoading ? (
        <h1>loading..</h1>
      ) : (
        <>
          <Grid
            py={"40px"}
            width={"100%"}
            container
            direction={"row"}
            justifyContent={"center"}
            spacing={4}
          >
            {data?.map((item) => (
              <Grid key={item.id} item sx={{ sm: 12, md: 6, lg: 4, xl: 3 }}>
                <CotalodDetaile {...item} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}

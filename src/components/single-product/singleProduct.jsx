import React from "react";
import { useParams } from "react-router-dom";
import useGetPhone from "../../page/home/queriy/useGetPhone";
import { Container } from "@mui/material";
import ProductDataCard from "../product/product-dataCard";

export default function SingleProduct() {
  const { id, path } = useParams();
  console.log(id);
  
  const { data, isError, error, isLoading } = useGetPhone(path);
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const product = data?.find((item) => String(item.id) === id);

  return (
    <Container>
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        <div>
          {product ? (
            <ProductDataCard product={product}  />
          ) : (
            <h1>maxsulot topilmadi</h1>
          )}
        </div>
      )}
    </Container>
  );
}

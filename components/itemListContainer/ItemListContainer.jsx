import styles from "./styles.css";
import ItemList from "./itemList/ItemList.jsx";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const ItemListContainer = ({ products }) => {
  console.log(products);
  return (
    <Container maxWidth="md">
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {products.map((product) => (
            <ItemList key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default ItemListContainer;

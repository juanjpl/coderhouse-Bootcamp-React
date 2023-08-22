import styles from './styles.css'

import ItemDetail from "./itemDetailContainer/itemDetail/itemDetail.jsx";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const ItemDetailContainer = ({detail})=>{


    return(
        <Container maxWidth="md" className="item-list-container">
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
          
              <ItemDetail key={product.id} detail={detail} />
            
          </Grid>
        </Container>
      </Container>
    )
}

export default ItemDetailContainer;
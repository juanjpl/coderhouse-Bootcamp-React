import styles from './styles.css'

import ItemList from '../itemListContainer/itemList/ItemList.jsx'
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


const ItemCategoryContainer =({detail})=>{

 console.log(detail)
    return(
        <Container maxWidth="md" className="item-list-container">
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
       
{
    detail.map((product,index)=>( 
        <ItemList key={product.id} product={product} />
       
    ))
}
             
            
          </Grid>
        </Container>
      </Container>
    )
}

export default ItemCategoryContainer;
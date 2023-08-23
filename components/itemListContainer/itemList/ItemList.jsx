import styles from "./styles.css";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {Link} from 'react-router-dom';



const ItemList = ({ product }) => {
  return (

    <Grid item key={product.id} xs={12} sm={6} md={4} className="margen">
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "120%",
          }}
          image={`../../../src/assets/images/${product.id}.jpg`}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.producto}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {product.category}
          </Typography>
       
        </CardContent>
        <CardActions>
          <Button size="small">{product.price} </Button>
          <Link to={`/detail/${product.id}`}>
          <Button size="small">Buy</Button>
          </Link>
          
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ItemList;

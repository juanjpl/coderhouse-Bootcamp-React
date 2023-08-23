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

const ItemDetail = ({ detail }) => {

  return (

    <Grid item key={detail.id} xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
   
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "120%",
          }}
          image={`../../../src/assets/images/${detail[0].id}.jpg`}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {detail[0].producto}
          </Typography>
          <Typography>{detail[0].descripcion}</Typography>
          <Typography>Categoria: {detail[0].category}</Typography>
          <Typography>Precio: {detail[0].price}</Typography>
        </CardContent>
        <CardActions>
         
          <Link to={`/detail/home`}>
          <Button size="small">Agregar al carrito</Button>
          </Link>
          
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ItemDetail;
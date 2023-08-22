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
            pt: "56.25%",
          }}
          image={`../../../src/assets/images/${detail.id}.jpg`}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {detail.producto}
          </Typography>
          <Typography>{detail.descripcion}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{detail.price} </Button>
          <Link to={`/detail/home`}>
          <Button size="small">Shop</Button>
          </Link>
          
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ItemDetail;
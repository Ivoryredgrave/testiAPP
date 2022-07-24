import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import "../hojas-de-estilo/Testimonio.css";

export default function Testimonio(props) {
  return (
    <div className="contenedor-principal">
      <Card variant="outlined" className="contenedor-testimonio">
        <div className="centrar-texto">
          <CardHeader
            avatar={
              <Tooltip title={"Testimonio de " + props.nombre} arrow>
                <Avatar aria-label="recipe">
                  <ReviewsIcon />
                </Avatar>
              </Tooltip>
            }
            title={
              <Typography variant="h5" gutterBottom component="div">
                <strong>{props.nombre}</strong> en <u>{props.pais}</u>
              </Typography>
            }
            subheader={
              <Typography variant="subtitle1" gutterBottom component="div">
                {props.subtitulo}
              </Typography>
            }
          />
        </div>
        <CardMedia
          component="img"
          height="512"
          image={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
          alt={props.alt}
        />
        <div className="contenedor-texto-testimonio">
          <CardContent>
            <Typography
              className="texto-testimonio"
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              "{props.testimonio}"
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

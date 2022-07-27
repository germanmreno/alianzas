import * as React from "react";
import Typography from "@mui/material/Typography";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Carga de Archivos
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Carta al Presidente" />
          </ListItemButton>
          <IconButton aria-label="Adjuntar" color="primary">
            <AttachFileIcon />
          </IconButton>
          <CheckBoxOutlineBlankIcon />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Copia de Cédula" />
          </ListItemButton>
          <IconButton aria-label="Adjuntar" color="primary">
            <AttachFileIcon />
          </IconButton>
          <CheckBoxOutlineBlankIcon />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Curriculum de los Accionistas" />
          </ListItemButton>
          <IconButton aria-label="Adjuntar" color="primary">
            <AttachFileIcon />
          </IconButton>
          <CheckBoxOutlineBlankIcon />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Acta Constitutiva" />
          </ListItemButton>
          <IconButton aria-label="Adjuntar" color="primary">
            <AttachFileIcon />
          </IconButton>
          <CheckBoxOutlineBlankIcon />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Declaración Jurada de Origen de Recursos" />
          </ListItemButton>
          <IconButton aria-label="Adjuntar" color="primary">
            <AttachFileIcon />
          </IconButton>
          <CheckBoxOutlineBlankIcon />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Certificación de Ingresos" />
          </ListItemButton>
          <IconButton aria-label="Adjuntar" color="primary">
            <AttachFileIcon />
          </IconButton>
          <CheckBoxOutlineBlankIcon />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Últimas 3 Declaraciones del I.S.L.R." />
          </ListItemButton>
          <IconButton aria-label="Adjuntar" color="primary">
            <AttachFileIcon />
          </IconButton>
          <CheckBoxOutlineBlankIcon />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Últimos 3 Estados Financieros" />
          </ListItemButton>
          <IconButton aria-label="Adjuntar" color="primary">
            <AttachFileIcon />
          </IconButton>
          <CheckBoxOutlineBlankIcon />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Resumen de Proyecto Minero" />
          </ListItemButton>
          <IconButton aria-label="Adjuntar" color="primary">
            <AttachFileIcon />
          </IconButton>
          <CheckBoxOutlineBlankIcon />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

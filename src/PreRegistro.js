import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Corporación Venezolana de Minería | {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#00591d",
    },
    info: {
      main: "#00591d",
    },
    success: {
      main: "#00591d",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: "#00591d",
    color: "white"
  }));

export default function PreRegistro() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
      <AppBar
        position="absolute"
        color="primary"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="white" noWrap>
            Corporación Venezolana de Minería
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <HowToRegIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro de Alianza
          </Typography>
          <Box
            sx={{ mt: 1 }}
          >
            <Typography sx={{mt: 1, textAlign: "justify"}}>
            Está a punto de iniciar un proceso de Registro de Alianza con la Corporación Venezolana de Minería. Recuerde que debe poseer los siguientes documentos a mano para poder realizar el proceso, de resto no podrá avanzar con el mismo. A continuación una lista con los recaudos necesarios:
          </Typography>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                    <Item>
                        <Typography><Avatar sx={{ bgcolor: "secondary.main", display: "inline" }}><CheckCircleIcon /></Avatar> Información de la Empresa.</Typography>
                        <Typography><Avatar sx={{ bgcolor: "secondary.main", display: "inline" }}><CheckCircleIcon /></Avatar> Teléfono y Direcciones de los posibles aliados.</Typography>
                        <Typography><Avatar sx={{ bgcolor: "secondary.main", display: "inline" }}><CheckCircleIcon /></Avatar> Item 3.</Typography>
                        <Typography><Avatar sx={{ bgcolor: "secondary.main", display: "inline" }}><CheckCircleIcon /></Avatar> Item 4.</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item><Typography><Avatar sx={{ bgcolor: "secondary.main", display: "inline" }}><CheckCircleIcon /></Avatar> Curriculum Vitae de los Aliados.</Typography>
                    <Typography><Avatar sx={{ bgcolor: "secondary.main", display: "inline" }}><CheckCircleIcon /></Avatar> Copia de Cédulas a Color.</Typography>
                    <Typography><Avatar sx={{ bgcolor: "secondary.main", display: "inline" }}><CheckCircleIcon /></Avatar> Declaración Jurada de Ingreso.</Typography>
                    <Typography><Avatar sx={{ bgcolor: "secondary.main", display: "inline" }}><CheckCircleIcon /></Avatar> Item 4.</Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
        <Box>
        <Link to="/">
        <Button variant="contained"
              sx={{ mt: 3, mb: 2 , mr: 4}}
              color="secondary">Salir</Button>
        </Link>
        <Link to="/registro">
        <Button variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary">Ir al Registro</Button>
        </Link>
        </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

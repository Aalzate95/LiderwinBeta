// import useFetch from "./useFetch";
import Contacto from "./Contacto";
import Equipo from "./Equipo";
import Servicio from "./Servicio";
import Catalogo from "./Catalogo";
import Inicio from "./Inicio";
import Login from "./Login";
import Cover from "./Cover";
import Dashboard from "./Dashboard";
import Reporte from "./Reporte";
import Perfil from "./Perfil";
import Registro from "./Registro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
          />
        </head>
        <Switch>
          <Route exact path="/">
            <Cover />
          </Route>
          <Route path="/">
            <Switch>
              <Route path="/contacto">
                <Contacto />
              </Route>
              <Route path="/catalogo">
                <Catalogo />
              </Route>
              <Route path="/servicios">
                <Servicio />
              </Route>
              <Route path="/equipo">
                <Equipo />
              </Route>
              <Route path="/inicio">
                <Inicio />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/reporte">
                <Reporte />
              </Route>
              <Route path="/registro">
                <Registro />
              </Route>
              <Route path="/perfil">
                <Perfil />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

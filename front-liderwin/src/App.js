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
import ReportePdf from "./views/reportePdf/ReportePdf";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect, } from "react-router-dom";

function PrivateRoute({ component: Component, token, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default function App() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("liderwin-token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());

  const userLogin = (tok) => {
    sessionStorage.setItem("liderwin-token", JSON.stringify(tok));
    setToken(tok.token);
  };



  return (
    <Router>
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
                <Login 
                  userLogin = {userLogin}
                />
              </Route>

              <PrivateRoute 
                path="/dashboard"
                token={token}
                component={() => (<Dashboard />)}
              />
              

              <PrivateRoute 
              path="/reporte/inicio"
              token={token}
              component={() => (<Reporte />)}
              />
                


              <PrivateRoute 
              path="/reporte/file/:id"
              token={token}
              component={() => (<ReportePdf />)}/>
                

              <Route path="/registro">
                <Registro />
              </Route>
              <Route path="/perfil">
                <Perfil />
              </Route>
            </Switch>
          </Route>
        </Switch>
    </Router>
  );
}

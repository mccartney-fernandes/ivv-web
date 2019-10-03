import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import NossosLideres from "./components/pages/NossosLideres";
import HomeMissoes from "./components/SecretariaMissoes/pages/HomeMissoes";
import Livraria from "./components/Livraria";
import Noticias from "./components/pages/Noticias";
import Noticia from "./components/pages/Noticia";
import Historia from "./components/pages/Historia";
import NoQueCremos from "./components/pages/NoQueCremos";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/nossos-lideres" component={NossosLideres} />
      <Route exact path="/noticias" component={Noticias} />
      <Route path="/noticia/:id" component={Noticia} />
      <Route exact path="/historia" component={Historia} />
      <Route exact path="/no-que-cremos" component={NoQueCremos} />
      <Route exact path="/missoes" component={HomeMissoes} />
      <Route exact path="/livraria" component={Livraria} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

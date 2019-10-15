import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NossosLideres from "./pages/NossosLideres";
import HomeMissoes from "./components/SecretariaMissoes/pages/HomeMissoes";
import Livraria from "./components/Livraria";
import Noticias from "./pages/Noticias";
import Noticia from "./pages/Noticia";
import Historia from "./pages/Historia";
import NoQueCremos from "./pages/NoQueCremos";
import Dominical from "./pages/Dominical";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/nossos-lideres" component={NossosLideres} />
      <Route exact path="/noticias" component={Noticias} />
      <Route path="/noticia/:id" component={Noticia} />
      <Route path="/dominical" component={Dominical} />
      <Route path="/historia" component={Historia} />
      <Route path="/no-que-cremos" component={NoQueCremos} />
      <Route path="/missoes" component={HomeMissoes} />
      <Route path="/livraria" component={Livraria} />
      <Route
        path="/atividades"
        component={() => <h1>Pagina Atividades Em Contrução</h1>}
      />
      <Route
        path="/contato"
        component={() => <h1>Pagina Contato Em Contrução</h1>}
      />
      <Route
        path="/departamentos"
        component={() => <h1>Pagina departamentos Em Contrução</h1>}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;

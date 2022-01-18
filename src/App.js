import { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/bootstrap/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/globals.css"

import Home from "./pages/index";
import NotFound from "./pages/404.jsx";
import Admin from "./pages/admin/[section]";
import AdminAgency from "./pages/admin/agency/[action]";
import AdminScpi from "./pages/admin/scpi/[action]";
import Login from "./pages/login";
import Scpi from "./pages/scpi/index";
import ScpiItem from "./pages/scpi/[slug].js";
import Agency from "./pages/agency/index";
import AgencyItem from "./pages/agency/[slug].js";
 import session from "./plugins/session";


function App() {
  const [isConnect, setUsConnect] = useState(false);
  
  useEffect(() => {
     session(setUsConnect)
}, []);

  return (
    <Router>
      <Switch>
         
            <Route exact path="/login" component={isConnect? Admin : Login} /> 
            <Route exact path="/admin" component={isConnect? Admin : Login} /> 
            <Route exact path="/admin/scpi/edit/:slug" component={isConnect? AdminScpi : Login} />
            <Route exact path="/admin/agency/edit/:slug" component={isConnect? AdminAgency : Login} />
            <Route exact path="/admin/scpi/upload" component={isConnect? AdminScpi : Login} />
            <Route exact path="/admin/agency/upload" component={isConnect? AdminAgency : Login} />
            <Route exact path="/admin/:section" component={isConnect? Admin : Login} />

        <Route exact path="/"  component={Home} />
        <Route exact path="/404"  component={NotFound} />
        <Route exact path="/scpi"  component={Scpi} />
        <Route exact path="/scpi/:slug"  component={ScpiItem} />
        <Route exact path="/agency"  component={Agency} />
        <Route exact path="/agency/:slug"  component={AgencyItem} />
        <Route   path="/:404" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

/*
<Router>
  <Route path="/" exact component={Home} />
  <Route path="/404" component={NotFound} />
  <Route path="/scpi" component={Scpi} />
  <Route path="/scpi/:slug" component={ScpiItem} />
  <Route path="/agency" component={Agency} />
  <Route path="/agency/:slug" component={AgencyItem} />
</Router>

{!isConnect ? (
  <Router>
    <Route path="/login" component={Login} />
  </Router>
) : (
  <Router>
    <Route path="/admin" component={Admin} />
  </Router>
)}
 


        {!isConnect ? 
           <>
            <Route exact path="/admin"   component={Login} />
            <Route exact path="/admin/:section"   component={Login} />
            <Route exact path="/login"   component={Login} />
         
            </>
          : 
          <>
            <Route exact path="/login"   component={Admin} />
            <Route exact path="/admin"   component={Admin} />
            <Route path="/admin/:section"   component={Admin} />
          </>
         }








*/

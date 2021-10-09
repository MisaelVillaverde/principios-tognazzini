import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Integrantes from "./components/Integrantes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/integrantes">
          <Integrantes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

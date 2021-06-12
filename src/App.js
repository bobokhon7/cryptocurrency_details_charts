import CardData from "./Components/CardData";
import "./App.css";
import CoinRouteInfo from "./Components/CoinRouteInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <CardData />
          </Route>
          <Route path="/:id">
            <CoinRouteInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

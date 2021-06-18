import CardData from "./Components/CardData";
import "./App.css";
import CoinRouteInfo from "./Components/CoinRouteInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CryptoNavbar from "./Components/Navbar";
import Scroll from "./Components/Scroll";

function App() {
  return (
    <Router>
      <Scroll />
      <CryptoNavbar />
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
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import HotelServicesPage from "./pages/hotelServices/HotelServicesPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/nuestros-servicios" component={HotelServicesPage} />
        <Route path="/">
        <div>page</div>
        </Route>
      </Switch>
    </Router>
  );
}
export default Routes;
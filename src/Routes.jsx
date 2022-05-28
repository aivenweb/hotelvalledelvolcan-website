import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/home/footer/Footer";
import HomePage from "./pages/home/HomePage";
import HotelServicesPage from "./pages/hotelServices/HotelServicesPage";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/nuestros-servicios" component={HotelServicesPage} />
        <Route path="/">
          <div>page</div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;

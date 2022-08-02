import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/home/footer/Footer";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import HomePage from "./pages/home/HomePage";
import HotelServicesPage from "./pages/hotelServices/HotelServicesPage";
import ReservationPage from "./pages/reservation/ReservationPage";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/reservacion" component={ReservationPage} />  */}
        <Route path="/sobre-nosotros" component={AboutUsPage} />
        <Route path="/nuestros-servicios" component={HotelServicesPage} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;

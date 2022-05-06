import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users">
        <div>page</div>
        </Route>
        <Route path="/">
        <div>page</div>
        </Route>
      </Switch>
    </Router>
  );
}
export default Routes;
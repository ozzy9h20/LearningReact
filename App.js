import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import "./App.css";

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect exact from="/" to="/Movies" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
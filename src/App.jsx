import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
    </Switch>
  );
}

export default App;

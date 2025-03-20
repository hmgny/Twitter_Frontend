import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <Switch>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;

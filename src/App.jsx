import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/profile/:userId">
        <ProfilePage />
      </Route>
    </Switch>
  );
}

export default App;

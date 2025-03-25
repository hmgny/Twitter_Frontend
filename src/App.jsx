import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/user/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
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

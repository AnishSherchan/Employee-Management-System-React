import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/landing.js";
import Employees from "./pages/Employees";
import Login from "./Authentication/login/Login.js";
import Dashboard from "./pages/Dashboard.js";
import Signup from "./Authentication/signup/Signup.js";
import Page404 from "./pages/404.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route
          path="/Employee-Management-System-React/"
          exact
          component={Landing}
        />
        <Route
          path="/Employee-Management-System-React/login"
          component={Login}
        />
        <Route
          path="/Employee-Management-System-React/signup"
          component={Signup}
        />
        <Route
          path="/Employee-Management-System-React/dashboard"
          component={Dashboard}
        />
        <Route
          path="/Employee-Management-System-React/employee"
          component={Employees}
        />
        <Route path="*" component={Page404} />
        <Landing />
      </Switch>
    </Router>
  );
}

export default App;

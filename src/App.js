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
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/employee" component={Employees} />
        <Route path="*" component={Page404} />
        <Landing />
      </Switch>
    </Router>
  );
}

export default App;

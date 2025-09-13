import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClavoxLoadingScreen from "./pages/LoadingScreen";
import LoginScreen from "./pages/Auth/LoginScreen";
import OTPVerificationScreen from "./pages/Auth/OtpVerification";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/loading" component={ClavoxLoadingScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/verification" component={OTPVerificationScreen} />
      </Switch>
    </Router>
  );
}

export default App;

import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import AboutPage from "./Pages/AboutUs";
import Footer from "./components/Footer";
import DrawerAppBar from "./components/NewHeader";
import TradingPage from "./Pages/TradingPage";
import FaqPage from "./Pages/FAQ";
import AML from "./Pages/AML";
import TradingRules from "./Pages/TradingRules";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#fafbfc",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <DrawerAppBar />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/about" component={AboutPage}/>
        <Route path="/trade" component={TradingPage}/>
        <Route path="/faq" component={FaqPage}/>
        <Route path="/aml" component={AML}/>
        <Route path="/tradingrules" component={TradingRules}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

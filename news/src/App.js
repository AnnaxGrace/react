import logo from "./tek_logo.png";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Headlines from "./Views/Headlines";
import Sports from "./Views/Sports";
import Weather from "./Views/Weather";
import Politics from "./Views/Politics";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HashRouter basename="/">
        <NavBar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <div>
          <br />
          <p>Create a News Site</p>
          <p>Set up a Single Page Application (SPA) with react-router</p> */}
            <div>
              <Route exact path="/" component={Headlines} />
              <Route exact path="/Sports" component={Sports} />
              <Route exact path="/Weather" component={Weather} />
              <Route exact path="/Politics" component={Politics} />
            </div>
          </HashRouter>
          {/* <Headlines />
          <Sports />
          <Weather />
          <Politics /> */}
        {/* </div> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;

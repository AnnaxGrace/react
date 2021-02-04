import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./Components/NavBar";
import Headlines from "./Views/Headlines";
import Sports from "./Views/Sports";
import Weather from "./Views/Weather";
import Politics from "./Views/Politics";
import ArticleDetail from "./Views/ArticleDetail";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router basename="/">
        <NavBar />
            <div>
              <Route exact path="/" component={Headlines} />
              <Route exact path="/Sports" component={Sports} />
              <Route exact path="/Weather" component={Weather} />
              <Route exact path="/Politics" component={Politics} />
              <Route exact path="/ArticleDetail" component={ArticleDetail} />
            </div>
          </Router>
      </header>
      <Footer />
    </div>
  );
}

export default App;

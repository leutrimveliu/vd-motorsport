import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Contact from "../src/components/Contact/Contact";
import Home from "../src/components/Home/Home";
import Projects from "../src/components/Projects/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

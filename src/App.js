import Header from "../src/components/Header/Header";
import { Helmet } from "react-helmet";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Contact from "../src/components/Contact/Contact";
import Home from "../src/components/Home/Home";
import Projects from "../src/components/Projects/Projects";
import Services from "../src/components/Services/Services";
import About from "../src/components/About/About";
import Appointment from "../src/components/Appointment/Appointment";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <title>VD Motorsport</title>
          <meta
            name="description"
            content="This is the official website of VD Motorsport! You can see our work here!"
          />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
          {/* <Route path="/appointment" component={Appointment} /> */}
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

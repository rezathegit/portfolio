import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";

import Works from "./Components/Works/Works";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sections">
        <Intro />
       <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;

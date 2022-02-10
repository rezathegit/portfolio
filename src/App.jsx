import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";

import Works from "./Components/Works/Works";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import ContactMe from "./Components/ContactMe/ContactMe";

import "./App.scss";

import {useState } from "react";
import Menu from "./Components/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
       <Portfolio />
        <Works />
        <Testimonials />
        {/* <Contact /> */}
        <ContactMe />
      </div>
    </div>
  );
}

export default App;

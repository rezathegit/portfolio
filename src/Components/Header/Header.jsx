import "./Header.scss";
import {Person, Mail} from "@mui/icons-material"

export default function Header({ menuOpen, setMenuOpen }) {
  return <div className={"header " + (menuOpen && "active")}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">REZA.</a>
     <div className="itemContainer">
    <Person className="icon"/>
    <span>+46 76 583 0573</span>
     </div>
     <div className="itemContainer">
    <Mail className="icon"/>
    <span>reza.asadi@appliedtechnology.se</span>
     </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)} >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>

    Header
  </div>;
}

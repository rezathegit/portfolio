import "./Header.scss";
import { Person, Mail, LinkedIn } from "@mui/icons-material";


export default function Header({ menuOpen, setMenuOpen }) {
  return <div className={"header " + (menuOpen && "active")}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">REZA.</a>
        <div className="itemContainer">
          <a href="https://www.linkedin.com/in/reza-asadi-/" target="_blank"  rel="noopener noreferrer">
            <LinkedIn className="icon" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>reza.asadi@appliedtechnology.se</span>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  </div>;
}

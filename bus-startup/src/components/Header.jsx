import LoginButton from "./custom_elements/login_button";
import logoIcon from "/busicon.png";

const Header = () => {
    return (
      <header className="header">
        <div className="nav-container">
          <img src={logoIcon} alt="Bus Logo" className="bus-icon-header"/>
          <span className="nav-text">Home</span>
          <span className="nav-text">Map</span>
          <span className="nav-text">Complain</span>
        </div>
        <LoginButton/>
      </header>
    );
  }
  
  export default Header;
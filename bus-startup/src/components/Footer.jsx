import logoIcon from "../assets/busicon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-terms-paragraph">Terms of Service</p>
        <span className="footer-text">Copyright © 2024 John Doe. All rights reserved.</span>
        <img src={logoIcon} alt="Bus Logo" className="bus-icon"/>
      </div>
    </footer>
  );
};

export default Footer;
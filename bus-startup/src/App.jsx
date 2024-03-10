import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginButton from "./components/custom_elements/login_button";
import JoinUsButton from "./components/custom_elements/join_us_button";
import GoToMap from "./components/custom_elements/go_to_map.button";
import SubmitButton from "./components/custom_elements/submit_button";
import LogOutButton from "./components/custom_elements/logout_button";

import Button from "./components/customElements/Button";
import OurServicesSection from "./components/OurServiceSection";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      {/* <Header />
      <div className="hero">
      <div className="content">
        <h1>Temp text for the hero and bullshit</h1>
        <p className="hero-smalltext">
          smaller textfor those who really care and more other bs
        </p>
        <div className="body-buttons-layout">
          <JoinUsButton/>
          <GoToMap/>
        </div>
        </div>
        <div className="bus-image-hero">
          <img src={busHeroGreen} alt="bus" />
        </div>
      </div>
      <div className="text-box-with-description">
      A small team with big ideas. We have the variety of an agency and the experience of a studio.
      <p>All stages of the digital product lifecycle, from concept to launch, are covered by our team of experts.</p>
      
      </div>  */}

      
      <LoginButton/>
      <JoinUsButton/>
      <GoToMap/>
      <SubmitButton/>
      <LogOutButton/><br /><br />
      <Button onClick={() => console.log("Go to map was clicked")}>Go to map</Button><br /><br />
      <Button onClick={() => console.log("LogIn was clicked")}>Log In</Button><br /><br />
      <Button onClick={() => console.log("Submit was clicked")}>Submit</Button><br /><br />
      <Button display='Secondary' onClick={() => console.log("Join Us was clicked")}>Join Us</Button><br /><br />
      <Button display='Secondary' onClick={() => console.log("Log Out was clicked")}>Log Out</Button><br /><br />
      <Button display='Text' onClick={() => console.log("Cancel was clicked")}>Cancel</Button><br /><br />
      <Button display='Text' onClick={() => console.log("Delete was clicked")}>Delete</Button><br /><br />

      <Hero />
      <OurServicesSection />
      <Footer /> 
    </>
  );
}

export default App;

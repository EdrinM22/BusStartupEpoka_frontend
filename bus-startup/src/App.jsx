import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginButton from "./components/custom_elements/login_button"
import JoinUsButton from "./components/custom_elements/join_us_button"
import GoToMap from "./components/custom_elements/go_to_map.button"
import SubmitButton from "./components/custom_elements/submit_button"
import LogOutButton from "./components/custom_elements/logout_button"
import busHeroGreen from "./assets/bus-hero-green.svg"
function App() {
  return (
    <>
      <Header />
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
      
      </div>

      <Footer />
      <LoginButton/>
      <JoinUsButton/>
      <GoToMap/>
      <SubmitButton/>
      <LogOutButton/>
    </>
  )
}

export default App

import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginButton from "./components/custom_elements/login_button"
import JoinUsButton from "./components/custom_elements/join_us_button"
import GoToMap from "./components/custom_elements/go_to_map.button"
import SubmitButton from "./components/custom_elements/submit_button"
import LogOutButton from "./components/custom_elements/logout_button"
function App() {
  return (
    <>
      <Header />
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

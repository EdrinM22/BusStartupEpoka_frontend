
import Button from "./components/customElements/Button";
import BusTicket from "./assets/Bus-ticket.png";
import Fattorino from "./assets/fattorino.png";


function Controller() {
  return (
    <>
      {/* <Header/> */}
      <div className="button-layout-fattorino">
      <Button className="station-arrived-fattorino" onClick={() => console.log("fattorino arrived")}>Arrived at Station</Button><br /><br />
      <p className="current-fattorino-status">Current status: Arrived at Station *______*</p><br /><br />
      <Button className="station-goback-fattorino" onClick={() => console.log("go back")}>Go back one station</Button><br /><br />
    </div>
    <div className="photos-layout-fattorino">
    <img src={BusTicket} alt="Bus TIcket" className="bus-ticket-icon"/>
    <img src={Fattorino} alt="Bus TIcket" className="fattorino-icon"/>

    </div>
    </>
  );
}

export default Controller;
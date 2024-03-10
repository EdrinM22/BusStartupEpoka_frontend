import OurServicesCard from "./OurServicesCard";

import messageImg from "../assets/Complain-MainPage.svg";
import passengerImg from "../assets/Waiting-Pasenger-MainPage.svg";
import locationImg from "../assets/Location-Search-MainPage.svg";

export default function OurServicesSection() {
  return (
    <section id="our-service-section">
      <h2>Our Services</h2>
      <div id='our-service-card-container'>
        <OurServicesCard image={passengerImg} title={"No longer waiting around"} position={'left'}>
             Find out when the bus will get to the station. Plan ahead of time. No longer need to waist your precious time waiting for the bus
        </OurServicesCard>
        <OurServicesCard image={locationImg} title={"Every bus station with you"} position={'middle'}>
            Just search for the location you want to go and we will show you the nearest bus station to take you there
        </OurServicesCard>
        <OurServicesCard image={messageImg} title={"Make your voice heard"} position={'right'}>
            Help us by reporting everything that might need improving with the bus
            system.
        </OurServicesCard>
      </div>
    </section>
  );
}

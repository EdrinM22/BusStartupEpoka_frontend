import HeroImg from "../assets/City-Bus-MainPage.svg";

import Button from "./customElements/Button";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="hero-text-container flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">Temp Text for the hero and bullshit</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            smaller text for those who realy care 
            <br/>
            and more other bs
          </p>
          <div className="hero-button-container flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Button display="Secondary">Join Us</Button>
            <Button>Go to Map</Button>
          </div>
        </div>
        <div className="hero-image-container flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={HeroImg}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}

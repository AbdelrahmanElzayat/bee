import heroImg from "../../../assets/images/hero.jpg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImg} alt="hero img" />
      <div className="contentHero">
        <h1>
          Innovative medications for our <br /> traditional health problems
        </h1>
      </div>
    </div>
  );
};

export default Hero;

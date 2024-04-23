import "./Mission.css";
import mission from '../../../assets/images/mission.jpg'
const Mission = () => {
  return (
    <div className="Mission">
      <div className="imgMission">
        <img src={mission} alt="mission" />
      </div>
      <div className="MissionContent">
        <div className="MissionText">
          <h2>Mission</h2>
          <p>
            -To successfully market pharmaceutical products that fill <br /> the
            local market gaps. <br /> -To deliver simple, safe & effective
            products to help treat <br /> and manage different diseases. <br />{" "}
            -we create a healthy work environment that allows <br /> employes to
            acquire personal experience and develop <br /> themselves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;

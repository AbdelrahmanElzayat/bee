import "./Vision.css";
import vision from '../../../assets/images/vision.jpg'
const Vision = () => {
  return (
    <div className="Vision">
      <div className="visionContent">
        <div className="visionText">
          <h2>vision</h2>
          <p>
            Our vision is to establish the name of bee group pharmaceuticals as
            a <br /> professional partner with health care providers supplying
            innovative <br /> medications for traditional health
          </p>
        </div>
      </div>
      <div className="visionImg">
        <img src={vision} alt="vision" />
      </div>
    </div>
  );
};

export default Vision;

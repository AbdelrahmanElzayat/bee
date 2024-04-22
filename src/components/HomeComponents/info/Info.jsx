import { Container } from "react-bootstrap";
import "./Info.css";
const Info = () => {
  return (
    <div className="info">
      <div className="infoContent">
        <span>&quot;</span>
        <p>
          Wherever the art of medicine is <br /> loved there is also a love for{" "}
          <br />
          humanity.
        </p>
        <span>&quot;</span>
      </div>
      <div className="infoFooter">
        <Container>
          <span className="infoFooter-span"></span>
          <p>
            Dr mustafa Helmy,
            <br />
            CEO,
            <br />
            bee Corporation
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Info;

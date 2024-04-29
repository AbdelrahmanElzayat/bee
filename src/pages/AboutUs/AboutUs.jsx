import { useEffect, useState } from "react";
import MainLayout from "../../components/mainLayout/MainLayout";
import aboutImg from "../../assets/images/aboutImg.jpg";
import career from "../../assets/images/career.jpg";
import { Container } from "react-bootstrap";
import "./About.css";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [aboutImage, setAboutImage] = useState(aboutImg);
  const [day, setDay] = useState("25");
  const [month, setMonth] = useState("Des");
  const [title, setTitle] = useState("Portsaid 2023");
  return (
    <MainLayout>
      <div className="about">
        <h2>Happening at BEE</h2>
        <Container>
          <div className="AboutBox">
            <div className="aboutEventDetails">
              <div className="aboutEventDetails_img">
                <img src={aboutImage} alt="aboutImg" />
              </div>
              <div className="aboutEventDetails_desc">
                <div className="aboutEventDetails_desc_date">
                  <span>{day}</span>
                  <span>{month}</span>
                </div>
                <div className="aboutEventDetails_desc_text">
                  <span>Event</span>
                  <h3>{title}</h3>
                  <span>Tbab, Egy</span>
                </div>
              </div>
            </div>
            <div className="aboutEvents">
              <div
                className="aboutEventLine"
                onMouseEnter={() => {
                  setTitle("Portsaid 2023");
                  setDay("25");
                  setMonth("Dec");
                  setAboutImage(aboutImg);
                }}
              >
                <div className="aboutEventLine_date">
                  <span>25</span>
                  <span>Dec</span>
                </div>
                <div className="aboutEventLine_desc">
                  <span>Event</span>
                  <h3>Portsaid 2023</h3>
                </div>
              </div>
              <div
                className="aboutEventLine"
                onMouseEnter={() => {
                  setTitle("Luxor 2024");
                  setDay("01");
                  setMonth("Feb");
                  setAboutImage(career);
                }}
              >
                <div className="aboutEventLine_date">
                  <span>1</span>
                  <span>Feb</span>
                </div>
                <div className="aboutEventLine_desc">
                  <span>Event</span>
                  <h3>Luxor 2024</h3>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};

export default AboutUs;

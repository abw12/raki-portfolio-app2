import { Container, Row, Col } from "react-bootstrap";
import profilepic from "../assets/img/person-1.jpeg";
import LineGradient from "./LineGradient";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <div>
          <p className="about-title">
            Who <span>i am? </span>
          </p>
        </div>
        <LineGradient width="50%" />
        <br></br>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={4}>
            <div>
              <img src={profilepic} alt="profile pic" />
            </div>
          </Col>
          <Col xs={12} md={6} xl={8}>
            <div>
              <p className="about-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

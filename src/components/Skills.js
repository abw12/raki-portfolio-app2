import { Container, Row, Col } from "react-bootstrap";
import skillImage from "../assets/img/skills-image.png";
import LineGradient from "./LineGradient";

const Skills = () => {
  return (
    <section id="skills" className="skill">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <div>
              <p className="skill-title">
                My <span>Skills</span>
              </p>
              <div>
                <LineGradient width="50%" />
              </div>
              <p style={{ marginTop: "2.5rem", magrinBottom: "1.75rem" }}>
                Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer
                ut fames odio in at.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img alt="skills" style={{ marginTop: "10px" }} src={skillImage} />
          </Col>
        </Row>
        <Row
          className="justify-content-between"
          gap={32}
          style={{ marginTop: "16px" }}
        >
          <Col
            xs
            md={"auto"}
            xl={5}
            style={{
              position: "relative",
              paddingTop: "32px",
            }}
          >
            <div style={{ zIndex: 10 }}>
              <p className="index">01</p>
              <p className="skill-name">Digital Artwork</p>
            </div>
            <div className="skill-box-1" />

            <div className="skill-description">
              <p style={{ marginTop: "5px" }}>
                A auctor pharetra hendrerit mattis amet etiam interdum platea.
                Est morbi porttitor scelerisque fermentum, sagittis non egestas.
                Amet odio sit sagittis,
              </p>
            </div>
          </Col>
          <Col
            xs
            md={"auto"}
            xl={5}
            style={{
              position: "relative",
              paddingTop: "32px",
            }}
          >
            <div style={{ zIndex: 10 }}>
              <p className="index">02</p>
              <p className="skill-name">Graphic Designing</p>
            </div>
            <div className="skill-box-1 skill-box-2" />

            <div className="skill-description">
              <p style={{ marginTop: "5px" }}>
                A auctor pharetra hendrerit mattis amet etiam interdum platea.
                Est morbi porttitor scelerisque fermentum, sagittis non egestas.
                Amet odio sit sagittis,
              </p>
            </div>
          </Col>
        </Row>
        <Row
          className="justify-content-between"
          gap={32}
          style={{ marginTop: "16px" }}
        >
          <Col
            xs
            md={"auto"}
            xl={5}
            style={{
              position: "relative",
              paddingTop: "32px",
            }}
          >
            <div style={{ zIndex: 10 }}>
              <p className="index">03</p>
              <p className="skill-name">Illustrator</p>
            </div>
            <div className="skill-box-1 skill-box-3" />

            <div className="skill-description">
              <p style={{ marginTop: "5px" }}>
                A auctor pharetra hendrerit mattis amet etiam interdum platea.
                Est morbi porttitor scelerisque fermentum, sagittis non egestas.
                Amet odio sit sagittis,
              </p>
            </div>
          </Col>
          <Col
            xs
            md={"auto"}
            xl={5}
            style={{
              position: "relative",
              paddingTop: "32px",
            }}
          >
            <div style={{ zIndex: 10 }}>
              <p className="index">04</p>
              <p className="skill-name">Landscape Designs</p>
            </div>
            <div className="skill-box-1 skill-box-4" />

            <div className="skill-description">
              <p style={{ marginTop: "5px" }}>
                A auctor pharetra hendrerit mattis amet etiam interdum platea.
                Est morbi porttitor scelerisque fermentum, sagittis non egestas.
                Amet odio sit sagittis,
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

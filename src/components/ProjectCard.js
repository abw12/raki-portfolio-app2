import { Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Router>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <Link to="/project1">view</Link>
          </div>
        </div>
      </Col>
    </Router>
  );
};

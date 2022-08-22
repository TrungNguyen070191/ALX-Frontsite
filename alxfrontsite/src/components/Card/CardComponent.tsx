import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./CardComponent.scss";

const CardComponent = () => {
  return (
    <Card className="card-container">
      <div className="top-text">
        <span>22/08/2022</span>
        <span>2 phút</span>
      </div>

      <Card.Img
        variant="top"
        src="https://www.anlacxa.com/_next/image?url=https%3A%2F%2Fan-lac-xa.herokuapp.com%2Fuploads%2Fthis_shrimp_is_awesome_f641dd07d4.jpg&w=828&q=75"
      />
      <Card.Body>
        <Card.Text>Thiên Nhiên</Card.Text>
        <Card.Title>This shrimp is awesome</Card.Title>
      </Card.Body>

      <div className="bot-text">
        <span>Author</span>
      </div>
    </Card>
  );
};

export default CardComponent;

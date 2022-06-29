import "./card.css";
import Card from "react-bootstrap/Card";

import { App, Code, Calendar, Tv } from "react-bootstrap-icons";
function card() {
  return (
    <div className="row">
      {[
        {
          id: 1,
          image: <App />,
          title: "Interface Design",
          content: "203 Fake St. Mountain View, San Francisco, California, USA",
        },
        {
          id: 2,
          image: <Code />,
          title: "Media Strategy",
          content:
            "A small river named Duden flows by their place and supplies",
        },
        {
          id: 3,
          image: <Calendar />,
          title: "Mobile App",
          content:
            "A small river named Duden flows by their place and supplies.",
        },
        {
          id: 4,
          image: <Tv />,
          title: "Coding",
          content:
            "A small river named Duden flows by their place and supplies.",
        },
      ].map((features) => (
        <Card className="card" style={{ width: "333px", height: "25rem" }}>
          {/* <Card.Img className="card-img-top"  src={features.image} /> */}
          {features.image}
          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>
              {features.title}
            </Card.Title>
            <Card.Text>{features.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default card;

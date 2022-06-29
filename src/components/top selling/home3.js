import React from "react";
import img1 from "../../images/dest1.jpg";
import img2 from "../../images/dest2.jpg";
import img3 from "../../images/dest3.jpg";
import "./home3.css";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

function home3() {
  const cardDetails = [
    {
      id: 1,

      backgroundImage: img1,
      title: "Interface Design",
      content: "203 Fake St. Mountain View, San Francisco, California, USA",
    },
    {
      id: 2,

      backgroundImage: img2,
      title: "Media Strategy",

      content: "A small river named Duden flows by their place and supplies",
    },
    {
      id: 3,

      backgroundImage: img3,
      title: "Mobile App",
      content: "A small river named Duden flows by their place and supplies.",
    },
  ];

  return (
    <div className="container">
      <h6 className="h6">Top Selling</h6>
      <h2 className="h2">Top Destination</h2>

      <div className="row2" style={{ position: "relative" }}>
        {cardDetails.map((features) => (
          <Card className="home3card">
            <Card.Body className="cardBody">
              <Image className="home3images" src={features.backgroundImage} />
              <div>
                <Card.Title>{features.title}</Card.Title>
                <Card.Text>{features.content}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default home3;

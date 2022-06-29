import React from "react";
import "./home2.css";
import img1 from "../../images/icon1.png";
import img2 from "../../images/icon2.png";
import img3 from "../../images/icon3.png";
import img4 from "../../images/icon4.png";
import Card from "react-bootstrap/Card";

function home2() {
  const categoryCard = [
    {
      id: 1,
      Img: img1,
      title: "Calculated Weather",
      content: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      id: 2,
      Img: img2,
      title: "Best Flights",
      content: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      id: 3,
      Img: img3,
      title: "Local Events",
      content: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      id: 4,
      Img: img4,
      title: "Customization",
      content: "We deliver outsourced aviation services for military customers",
    },
  ];
  return (
    <div className="container">
      <h6 className="h6">CATEGORY</h6>
      <h2 className="h2">We Offer Best Services</h2>
      <div className="row2">
        {categoryCard.map((features) => (
          <Card className="categoryCard">
            <Card.Img className="home2card" src={features.Img} />

            <Card.Body>
              <Card.Title>{features.title}</Card.Title>
              <Card.Text style={{ height: "20px" }}>
                {features.content}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default home2;

import React from "react";
import Col from "react-bootstrap/Col";
import "./home4.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../../images/author.png";
import img2 from "../../images/author2.png";
import img3 from "../../images/author3.png";
const home4 = () => {
  const cardMap = [
    {
      id: 1,
      Img: img1,
      p: "Khulna, Bangladesh",
      h2: "Mike taylor",
      h3: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
    {
      id: 2,
      Img: img2,
      p: "Khulna, Bangladesh",
      h2: "Mike taylor",
      h3: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
    {
      id: 3,
      Img: img3,
      p: "Khulna, Bangladesh",
      h2: "Mike taylor",
      h3: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
  ];

  return (
    <Container variant="dark">
      <Row>
        <Col>
          <h6>TESTIMONIALS</h6>
          <h2>What People say about us</h2>
        </Col>
        <Col>
          <Carousel className="CardCarousel" fade>
            {cardMap.map((features) => (
              <Carousel.Item>
                <Card className="testimonial-card">
                  <Card.Img src={features.Img} />

                  <Card.Body>
                    <h3>{features.h3}</h3>
                    <h2>{features.h2}</h2>
                    <p>{features.p}</p>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
           
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default home4;

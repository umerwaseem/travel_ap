import React from "react";
import "./brand.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import img1 from "../../images/brand1.png";
import img2 from "../../images/brand2.png";
import img3 from "../../images/brand3.png";
import img4 from "../../images/brand4.png";
import img5 from "../../images/brand5.png";
const brand = () => {

const cardMAp={
  
}

  return (
    <div className="containerBrand">
      
        {[
          {
            id: 1,
            Img: img1,
          },
          {
            id: 2,
            Img: img2,
          },
          {
            id: 3,
            Img: img3,
          },
          {
            id: 4,
            Img: img4,
          },
          {
            id: 5,
            Img: img5,
          },
        ].map((features) => (
          <Container>
          <Row>
          <Col>
            <Card className="brand-card">
            <Card.Img className='brandImg' variant="top" src={features.Img} />
          </Card>
          </Col>
          </Row>
        </Container>
         
        ))}
      </div>
  
  );
};

export default brand;

import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import "./home5.css";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import img from "../../images/bookingImg.png";
import img1 from "../../images/selection.svg";
import img2 from "../../images/water-sport.svg";
import img3 from "../../images/taxi.svg";
import fvtPlace from "../../images/favorite-placeholder.png";
import { FaLocationArrow } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { ImLeaf, ImMap2 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
const home5 = () => {
  return (
    <div className="bookingSteps">
      <Col className="bookingCol1">
        <h2>Book Your Next Trip In 3 Easy Steps</h2>
        <Row>
          <Col xs lg="2" className="stepsCol1 mb-5">
            <Image src={img1}></Image>
          </Col>
          <Col>
            <h3>Choose Destination</h3>
            <p>
              Choose your favourite place. No matter where you travel inside the
              World.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs lg="2" className="stepsCol2 mb-5">
            <Image src={img2}></Image>
          </Col>
          <Col>
            <h3>Make Payment</h3>
            <p>
              After find your perfect spot, make your payment and get ready to
              travel.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs lg="2" className="stepsCol3 mb-5">
            <Image src={img3}></Image>
          </Col>
          <Col>
            <h3>Reach Airport on Selected Date</h3>
            <p>
              Lastly, you have to arrive at the airport on time and enjoy the
              vacation.
            </p>
          </Col>
        </Row>
      </Col>
      <Col className="bookingCol2">
        <Card className="booking-card">
          <Card.Img variant="top" className="bookingimg" src={img} />
          <Card.Body>
            <Card.Title>Trip to Greece</Card.Title>
            <p>14-29 June | by Robbin joseph</p>

            <Card.Text>
              <div>
                <ImLeaf className="Icon" /> <ImMap2 className="Icon" />{" "}
                <FaLocationArrow className="Icon" />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <BsBuilding />
                </div>
                <p>24 people going</p>
                <div >
                  <AiOutlineHeart className="heart"/>
                  <div className="heart-box-wrap">
                    <div className="">
                      <img className="hover-img" src={fvtPlace} />
                    </div>
                    <div className="">
                      <p> Ongoing </p>
                      <h4>Trie to rome</h4>
                      <h6>
                        <span>40%</span>complete
                      </h6>
                      <div>
                        <ProgressBar
                          style={{ width: "100%", height: "7px" }}
                          now={40}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default home5;

import React from "react";
import "./home.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Travel from "../../images/Traveller1.png";
import Button from "react-bootstrap/Button";

function home() {
  return (
    <div classname="containerHome">
      <Row classname="homeRow">
        <Col className="col1">
          <Row>
            <h4>Best Destinations around the world</h4>
          </Row>
          <Row>
            <h1>Travel, enjoy and live a new and full life</h1>
          </Row>
          <Row>
            <h6>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </h6>
          </Row>
          <Row className="d-flex ">
            <Button className="btn1">Find out more</Button>
            <BsFillPlayCircleFill className="btn2 mx-5" text />
            {"kjdkfsd"}
          </Row>
        </Col>
        <Col className="col2">
          <Image className="img" src={Travel}></Image>
        </Col>
      </Row>
    </div>
  );
}

export default home;

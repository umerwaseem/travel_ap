import React from "react";
import "./home7.css";
import Form from "react-bootstrap/Form";
import sendImg from "../../images/send.png";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import Image from "react-bootstrap/Image";
const home7 = () => {
  return (
    <div className=" homecontainer">
      <div className="subCol">
        <Row className="my-5">
          <h3 className="my-5">
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h3>

          <Form className="subcribtionForm">
            <Form.Group>
              <Form.Control
                className="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Button className="formbutton" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </div>
      <div>
        <Image className="img-card " src={sendImg}></Image>
      </div>
    </div>
  );
};

export default home7;

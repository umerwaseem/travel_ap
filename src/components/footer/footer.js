import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import footerlogo from "../../images/Jadoo.png";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { SiInstagram } from "react-icons/si";
import "../footer/footer.css";
function footer() {
  return (
    <div>
      <div className="footer">
        <Container>
          <Row className="row1">
            <Col xs={3}>
              <Image src={footerlogo} />
              <p>Book your trip in minute, get full control for much longer</p>
            </Col>
            <Col xs={6}>
              <Row className="footer-mid-column">
                <Col xs={2}>
                  <h3>Company</h3>
                  <p>About</p>
                  <p>Careers</p>
                  <p>Mobile</p>
                </Col>
                <Col xs={2}>
                  <h3>Contacts</h3>
                  <p>help/FAQ</p>
                  <p>Press</p>
                  <p>Affiliates</p>
                </Col>
                <Col xs={2}>
                  <h3>More</h3>
                  <p>Airlinefees</p>
                  <p>Airline</p>
                  <p>Low fair tips</p>
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <Container>
                <Col className="col2">
                  <TiSocialFacebook />
                  <SiInstagram />
                  <TiSocialTwitter />
                  <h4>Discover your app</h4>
                </Col>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer2">
        <Container>
          <Row>
            <Col>All rights reserved@jadoo.co</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default footer;

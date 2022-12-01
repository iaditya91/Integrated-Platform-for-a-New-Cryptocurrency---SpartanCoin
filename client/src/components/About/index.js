import React from "react";
import { Accordion, Card, Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import "./style.css";

const title = "About";

const body = (
  <Row>
    <Col md={12} className="cardBody">
      {" "}
      <h1>{title}</h1>
      <p>Welcome to SpartanCoin!</p>
      <p>
        SpartanCoin the newest Cryptocurrency is developed as a part of 295B!
        The main advantages of cryptocurrency is the transactions are super
        fast, digital, secure and worldwide. In essence it also allows to
        maintain the records without the risk of data being pirated. Fraud is,
        actually, greatly reduced. Want to learn more? See the "Learn More"
        section below. Ready to get started? Click Sign Up!
      </p>
    </Col>
    {/* <Col md={4}>
      <img
        src={"./assets/images/coin.jpeg"}
        style={{ width: 400, height: 275 }}
        className="image round"
        alt="Coin"
      />
    </Col> */}
  </Row>
);

function About() {
  if (isMobile) {
    return (
      <Card className="mobileView">
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {title}
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body>{body}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  } else {
    return (
      <Card className="desktopCard">
        <Card.Body>{body}</Card.Body>
      </Card>
    );
  }
}

export default About;

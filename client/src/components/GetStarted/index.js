import React, { useContext, useState } from "react";
import { Accordion, Card, Row, Col, Button } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Sidenav from "sidenavjs";
import SessionContext from "../../utils/sessionContext";
import SignUpForm from "../SignUp";
import "./style.css";

function GetStarted() {
  const { logged_in } = useContext(SessionContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(logged_in);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  if (isMobile && logged_in) {
    return (
      <Card className="mobileView">
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Get Started
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Row style={{ textAlign: "center" }}>
              <Col md={12} className="cardBody">
                <h1>Get Started</h1>
                <p>
                  Please Sign-Up to create your own account. After submitting
                  the Sign-Up form, please be sure to keep your private key in a
                  safe place. You need this private key for any peer-to-peer
                  transactions. On the initial login you will notice that your
                  account is empty, in order to fill your account with coins you
                  will have to either mine the coins! Once you have a some coins
                  in your wallet, you can start transactions.
                </p>
              </Col>
              <Col md={12}>
                {/* <img
                  src={
                    "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"
                  }
                  className="image"
                  alt="Started"
                /> */}
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  } else if (isMobile) {
    return (
      <SessionContext.Consumer>
        {(state) => (
          <Sidenav
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            sidenav={<SignUpForm />}
          >
            <Card className="mobileView">
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Get Started
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Row style={{ textAlign: "center" }}>
                    <Col md={12} className="cardBody">
                      <h1>Get Started</h1>
                      <p>
                        Please Sign-Up to create your own account. After
                        submitting the Sign-Up form, please be sure to keep your
                        private key in a safe place. You need this private key
                        for any peer-to-peer transactions. On the initial login
                        you will notice that your account is empty, in order to
                        fill your account with coins you will have to either
                        mine the coins! Once you have a some coins in your
                        wallet, you can start transactions.
                      </p>
                      <Button
                        variant="dark"
                        onClick={() => setSidebarOpen(true)}
                      >
                        Sign Up !
                      </Button>
                    </Col>
                    <Col md={5}>
                      {/* <img
                        src={
                          "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"
                        }
                        className="image"
                        alt="Started"
                      /> */}
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Sidenav>
        )}
      </SessionContext.Consumer>
    );
  } else if (logged_in) {
    return (
      <Card className="desktopCard">
        <Card.Body>
          <Row style={{ textAlign: "center" }}>
            <Col md={12} className="cardBody">
              <h1>Get Started</h1>
              <p>
                Please Sign-Up to create your own account. After submitting the
                Sign-Up form, please be sure to keep your private key in a safe
                place. You need this private key for any peer-to-peer
                transactions. On the initial login you will notice that your
                account is empty, in order to fill your account with coins you
                will have to either mine the coins! Once you have a some coins
                in your wallet, you can start transactions.
              </p>
            </Col>
            <Col md={5}>
              {/* <img
                src={
                  "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"
                }
                className="image"
                alt="Started"
              /> */}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <SessionContext.Consumer>
        {(state) => (
          <Sidenav
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            sidenav={<SignUpForm />}
          >
            <Card className="desktopCard">
              <Card.Body>
                <Row style={{ textAlign: "center" }}>
                  <Col md={12} className="cardBody">
                    <h1>Get Started</h1>
                    <p>
                      Please Sign-Up to create your own account. After
                      submitting the Sign-Up form, please be sure to keep your
                      private key in a safe place. You need this private key for
                      any peer-to-peer transactions. On the initial login you
                      will notice that your account is empty, in order to fill
                      your account with coins you will have to either mine the
                      coins! Once you have a some coins in your wallet, you can
                      start transactions.
                    </p>
                    <Button variant="dark" onClick={() => setSidebarOpen(true)}>
                      Sign Up !
                    </Button>
                  </Col>
                  <Col md={5}>
                    {/* <img
                      src={
                        "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"
                      }
                      className="image"
                      alt="Started"
                    /> */}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Sidenav>
        )}
      </SessionContext.Consumer>
    );
  }
}

export default GetStarted;

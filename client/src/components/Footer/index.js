import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

function Footer() {
  return (
    <div>
      <Card id="footer" className="text-center" bg="dark" text="white">
        <Card.Body>
          <Card.Text>
            SpartanCoin created by :
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              {" "}
              Aditya Inampudi{" "}
            </a>{" "}
            |
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              Rakesh Nagarajappa{" "}
            </a>{" "}
            |
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              Shivendra Kumar
            </a>{" "}
            |
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              {" "}
              Vedakshay Jandhyala
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Footer;

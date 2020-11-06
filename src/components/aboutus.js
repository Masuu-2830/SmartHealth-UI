import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import logo1 from "../images/logo1.jpg";
import irfan from "../images/irfan.jpeg";
import samba from "../images/samba.jpg";

function AboutUs() {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: 80, marginBottom: 50 }}>
        <div className="col-12">
          <h4>
            SmartHealth is <strong>Web-App</strong> based{" "}
            <strong>AI enabled multi-lingua Chatbot</strong> where people all
            across the globe can get health information from the experts and
            specialist and can track their health even if they don’t use the
            same language or the same currency.
          </h4>
        </div>
      </div>
      <div className="row">
        <Card className="col-12 col-sm-4">
          <CardImg top height="400" width="100%" src={logo1} alt="Masood" />
          <CardBody style={{ textAlign: "center" }}>
            <CardTitle tag="h4">Muhammad Masood</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Electrical Engineering
            </CardSubtitle>
            <CardSubtitle
              tag="h6"
              className="mb-2 text-muted"
              style={{ fontWeight: "bolder" }}
            >
              Full-Stack Web Developer
            </CardSubtitle>
          </CardBody>
        </Card>
        <Card className="col-12 col-sm-4">
          <CardImg top height="400" width="100%" src={irfan} alt="Irfan" />
          <CardBody style={{ textAlign: "center" }}>
            <CardTitle tag="h4">Irfan Mansuri</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Electrical Engineering
            </CardSubtitle>
            <CardSubtitle
              tag="h6"
              className="mb-2 text-muted"
              style={{ fontWeight: "bolder" }}
            >
              AI/ML/CV Enthusiast
            </CardSubtitle>
            <CardSubtitle
              tag="h6"
              className="mb-2 text-muted"
              style={{ fontWeight: "bolder" }}
            >
              Web Developer
            </CardSubtitle>
          </CardBody>
        </Card>
        <Card className="col-12 col-sm-4">
          <CardImg top height="400" width="100%" src={samba} alt="Samba" />
          <CardBody style={{ textAlign: "center" }}>
            <CardTitle tag="h4">Kolliboina Samba</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Electrical Engineering
            </CardSubtitle>
            <CardSubtitle
              tag="h6"
              className="mb-2 text-muted"
              style={{ fontWeight: "bolder" }}
            >
              AI/ML/NLP Enthusiast
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default AboutUs;

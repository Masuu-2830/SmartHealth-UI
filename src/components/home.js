import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import diet from "../images/diet.jpeg";
import doctor from "../images/doctor.jpg";
import reminder from "../images/reminder.gif";
import emergency from "../images/emergency.png";
import wellness from "../images/wellness.png";
import lab from "../images/lab tests.jpg";
import community from "../images/community.jpg";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ marginTop: 50 }} className="head">
          SmartHealth
        </h1>
        <div className="row" style={{ marginTop: 50 }}>
          <Card className="col-12 col-sm-3">
            <Link to="/contactus">
              <CardImg
                height="300"
                width="100%"
                src={reminder}
                alt="Set Reminder"
              />
              <CardBody
                style={{
                  backgroundColor: "silver",
                  textAlign: "center",
                }}
              >
                <CardTitle tag="h4" style={{ color: "red" }}>
                  Set Reminder
                </CardTitle>
              </CardBody>
            </Link>
          </Card>
          <Card className="col-12 col-sm-3">
            <Link to="/contactus">
              <CardImg height="300" width="100%" src={diet} alt="Diet" />
              <CardBody
                style={{
                  backgroundColor: "silver",
                  textAlign: "center",
                }}
              >
                <CardTitle tag="h4" style={{ color: "red" }}>
                  Diet Look Book
                </CardTitle>
              </CardBody>
            </Link>
          </Card>
          <Card className="col-12 col-sm-3">
            <Link to="/contactus">
              <CardImg
                height="300"
                width="100%"
                src={emergency}
                alt="Emergency Services"
              />
              <CardBody
                style={{
                  backgroundColor: "silver",
                  textAlign: "center",
                }}
              >
                <CardTitle tag="h4" style={{ color: "red" }}>
                  Emergency Services
                </CardTitle>
              </CardBody>
            </Link>
          </Card>
          <Card className="col-12 col-sm-3">
            <Link to="/contactus">
              <CardImg
                height="300"
                width="100%"
                src={community}
                alt="Community Support"
              />
              <CardBody
                style={{
                  backgroundColor: "silver",
                  textAlign: "center",
                }}
              >
                <CardTitle tag="h4" style={{ color: "red" }}>
                  Community Support
                </CardTitle>
              </CardBody>
            </Link>
          </Card>
        </div>

        <div className="row" style={{ marginTop: 50, marginBottom: 50 }}>
          <Card className="col-12 col-sm-4">
            <Link to="/contactus">
              <CardImg
                height="300"
                width="100%"
                src={wellness}
                alt="Wellness"
              />
              <CardBody
                style={{
                  backgroundColor: "silver",
                  textAlign: "center",
                }}
              >
                <CardTitle tag="h4" style={{ color: "red" }}>
                  Wellness
                </CardTitle>
              </CardBody>
            </Link>
          </Card>
          <Card className="col-12 col-sm-4">
            <Link to="/contactus">
              <CardImg
                height="300"
                width="100%"
                src={doctor}
                alt="Visit a Doctor"
              />
              <CardBody
                style={{
                  backgroundColor: "silver",
                  textAlign: "center",
                }}
              >
                <CardTitle tag="h4" style={{ color: "red" }}>
                  Visit a Doctor
                </CardTitle>
              </CardBody>
            </Link>
          </Card>
          <Card className="col-12 col-sm-4">
            <Link to="/contactus">
              <CardImg height="300" width="100%" src={lab} alt="Lab Tests" />
              <CardBody
                style={{
                  backgroundColor: "silver",
                  textAlign: "center",
                }}
              >
                <CardTitle tag="h4" style={{ color: "red" }}>
                  Lab Tests
                </CardTitle>
              </CardBody>
            </Link>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;

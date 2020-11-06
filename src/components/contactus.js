import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    this.toggleModal();
    this.toggleNav();
    alert(
      "Username: " +
        this.username.value +
        "Password: " +
        this.password.value +
        "Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div
          className="row row-content"
          style={{ textAlign: "center", marginTop: 80 }}
        >
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12">
            <h5>Our Address</h5>
            <address>
              NIT Jamshedpur
              <br />
              Jharkhand
              <br />
              India
              <br />
              <i className="fa fa-phone"></i>: +89 690 256 72
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:mansuri4638@gmail.com">mansuri4638@gmail.com</a>
            </address>
          </div>
          <div className="col-12">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+8969025672"
              >
                <i className="fa fa-phone"></i> Call
              </a>

              <a
                role="button"
                className="btn btn-success"
                href="mailto:mansuri4638@gmail.com"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div
          className="row row-content"
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          <div className="col-12" style={{ textAlign: "center" }}>
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit} style={{ alignItems: "center" }}>
              <FormGroup>
                <Label className="col-12" htmlFor="name">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  innerRef={(input) => (this.name = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label className="col-12" htmlFor="message">
                  Feedback
                </Label>
                <Input
                  type="text"
                  id="message"
                  name="message"
                  innerRef={(input) => (this.message = input)}
                />
              </FormGroup>

              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;

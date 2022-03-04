<<<<<<< HEAD
import React, { Component, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CSS/homepage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div className="Signup">
            <Form className="form">
                <h1>Register</h1>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Form.Group>
                </Row>



                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Andhra Pradesh</option>
                            <option>Andaman and Nicobar Islands</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chandigarh</option>
                            <option>Chhattisgarh</option>
                            <option>Dadar and Nagar Haveli</option>
                            <option>Daman and Diu</option>
                            <option>Delhi</option>
                            <option>Lakshadweep</option>
                            <option>Puducherry</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jammu and Kashmir</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
=======
import React, { Component } from "react";
export default class SignUp extends Component {
    render() {
        return (
            <form className="main container" style={{ width: "30%" }}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    < label className="main-text">First name</ label >
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    < label className="main-text" >Last name</ label >
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    < label className="main-text">Email address</ label >
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    < label className="main-text">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    < label className="main-text">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password again" />
                </div>
                <div className="form-group">
                    < label className="main-text">DOB</label>
                    <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
                </div>
                <div className="form-group">
                    < label className="main-text">Address</label>
                    <input type="text" className="form-control" placeholder="Your Address" />
                </div>
                <div className="form-group">
                    < label className="main-text">Mobile number</label>
                    <input type="tel" className="form-control" placeholder="Mobile number" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/#">Log in?</a>
                </p>
            </form>
        );
    }
>>>>>>> cd2c632b2f8393fcc369a45a4240644a89726d82
}
export { SignUp };


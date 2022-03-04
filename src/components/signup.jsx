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
}
export { SignUp };
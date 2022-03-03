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
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/#">Log in?</a>
                </p>
            </form>
        );
    }
}
export { SignUp };
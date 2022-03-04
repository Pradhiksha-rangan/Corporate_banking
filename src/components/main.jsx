import React, { Component } from 'react';
import images from '../images/mainbg.jpg';
import "../App.css"
class Main extends Component {
    render() {
        return (
            <div className="bg-img">
                <div className="main">
                    <h1 className="display-1">Silver Coin Banking</h1>
                    <div className="text-center">
                        <h2 className="lead">Welcome!</h2></div>
                    <a className="btn btn-primary" href="/salarypayment">Salary</a>
                    <a className="btn btn-secondary" href="/customer" >Customer Details</a>
                    <a className="btn btn-success" href="/accmanagement">Account Management</a>
                    <a class="btn btn-light" href="/login">Login</a>
                    <a className="btn btn-warning" href="\signup"   >Signup</a>
                    <a className="btn btn-info" href="\invoice">Invoice</a>
                    {/* <a class="btn btn-primary" href="\salarypayment">Salary Payment</a>
                <a class="btn btn-primary" href="\customer">Customer Details</a>
                <a class="btn btn-primary" href="\accmanagement">Account Management</a>
                <a class="btn btn-primary" href="\login">Login</a>
                <a class="btn btn-primary" href="\signup">Signup</a>
                <a class="btn btn-primary" href="\invoice">Invoice</a>
 */}



                </div>
            </div>

        )
    }
}
export { Main };
import React, { Component } from 'react';
import images from '../images/mainbg.jpg';

class Main extends Component {
    render() {
        return (
            <div >
                <h1>Silver Coin Banking</h1>
                <h2>Welcome!</h2>
                <a href="\salarypayment">Salary Payment</a>|
                <a href="\customer">Customer Details</a>|
                <a href="\accmanagement">Account Management</a>|
                <a href="\login">Login</a>|
                <a href="\signup">Signup</a>|
                <a href="\invoice">Invoice</a>|
                
                <img src={images} style={{
                    backgroundImage: `url(${images})`,
                    backgroundRepeat: 'no-repeat', width: '100%', height: '100%', backgroundSize: 'contain'
                }} alt="abc" />
                

            </div>
            
        )
    }
}
export { Main };
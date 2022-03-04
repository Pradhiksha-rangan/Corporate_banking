import React, { Component } from 'react';
class AccManagement extends Component {

    render() {
        return (
            <><div style={{ backgroundColor: 'ButtonHighlight' }}><h1>Get Balance</h1></div>
                <form >

                    <label>Name: </label>
                    <input type="text" placeholder='' />
                    <label>Account Number: </label>
                    <input type="text" placeholder='' />
                    <label>Branch: </label>
                    <input type="text" placeholder='' />
                    <input type="submit" />
                    <label>Balance: </label>
                    <input type="text" placeholder='' />

                    <div style={{ backgroundColor: 'ButtonHighlight' }}><h1>Transaction Details</h1></div>
                    <label>Account: </label><br />
                    <input type="text" placeholder='' />
                    <h4>Details</h4>
                    <hr style={{ backgroundColor: 'Background', }} />
                    <p> 01-JAN-2018        <span style={{ color:'crimson' }}>₹ 5,000,00(Cr)</span><br /> MAA0000860  BY TRANSFER INB<br />IMPS800117398347/9494821060/XX6549/fivethous   </p>
                    <hr style={{ backgroundColor: 'Background', }} />
                    <p> 31-DEC-2017        <span style={{ color: 'crimson' }}>₹ 47.20(Dr)</span><br /> Monthly Ave-Bal No  </p>
                    <hr style={{ backgroundColor: 'Background', }} />
                    <p> 30-NOV-2017        <span style={{ color: 'crimson' }}>₹ 2.00(Cr)</span><br /> CREDIT INTEREST   </p>
                    <hr style={{ backgroundColor: 'Background', }} />
                    <p> 30-SEP-2017        <span style={{ color: 'crimson' }}>₹ 88.50(Dr)</span><br />  Monthly Ave-Bal No </p>
                    <hr style={{ backgroundColor: 'Background', }} />
                    <div style={{ backgroundColor: 'ButtonHighlight' }}><h1>Convert to miniloan</h1></div>



                </form></>


        );
    }
}

export { AccManagement };

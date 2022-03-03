import React, { Component } from 'react';


class CustomerDetails extends Component {

    state = {
        customer: {
            Id: '',
            Name: '',
            Address: '',
            MonthlyIncome: '',
            Contact: '',
            email: ''
        }
    }

    changeHandler = (e) => {

    }
    onCreateCustomer = () => {
        console.log(this.state.Id);
    }
    render() {
        return (
            <div>
                <h2>
                    Updation Form
                </h2>
                <form>
                    <p>
                        <label>Customer ID:<input type="text" name="Id" value={this.state.customer.Id} onChange={this.changeHandler} /></label>
                    </p>
                    <p>
                        <label>Name:<input type="text" name="Id" value={this.state.customer.Name} onChange={this.changeHandler} /></label>
                    </p>
                    <p>
                        <label>Address:<input type="text" name="address" value={this.state.customer.Address} onChange={this.changeHandler} /></label>
                    </p>
                    <p>
                        <label>Monthly Income:<input type="text" name="monthlyincome" value={this.state.customer.MonthlyIncome} onChange={this.changeHandler} /></label>
                    </p>
                    <p>
                        <label>Contact:<input type="text" name="contact" value={this.state.customer.Contact} onChange={this.changeHandler} /></label>
                    </p>
                    <p>
                        <label>E-mail:<input type="text" name="email" value={this.state.customer.email} onChange={this.changeHandler} /></label>
                    </p>
                </form>
                <button onClick={this.onCreateCustomer}>Submit

                </button>
            </div>
        )
    }
}
export { CustomerDetails };
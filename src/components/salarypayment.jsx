import React, { Component } from 'react';


class SalaryPayment extends Component {

    state = {
        salary: {
            Id: '',
            Name: '',
            Designation: '',
            Salary: '',
            PF: '',
            Date: '',
            email: ''
        }
    }

    changeHandler = (e) => {
        // this.setState({Id:e.target.value});
    }
    onsalaryPayment = () => {
        console.log(this.state.Id);
    }
    render() {
        return (
            <div>
                <h2>
                    Salary Payment
                </h2>
                <form>
                    <p>
                        <label>Customer ID:<input type="text" name="Id" value={this.state.salary.Id} onChange={this.changeHandler} /></label>
                    </p>
                    <p>
                        <label>Name:<input type="text" name="Id" value={this.state.salary.Name} onChange={this.changeHandler} /></label>
                    </p>
                    <p>
                        <label>Designation:<input type="text" name="Designation" value={this.state.salary.Designation} onChange={this.changeHandler} /></label>
                    </p>
                    <p>
                        <label>Salary:<input type="text" name="monthlyincome" value={this.state.salary.Salary} onChange={this.changeHandler} /></label>
                    </p>
                    <p>
                        <label>Date:<input type="text" name="Date" value={this.state.salary.Date} onChange={this.changeHandler} /></label>
                    </p>
                    <p>
                        <label>E-mail:<input type="text" name="email" value={this.state.salary.email} onChange={this.changeHandler} /></label>
                    </p>
                </form>
                <button onClick={this.onsalaryPayment}>Submit

                </button>
            </div>
        )
    }
}
export { SalaryPayment };
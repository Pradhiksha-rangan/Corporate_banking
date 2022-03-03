import React from 'react';
import { Main } from './components/main';
import { SalaryPayment } from './components/salarypayment';
import { CustomerDetails } from './components/customer';
import { AccManagement} from './components/accmanagement';
import { Login } from './components/login';
import { SignUp } from './components/signup';
import { Invoice } from './components/invoice';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/salarypayment" element={<SalaryPayment />} />
        <Route path="/customer" element={<CustomerDetails />} />
        <Route path="/accmanagement" element={<AccManagement />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/invoice" element={<Invoice />} />
 
      </Routes>
    </Router>

  );
}

export default App;
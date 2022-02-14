import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Footer} from "./components/footer";
import { SellerHomePage } from './page/SellerHompage';
import { SellerSignupPage } from './page/SellerSignupPage';
import { SellerSignupCongratuationsPage } from './page/SellerSignupCongratualtionsPage';
import { SellermobileLoginPage } from './page/SellermobileLoginPage';
import { SellerDashboradPage } from './page/SellerDashboard';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<SellerHomePage/>} />
          <Route exact path="/sellersignup" element={<SellerSignupPage/>} />
          <Route exact path="/sellersignupcongratulations" element={<SellerSignupCongratuationsPage/>} />
          <Route exact path="/sellermobilelogin" element={<SellermobileLoginPage/>} />
          <Route exact path="/sellerdashboard" element={<SellerDashboradPage/>} />
        </Routes>
        <Footer />
      </Router>
  );
}
export default App;

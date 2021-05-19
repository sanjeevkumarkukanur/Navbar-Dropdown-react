import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Pages/Products';
import Consulting from './components/Pages/Consulting';
import SignUp from './components/Pages/SignUp';
import Marketing from './components/Pages/Marketing';
import Services from './components/Pages/Services';
import ContactUs from './components/Pages/ContactUs';
import Home from './components/Pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/consulting' exact component={Consulting} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/contact-us' exact component={ContactUs} />
      </Switch>
    </Router>
     
  
  );
}

export default App;

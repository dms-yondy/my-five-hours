import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';


function App() {
  return (
   <div className="container">
    <Router>
        <div className="content-container">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="inner">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </div>
      </div>
      <Footer />
    </Router>
   </div>
  );
}

export default App;

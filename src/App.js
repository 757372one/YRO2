import React, { Component } from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Dash from './components/Dash';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dash} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
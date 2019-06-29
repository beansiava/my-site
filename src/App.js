import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import TimelineItem from './components/timeline';
import Navigation from './components/Navigation';
import Proverbs from './components/Proverbs';
import Home from './views/Home.js';
import Thoughts from './views/Thoughts';
import Footer from './components/Footer';
// Browser Router 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'




class App extends Component{
  render(){
  return (
    <Router>
    <div className="App">
      
      {/* <Navigation></Navigation>
      <Proverbs></Proverbs> */}
    </div>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/thoughts" component={Thoughts}></Route>
    </Switch>
    <Footer/>
    </Router>
  );
  }
}

export default App;

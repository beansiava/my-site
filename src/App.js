import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './views/Landing';
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
      <Route exact path="/" component={Landing}></Route>
    </Switch>
    
    </Router>
  );
  }
}

export default App;

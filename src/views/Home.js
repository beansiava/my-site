import React from 'react';
import Navigation from '../components/Navigation';
import Me from '../components/Me';
import Lifeline from '../components/Lifeline';
import Resume from '../components/Resume';

import Proverbs from '../components/Proverbs';

let myStoryList = [
  {title: "The Alchemist",timeperiod: "Paulo Coelho", story: "During this time..."},
  {title: "The Hobbit",timeperiod: "Paulo Coelho", story: "During this time... "},
  {title: "The Invisible Man",timeperiod: "Paulo Coelho", story: "During this time..."},
]
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="Home">
      <Navigation></Navigation>
      <Me></Me>
      <Resume></Resume>
      {/* <Lifeline books={myStoryList}></Lifeline> */}
    </div>
     );
  }
}



export default Home;
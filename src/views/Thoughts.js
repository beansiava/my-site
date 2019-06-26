import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Proverbs from '../components/Proverbs';
class Thoughts extends Component {
    state = {  }
    componentDidMount() {
       
    }
    render() { 
        return ( 
            <div className="thoughts">
                <Navigation></Navigation>
                <Proverbs></Proverbs>
               
                
            </div>
         );
    }
}
 
export default Thoughts;
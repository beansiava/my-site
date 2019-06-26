import React, { Component } from 'react';

import go from '../images/go.jpg';

class Me extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="me">
            <div className="Image">
                <img src={go}></img>
            </div>
            <div className="intro">
                <h1 className="introText">
                    Hopefully, one day I'll be able to speak practically - like a living proverb.
                </h1>
            </div>
        </div> 
        );
    }
}
 
export default Me;
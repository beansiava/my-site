import React, { Component } from 'react';

import './../css/global.css';
import './../css/landing.css';


import go from './../images/go.jpg';

class Me extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="me">
            <div className='sean'>
                {/* <img className="sean image" src={go}></img> */}
            </div>
            <div className="introContainer">
                <h1 className="introText semibold">
                    The above picture was taken during my study abroad to
                    Chengdu, China. <br /> <br /> I love this photo because it embodies 
                    the value I see in solitude, eastern philosophies, and 
                    strategic thinking.
                </h1>
            </div>
        </div> 
        );
    }
}
 
export default Me;
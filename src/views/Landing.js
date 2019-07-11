import React, {Component} from 'react';

import logo from '../images/logo.png';
import Me from '../components/Me';
import ExternalNav from '../components/landing/ExternalNav';
import Newsletter from '../components/Newsletter';
import Navigation from '../components/Navigation';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    checkbackground(){
        //ToDofind place to hold state of each side
        //call swapbackground() onhover iff background is #000000
    }
    render() { 
        return ( 
            <div className='screenWrapper'>
            <div className='grid-container'>
                <div className='LeftSide' onMouseOver={this.checkbackground}>
                    <img className='logo div' src={logo}></img>
                    <Me />
                    <div className='navContainer div'>
                        <Navigation></Navigation>
                    </div>
                </div>
                <div className='RightSide div' onMouseOver={this.checkbackground}>
                    <ExternalNav/>
                    <div>
                        <p className='resumeText div'>
                            or, if you want to download a boring resume,
                            you can <a className='a' href='../files/Resume_SeanBiava.png'>click here.</a>
                        </p>
                    </div>
                    <div className='inlineContainer div'>
                        <div className='blockItem email div'>
                            <h2 className="introText div"> Oh, I also have a Newsletter</h2>
                            <Newsletter />
                        </div>
                        <div className='blockItem'></div>
                    </div>
                    
                    
                </div>
            </div>
            </div>
         );
    }
}
 
export default Landing;
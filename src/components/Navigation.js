import React, {Component} from 'react';
 import '../css/Navigation.css';
import {logo} from '../logo.svg';
import {Link} from 'react-router-dom';
import ExternalNav from '../components/landing/ExternalNav';
import Social from '../components/social';
import '../css/landing.css'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          toggleLogo: true,
        }
        this.toggleLogo = this.toggleLogo.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
      }
    
      toggleLogo(event) {
        this.setState((prevState) => ({
          toggleLogo: !prevState.toggleLogo
        }));
      }
    
      openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
    
      closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }
      render(){
        return (
            <div>
                {/* Move nav img and "menu" to their own components */}
                {/* <img src={logo} 
                className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'} 
                alt="logo"
                onMouseEnter={this.toggleLogo}
                onMouseLeave={this.toggleLogo}
                onClick={this.openNav}
                /> */}
                <div className='extralight secretText'>
                <p
                    className={this.state.toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown' }
                    onClick={this.openNav}
                >.....(?).....</p>
                </div>
                <div id="myNav" className="overlay">
                        <a className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                        <div className="overlay-content">
                        <h1 className='navItem'> 
                          Surprise!<br/>
                          You found my social media
                        </h1>
                        {/* <Link to="/" >Home</Link>
                        <Link to="/clock" >Clock (delete later)</Link>
                        <Link to="/thoughts">Thoughts</Link> */}
                        <Social />
                        </div>
                </div>
          </div>
        )
      }
}

// const Navigation = (props) => (
    
//   <div id="myNav" className="overlay">
//     {/* <a className="closebtn" onClick={() => props.closeNav()}>&times;</a> */}
//     <div className="overlay-content">
//       <Link to="/" >Home</Link>
//       <Link to="/clock" >Vitamin Juice</Link>
//       <a href="">Clothing</a>
//       <a href="">Supplements</a>
//       <a href="">Contact</a>
//     </div>
//   </div>
// );

export default Navigation;
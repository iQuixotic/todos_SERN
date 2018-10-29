import React, { Component } from "react";
import { Backdrop, Burger,  Sidedrawer, Toolbar } from "../../components";
import { Loader, MQ } from "../../containers";
import './style.css';

/* WRAPS PAGES 
- uses screen size to determine what to render
in regards to navigation */
class Layout extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
    this.sideDrawerToggle = this.sideDrawerToggle.bind(this);
  }

  // animates sidedraw to close
  sideDrawerToggle() {
    const toggle = !this.state.sideDrawerOpen
    const sd = document.getElementById('SD')
    if(this.state.sideDrawerOpen){
      sd.className += ' moveOut'
    setTimeout(() => {
      this.setState({ sideDrawerOpen: toggle })      
    }, 1000);
  } else {
    this.setState({ sideDrawerOpen: toggle })      
  }

  }

  render() {
    return (
            <div className='Layout'>
              <MQ lowerLimit={600}>
                <Toolbar /> 
              </MQ>
              <MQ upperLimit={599}>
                {!this.state.sideDrawerOpen ?                  
                <div className='mobile-burger'><Burger size='4x' onClick={this.sideDrawerToggle}/></div> :
                <div onClick={this.sideDrawerToggle}><Sidedrawer/><Backdrop/></div>                            
                }
              </MQ>
              <div className='under-nav'>
                {this.props.children}
              </div>
              <div className='above-footer' />              
            </div>          
    );
  }
}

export default Loader(Layout);
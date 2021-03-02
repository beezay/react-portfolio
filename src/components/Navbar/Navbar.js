import React, { Component } from 'react'
import '../../styles/Navbar/navbar.css'
import activeStyles from '../../styles/ActiveNav'
import navList from '../../data/nav-data'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Skills from '../Pages/Skills'
import Contact from '../Pages/Contact'




class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showPage: 'Home',
        }
    }
    

    render() {
        return (
            <>
                {/* <!-- *********NAVBAR*************** --> */}
                <nav className="navbar">
                    <div className="max-width">
                        <div className="logo"><button onClick={() => this.setState(
                                    {
                                        showPage: 'Home'
                                    }
                                )}>Portfo<span>lio.</span> </button></div>
                        <ul className="menu">
                            {navList.map(list => {
                               return (
                                <li><button style={this.state.showPage === list.name ? activeStyles: {} } onClick={() => this.setState(
                                    {
                                        showPage: list.name
                                    }
                                )}>{list.name}</button></li>
                               ) 
                            } )}

                           
                        </ul>
                        {/* <div className="menu-btn">
                            <i class="fas fa-bars"></i>
                        </div> */}
                    </div>
                </nav>
                {/* <Home/> */}
                {this.state.showPage === 'Home' && <Home/>}
                {this.state.showPage === 'About' && <About/>}
                {this.state.showPage === 'Skills' && <Skills/>}
                {this.state.showPage === 'Contact' && <Contact/>}
                {/* <About/> */}
            </>
        )
    }
}

export default Navbar




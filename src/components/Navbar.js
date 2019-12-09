import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = function(){
    return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                     
                  <div className="container">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto px-5">
                                <li class="nav-item active">
                                    <Link to="/" class="nav-link" >Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About Us</Link>
                                </li>
                                
                                <li class="nav-item">
                                    <Link class="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar

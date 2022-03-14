import React from 'react';
import {Link} from 'react-router-dom';

let NavBar =() => {
    return(
        <React.Fragment>
             <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <div className="container">
                <Link to={'/'} className="navbar-brand">
                    <i className="fa-solid fa-address-book"/><span className="navtext ms-2">My Contacts</span></Link>
            </div>
            </nav>
        </React.Fragment>
    )
};

export default NavBar;
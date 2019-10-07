import React from 'react';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import './NavBar.css'
function NavBarSub(){
    return(
    <div className="it-header-wrapper col-md-12 col-lg-12" >
        <div className="it-nav-wrapper  ">
            <div className="it-header-navbar-wrapper red-rome ">
            <div className="container red-rome">
                <div className="row red-rome">
                <div className="col-12 red-rome" >
                    <nav className="navbar navbar-expand-lg has-megamenu red-rome">
                    <button className="custom-navbar-toggler" type="button" aria-controls="nav02" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav02">
                        <svg className="icon">
                        <use   href="/bootstrap-italia/dist/svg/sprite.svg#it-burger"></use>
                        </svg>
                    </button>
                    <div className="navbar-collapsable" id="nav02" >
                        <div className="overlay" style={{display: "none"}}></div>
                        <div className="close-div sr-only">
                        <button className="btn close-menu" type="button"><span className="it-close"></span>close</button>
                        </div>
                        <div className="menu-wrapper">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><a  className="nav-link" href="/"><span>Home </span><span className="sr-only">current</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><span>Profile </span></a></li>
                            <li className="nav-item"><a className="nav-link" href="/upload"><span>Add Resources </span></a></li>
                            <li className="nav-item"><a className="nav-link" href="/streaming"><span>Add Streaming</span></a></li>

                           
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}
export default NavBarSub;


import React from 'react';
import { Icon } from 'design-react-kit';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'bootstrap-italia/dist/svg/sprite.svg';

import './NavBar.css'
import logo from '../../icons/logo_roma.png'
import NavBarSub from './index'

const show=true;
function NavBar() {
    return (
        <div >
            <div className="it-header-center-wrapper it-large-header red-rome col-md-12 col-lg-12 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <div className="it-header-center-content-wrapper">
                                <div className="it-brand-wrapper col-sm-8">
                                    <a href="/">
                                        <div className="city-logo ">
                                            <img className="city-logo" src={logo} />
                                        </div>
                                    </a>
                                </div>
                                <div className="it-right-zone col-sm-4">
                                    <div className="it-socials d-none d-md-flex">
                                        <span>Seguici su</span>
                                        <ul>
                                            <li>
                                                <a href="/" aria-label="Twitter" target="_blank">
                                                    <Icon
                                                        className='icon'
                                                        color=""
                                                        icon="it-facebook"
                                                        padding={false}
                                                        size=""
                                                    />
                                                </a>

                                            </li>

                                            <li>
                                                <a href="#" aria-label="Twitter" target="_blank">
                                                    <Icon
                                                        className='icon'
                                                        color=""
                                                        icon="it-twitter"
                                                        padding={false}
                                                        size=""
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
            {show ? (
                <div className ="row " style={{marginTop:'1px',}}>
                <NavBarSub />
            </div>):(<div></div>)
            }
            
        </div >
    );
}
export default NavBar;


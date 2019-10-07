import React from 'react';
import {  Router, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import {Login} from './components/Login/login';
import {ProtectedRoutes} from './components/ProtectedRoutes/ProtectedRoutes'
import Home from './components/Home'
import NavBar from './components/NavBar/test'
import UserManagment from './components/UserManagment/UserManagment'
import NotFound  from './components/NotFound/NotFound'
import { history } from './helpers';
import { alertActions } from './actions';
import Upload from './components/Upload/Upload'
import Streaming from './components/Streaming/Streaming'

import Footer from './components/Footer'
import './App.css'
//import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';

//import "./scss/bootstrap-italia-custom.scss";
//import 'bootstrap-italia/dist/css/bootstrap-italia.min.css ' ;


class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change

        dispatch(alertActions.clear());
    });
    //istory.push(window.location)

}
render(){
  const { alert } = this.props;

  return (
    <div className="container col-md-12 col-lg-12 col-sm-12" style={{ padding:"0px"}}>
      <div className="row" >
        <div className="col-lg-12" >
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12" style={{ paddingTop:"50px"}}>
          <Router history={history} >
            <div  >
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>

                <Route path="/login">
                  <Login/>
                </Route>
                
                <Route path="/Upload" >
                  <Upload/>
                </Route>

                <Route path="/Streaming" >
                  <div style={{marginLeft:"auto",marginRight:"auto"}}>
                    <Streaming/>
                  </div>          
                </Route>

                <ProtectedRoutes exact path='/UserManagment' component={UserManagment} />

                <Route component={NotFound} />

              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );}
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
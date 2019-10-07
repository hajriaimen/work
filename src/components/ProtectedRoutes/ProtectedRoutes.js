import React from 'react';
import { Route, Redirect } from 'react-router-dom';

let userCook = JSON.parse(localStorage.getItem('user'));

export const ProtectedRoutes = ({ component: Component, ...rest }) => (
        
    <Route {...rest} render={props => (
        (userCook && userCook.role==='admin')
        ? <Component {...props} />
        : <Redirect to={{ pathname: 'login', state: { from: props.location } }} />
    )} 
    />

); 

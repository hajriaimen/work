import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";
import { Icon } from 'design-react-kit';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'bootstrap-italia/dist/svg/sprite.svg';
import '../../App.css'
 

function NotFound() {
    return (
        <div className="Grid">
            <div className="Grid-cell Grid-cell--center u-size10of12 u-sm-size8of12 u-md-size5of12u-lg-size4of12">
                <div className="ErrorPage u-textCenter u-text-xxs u-text-md-xs u-text-lg-s">
                    <h1 className="ErrorPage-title">404</h1>
                    <h2 className="ErrorPage-subtitle">Pagina non trovata</h2>
                    <p className="Prose u-margin-r-all">Oops! La pagina che cerchi non è stata
                    trovata, <a href="javascript:history.back();" title="Torna alla pagina
                    precedente">torna indietro</a> o utilizza il menu per continuare la navigazione.</p>
                </div>
            </div>
        </div>
    );
}
export default NotFound;
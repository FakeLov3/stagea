import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './templates/Landing';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Home} />
        </BrowserRouter>
    )
}
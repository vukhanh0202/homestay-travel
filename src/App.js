import { createBrowserHistory } from "history";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './routing/routing';

const history = createBrowserHistory();
function App(props) {
    return (
        <div>
            <BrowserRouter history={history}>
                <Routing />
            </BrowserRouter>
        </div>
    );
}

export default App;



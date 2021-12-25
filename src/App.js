import { createBrowserHistory } from "history";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './routing/routing';

const history = createBrowserHistory();
function App(props) {

    return (
        <div style={{position: 'relative'}}>
            <BrowserRouter history={history}>
                <Routing />
            </BrowserRouter>
            {/* <BrowserRouter>
                <Header setContent={setContent} />
                <PreLoader />
                {content}
                <Footer />
            </BrowserRouter> */}
        </div>
    );
}

export default App;



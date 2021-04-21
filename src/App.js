import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PreLoader from './components/PreLoader';


function App(props) {

    const [content, setContent] = useState();

    return (
        <div>
            <BrowserRouter>
                <Header setContent={setContent} />
                <PreLoader />
                {content}
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;



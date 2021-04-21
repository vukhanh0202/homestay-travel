import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header';
import jQuery from 'jquery';
import Footer from './components/Footer';
import Rooms from './pages/Rooms';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import ROUTES, { RenderRoutes } from './router/routerConfig';
import PreLoader from './components/PreLoader';


const Home = React.lazy(() => import('./pages/Home/index'));

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



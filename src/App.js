import './App.css';
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header';
import jQuery from 'jquery';
import Footer from './components/Footer';
import Rooms from './pages/Rooms';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';


const Home = React.lazy(() => import('./pages/Home/index'));

function App() {


    return (
        <div className="App">
            <Header />
            <Suspense fallback={<div>Loading....</div>}>
                <BrowserRouter>
                    <ul>
                        <li><Link to="/home">Go to home</Link></li>
                    </ul>
                    <Switch>
                        <Redirect exact from="/" to="/home"></Redirect>
                        <Route exact path="/home" component={Blogs}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </BrowserRouter>
            </Suspense>
            <Footer />
        </div>
    );
}

export default App;

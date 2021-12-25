import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import RoomDetail from '../pages/RoomDetail';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Payment from '../pages/Payment';
import ScrollToTop from './ScrollToTop';
import WrapperContent from './../router/WrapperContent'
import Rooms from '../pages/Rooms';
import Favourite from '../pages/Favourite';
import BackTop from '../components/BackTop';

function Routing() {

    return (
        <div className="root-wrapper" style={{position: 'relative'}}>
            <ScrollToTop>
                <Switch>
                    <div className="root">
                        <div>
                            <Route path={["/trang-chu", "/"]} exact>
                                <WrapperContent>
                                    <Home />
                                </WrapperContent>
                            </Route>
                            <Route path="/chi-tiet/:id" >
                                <WrapperContent>
                                    <RoomDetail />
                                </WrapperContent>
                            </Route>
                            <Route path="/danh-sach" >
                                <WrapperContent>
                                    <Rooms />
                                </WrapperContent>
                            </Route>
                            <Route path="/danh-sach-yeu-thich" >
                                <WrapperContent>
                                    <Favourite />
                                </WrapperContent>
                            </Route>
                            <Route path="/lien-lac" >
                                <WrapperContent>
                                    <Contact />
                                </WrapperContent>
                            </Route>
                            <Route path="/thanh-toan" >
                                <WrapperContent>
                                    <Payment />
                                </WrapperContent>
                            </Route>
                            <Route path="/dang-nhap" >
                                <WrapperContent disableTop={true} disableBottom={true}>
                                    <Login />
                                </WrapperContent>
                            </Route>
                            <Route path="/dang-ky" >
                                <WrapperContent disableTop={true} disableBottom={true}>
                                    <Register />
                                </WrapperContent>
                            </Route>
                        </div>
                    </div>
                </Switch>
            </ScrollToTop>
            <BackTop />
        </div>
    )
}

export default Routing

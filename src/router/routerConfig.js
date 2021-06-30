import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import NotFound from "../components/NotFound/NotFound";
import RoomsContainer from "../containers/RoomsContainer";
import AboutUs from "../pages/AboutUs";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const ROUTES = [
    { path: "/", key: "HOME", display: "Trang Chủ", exact: true, component: Home },
    {
        path: "/cho-o",
        key: "ROOMS",
        display: "Chỗ Ở",
        component: RoomsContainer
        // component: RenderRoutes,
        // routes: [
        //     {
        //         path: "/app",
        //         key: "APP_ROOT",
        //         exact: true,
        //         component: AboutUs,
        //     },
        //     {
        //         path: "/app/page",
        //         key: "APP_PAGE",
        //         exact: true,
        //         component: () => <h1>App Page</h1>,
        //     },
        // ],
    },
    {
        path: "/about-us",
        key: "ABOUTUS",
        display: "About Us",
        component: AboutUs
    },
    {
        path: "/blogs",
        key: "BLOGS",
        display: "Blogs",
        component: Blogs
    },
    {
        path: "/contact",
        key: "CONTACT",
        display: "Contact",
        component: Contact
    },
];

export default ROUTES;


/**
 * Render a route with potential sub routes
 */
function RouteWithSubRoutes(route) {
    useEffect(() => {
        route.setPath(route.path);
    }, [])
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes}
            />}
        />
    );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes, setPath }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes setPath={setPath} key={route.key} {...route} />;
            })}
            <Route component={NotFound} />
        </Switch>
    );
}
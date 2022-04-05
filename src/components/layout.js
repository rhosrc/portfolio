import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Site from '../pages/site'
import Blog from '../pages/blog'
import SinglePost  from '../pages/singlepost'



const Layout = () => {
    return (
        <>
        <Switch>
            <Route exact path='/'>
                <Site />
            </Route>
            <Route exact path='/posts'>
                <Blog />
            </Route>
            <Route path='/posts/:slug'>
                <SinglePost />
            </Route>
        </Switch>
        </>
    )
}

export default Layout;
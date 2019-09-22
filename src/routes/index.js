import React from 'react';
import { Router, Route, Switch, } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from 'core/common/Layout/Main';
import PrivateRoute from '../core/common/PrivateRoute';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import HooksPage from '../pages/HooksPage';


export const history = createBrowserHistory();

const Routes = () => {


  return (
        <Router history={ history }>
            <Switch>
                <Main>
                    <Switch>
                        <Route exact path="/" component = { HomePage } />
                        <Route exact path="/news" component = { NewsPage} />
                        <Route exact  path="/login" component = { LoginPage} />
                        <PrivateRoute exact path="/profile" component = { ProfilePage } />
                        <PrivateRoute exact path="/profile/:id" component = { ProfilePage } />
                        <Route exact path="/hooksPage" component = { HooksPage} />
                        <Route component={ NotFoundPage } />
                    </Switch>
                </Main>
            </Switch>
        </Router>
  )
};

export default Routes

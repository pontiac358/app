import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from "react-redux";



const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route  {...rest} render={(props) => (
        rest.isAuth
            ? <Component  {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
);

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool
};

const mapStateToProps = ({ user }) => ({
    isAuth: Boolean(user.id)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
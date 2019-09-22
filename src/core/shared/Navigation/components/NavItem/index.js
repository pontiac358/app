import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, NavBtn } from './styles';


const NavItem = ({to, title, ...rest}) => {

    return (
        <>
            {
                to ? <NavLink to={to} { ...rest }> { title } </NavLink> : <NavBtn { ...rest }> { title } </NavBtn>
            }
        </>
    );
};

NavItem.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
};

export default NavItem;
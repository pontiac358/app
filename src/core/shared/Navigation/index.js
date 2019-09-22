import React from 'react';
import { connect } from "react-redux";
import Profile from 'modules/Profile';
import NavItem from 'core/shared/Navigation/components/NavItem';
import { NavWrap } from './styles';
import PropTypes from "prop-types";


const Navigation = ({ logout, id }) => {
    const logOutHandler = () => {
        logout()
    };

    return (
        <NavWrap>
            <NavItem to="/" title={'Главная'} />
            <NavItem to="/news" title={'Новости'} />
            <NavItem to={`/profile/${ id ? id : '' }`} title={'Профиль'} />
            <NavItem to="/chetocheto" title={'404'} />
            <NavItem to="/profile/2" title={'Профиль не найден'} />
            <NavItem to="/hooksPage" title={'Hooks page news'} />
            {
                id ? <NavItem onClick={ logOutHandler } title={'Выход'} /> : <NavItem to="/login" title={'Вход'} />
            }
        </NavWrap>
    )
};

Navigation.defaultProps = {
    logout: () => {},
};


Navigation.propTypes = {
    logout: PropTypes.func,
    id: PropTypes.number,
};

const mapStateToProps = ({ user: { id } }) => ({
    id,
});

const mapDispatchToProps = {
    logout: Profile.actions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
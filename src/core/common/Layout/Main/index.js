import React from 'react';
import PropTypes from 'prop-types';
import Header from 'core/shared/Header';
import { Wrapper } from './styles';


export const Main = ({ children }) => {

    return (
        <Wrapper>
            <Header/>
            <main>
                { children }
            </main>
        </Wrapper>
    );
};

Main.propTypes = {
    children: PropTypes.object
};


export default Main;
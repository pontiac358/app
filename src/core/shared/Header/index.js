import React from 'react';
import Navigation from 'core/shared/Navigation';
import Logo from 'core/shared/Logo';
import { Wrapper } from './styles';


const Header = () => {

    return (
        <div>
            <Wrapper>
                <Logo />
                <Navigation/>
            </Wrapper>
        </div>
    );
};


export default Header;
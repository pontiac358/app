import React from 'react';
import { Wrapper, LogoLink } from './styles';


const Logo = () => {

    return (
        <Wrapper>
            <LogoLink to={'/'}> LOGO </LogoLink>
        </Wrapper>
    );
};


export default Logo;
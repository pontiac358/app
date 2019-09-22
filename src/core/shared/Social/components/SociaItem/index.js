import React from 'react';
import PropTypes from 'prop-types';
import { ImgStyled } from './styles';


const Socialtem = ({ href, label, colorIcon, size }) => {
    const iconsName = {
        'vk': 'vkontakte',
        'web': 'web',
        'telegram': 'telegram-app',
        'twitter': 'twitter',
        'youtube': 'youtube',
        'twitch': 'twitch',
    };
    const getIcon = (label) => {
        const name = iconsName[label];
        const link = `https://img.icons8.com/windows/${ size }/${ colorIcon }/${ name }.png`;

        return <ImgStyled src={ link } />
    };

    return <a href={ href } target='_blank'> { getIcon(label) } </a>
};

Socialtem.defaultProps = {
    size: 32,
    color: '000000',
    href: '#'
};


Socialtem.propTypes = {
    href: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
};


export default Socialtem;
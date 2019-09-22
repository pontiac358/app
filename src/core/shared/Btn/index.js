import React from 'react';
import { BtnLinkStyled, BtnStyled } from './styles';
import PropTypes from "prop-types";


const Btn = ({ onClick, title, to, disabled, ...rest }) => {

    return to ? <BtnLinkStyled className='btn' to={to}>{title}</BtnLinkStyled> :
        <BtnStyled disabled={disabled} className='btn' onClick={onClick}>{ title }</BtnStyled>
};

Btn.defaultProps = {
    onClick: () => {},
    title: 'Button',
};

Btn.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Btn;
import React from 'react';
import { InputStyle, ErrorStyle } from './styles';
import PropTypes from "prop-types";


const Input = ({ valid, ...rest }) => {

    const renderError = () => {

        return valid && <ErrorStyle> { valid.map((item, i) => <div key={ i }>{ item }</div>) }</ErrorStyle>
    };

    return (
        <div>
            <InputStyle { ...rest } />
            { renderError() }
        </div>
    )
};

Input.propTypes = {
    valid: PropTypes.array
};


export default Input;
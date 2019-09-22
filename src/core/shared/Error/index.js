import React from 'react';
import PropTypes from 'prop-types';
import messages from 'helper/validation/messages';
import { Wrapper } from './styles';


export const Error = ({ error }) => {

    const renderError = () => {
        if(!error) return;

        const mess =
            error.status && error.status === 'err' ?
                messages[error.message]  :
            error.status  ?  messages[error.status]
                : messages.default;

       return <Wrapper>{ mess }</Wrapper>
    };


    return (
        <>
            {
                renderError()
            }
        </>
    );
};

Error.propTypes = {
    error: PropTypes.object
};

export default Error;
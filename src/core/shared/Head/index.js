import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styles'


const Head = ({ title }) => {

    return (
        <Title>
            { title }
        </Title>
    );
};

Head.propTypes = {
    title: PropTypes.string
};

export default Head;
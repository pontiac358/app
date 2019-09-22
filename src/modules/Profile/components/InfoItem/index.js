import React from 'react';
import PropTypes from "prop-types";
import { Label, Wrapper, Value } from './styles';


const InfoItem = ({ label, value }) => {

    return (
        <Wrapper>
            <Label>{label}</Label>
            <Value>{value}</Value>
        </Wrapper>
    )
};


InfoItem.propTypes = {
    label: PropTypes.string,
};

export default InfoItem
import React from 'react';
import SocialItem from './components/SociaItem';
import { SocialWrap } from './styles';
import PropTypes from "prop-types";


const Social = ({ socialList, size }) => {


    return (
        <SocialWrap>
            {
                socialList && socialList.map((item, key) => <SocialItem key={key} size={size} href={item.link} label={item.label} />)
            }
        </SocialWrap>
    )
};

Social.defaultProps = {
    size: 32,
};

Social.propTypes = {
    socialList: PropTypes.array,
    size: PropTypes.number,
};

export default Social
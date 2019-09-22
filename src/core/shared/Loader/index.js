import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';


export const Loader = ({ type, color, size }) => {

    const renderLoader = () => {
        let template = '';

        switch (type) {
            case 'dots' :
                template = <svg style={{width: size, height: size}} xmlns="http://www.w3.org/2000/svg" width="120" height="30" viewBox="0 0 120 30" fill={color}>
                    <circle cx="15" cy="15" r="12.4807">
                        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/>
                        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="60" cy="15" r="11.5193" fillOpacity="0.3">
                        <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"/>
                        <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="105" cy="15" r="12.4807">
                        <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/>
                        <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/>
                    </circle>
                </svg>
                    break
            case 'cicle' :
                template = <svg xmlns="http://www.w3.org/2000/svg" width='58' height='58' viewBox={`0 0 58 58`}>
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(2 1)" stroke={color} stroke-width="1.5">
                            <circle cx="42.601" cy="11.462" r="5" fillOpacity="1" fill={color}>
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="1;0;0;0;0;0;0;0" calcMode="linear" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="49.063" cy="27.063" r="5" fillOpacity="0" fill={color}>
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;1;0;0;0;0;0;0" calcMode="linear" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="42.601" cy="42.663" r="5" fillOpacity="0" fill={color}>
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;1;0;0;0;0;0" calcMode="linear" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="27" cy="49.125" r="5" fillOpacity="0" fill={color}>
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;1;0;0;0;0" calcMode="linear" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="11.399" cy="42.663" r="5" fillOpacity="0" fill={color}>
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;1;0;0;0" calcMode="linear" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="4.938" cy="27.063" r="5" fillOpacity="0" fill={color}>
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;1;0;0" calcMode="linear" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="11.399" cy="11.462" r="5" fillOpacity="0" fill={color}>
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;0;1;0" calcMode="linear" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="27" cy="5" r="5" fillOpacity="0" fill={color}>
                                <animate attributeName="fill-opacity" begin="0s" dur="1.3s" values="0;0;0;0;0;0;0;1" calcMode="linear" repeatCount="indefinite"/>
                            </circle>
                        </g>
                    </g>
                </svg>
                break;
            default  :
                template = <>'Loading...'</>
            }


            return template
    };


    return (
        <Wrapper>
            {
                renderLoader()
            }
        </Wrapper>
    );
};

Loader.defaultProps = {
    color: '#000000',
    size: '50px',
};


Loader.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
};


export default Loader;
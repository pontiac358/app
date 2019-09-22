import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const styles = `
    padding: 0 28px;
    height: 44px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
    background: #000000;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #FFFFFF;
`;

export const BtnLinkStyled = styled(Link)`${styles}`;
export const BtnStyled = styled.button`${styles}`;


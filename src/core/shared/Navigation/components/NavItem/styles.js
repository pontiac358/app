import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


const styles= `
    margin-right: 25px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #000000;
    text-decoration: none;
    background: none;
    border:0;
    padding: 0;
    display: block;
    cursor:pointer;
    &:last-child{
        margin-right:0
    }
`;

export const NavLink = styled(Link)`${styles}`;
export const NavBtn = styled.button`${styles}`;
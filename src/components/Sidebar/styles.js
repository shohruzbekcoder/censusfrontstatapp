import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

export const SidebarWrapper = styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(189, 205, 255, 0.71);
    border: none;
    height: 100vh;
    min-width: 329px;
    display: block;
    padding-top: 60px;
    z-index: 2;
    overflow: auto;
`;

export const SidebarLogo = styled.div`
    width: 100%;
    text-align: center;
`;

export const SidebarMenu = styled.ul`
    padding-top: 47px;
    padding-left: 83px;
`;

export const SidebarMenuItem = styled.li`
    padding-bottom: 10px;
`;

export const ActiveLink = styled(Link)`
    display: block;
    width: 100%;
    background: #F6F9FF;
    border-radius: 5px 0px 0px 5px;
    padding: 13px 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    color: ${props => props.theme.main_color};
    padding-left: 14px;
    position: relative;
    ::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 50px;
        background-color: ${props => props.theme.main_color};
        border-radius: 5px 0px 0px 5px;
    }
`;

export const UnActiveLink = styled(Link)`
    display: block;
    width: 100%;
    padding: 13px 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    color: ${props => props.theme.main_color};
    padding-left: 14px;
`;
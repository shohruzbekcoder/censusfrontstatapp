import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';

export const NotificationWrapper = styled.div`
    width: 439px;
    background: #FFFFFF;
    border: 1px solid ${props => props.theme.color.light_blue1};
    padding: 30px;
    position: fixed;
    top: 87px;
    right: 0;
    height: calc(100vh - 87px);
    overflow: auto;
`;

export const NotificationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    h4 { 
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        color: ${props => props.theme.black}
    }
`;

export const NotificationBody = styled.div`
    width: 100%;
`;

export const NotificationInfor = styled.div`
    width: 100%;
    border-radius: 5px;
    border: 1px solid  ${props => props.theme.border};
    background: ${props => props.theme.background};
    box-shadow: ${props => props.theme.color.shadow3};
    padding: 14px 18px 16px 19px;
    margin-bottom: 15px;
`;

export const NotificationInforTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    h5{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        color: #1B253A;
    }
    span{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: ${props => props.theme.black}
    }
`;

export const NotificationInforBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #BCBFD8;
    }
`;

export const MyIconButton = styled(IconButton)`
    padding: 0;
`;

export const MyCloseIcon = styled(CloseIcon)`
    width: 15px;
    height: 15px;
    color: ${props => props.theme.grey}
`;

export const NotificationStatusWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span{
       padding-left: 6px;
       color: ${props => props.theme.border}
    }
`;
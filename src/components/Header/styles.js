import styled from 'styled-components'
import OutlinedInput from '@mui/material/OutlinedInput'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 87px;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    padding-left: 45px;
    justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
    padding-left: 329px;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 1;
`;

export const MyOutlinedInput = styled(OutlinedInput)`
    width: 339px;
    height: 47px;
    border-radius: 10px;
    padding-right: 15px;
    fieldset {
        border-color: #DDDDDD;
    };
    border-color: #DDDDDD;
    input {
        padding-left: 20px 11px;
    }
`;

export const HeaderRight = styled.div`
    padding-right: 94px;
    display: flex;
`;

export const HeaderNotification = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background-color: ${props => props.theme.color.light_blue2};
    margin-left: 22px;
`;

export const HeaderPersonnel = styled.div`
    width: 263px;
    height: 50px;
    border-radius: 50px;
    background-color: ${props => props.theme.color.light_blue2};
    margin-left: 13px;
    display: flex;
    align-items: center;
    padding-left: 13px;
`;

export const HeaderPersonnelImg = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 1.5px solid ${props => props.theme.color.light_blue1};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    img{
        max-width: 100%;
        max-height: 100%;
    }
`;

export const HeaderPersonnelText = styled.div`
    margin-left: 8px;
    color: ${props => props.theme.color.black};
    p{
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.2px;
    }
    span{
        display: inline-block;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.2px;
        margin-top: -2px;
    }
`;
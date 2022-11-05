import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import search from '../../images/icons/icon/search.png'
import notification2 from './../../images/icons/icon/notifications/new.png';
import avatar from './../../images/icons/icon/user/normal.png';
import {
  HeaderWrapper,
  MyOutlinedInput,
  HeaderRight,
  HeaderNotification,
  HeaderPersonnel,
  HeaderPersonnelImg,
  HeaderPersonnelText,
  HeaderContainer
} from './styles';
import HeaderSettings from '../HeaderSettings';


export default function Header() {


  return (
    <HeaderWrapper>
      <HeaderContainer>
        <MyOutlinedInput
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end">
            <img src={search} alt="search"/>
          </InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          size="small"
          placeholder="Qidiruv"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
        <HeaderRight>
          <HeaderSettings/>
          <HeaderNotification>
            <img src={notification2} alt="notification"/>
          </HeaderNotification>
          <HeaderPersonnel>
            <HeaderPersonnelImg>
              <img src={avatar} alt="personnel"/>
            </HeaderPersonnelImg>
            <HeaderPersonnelText>
              <p>A'zam Mamatmurodov</p>
              <span>Respondent</span>
            </HeaderPersonnelText>
          </HeaderPersonnel>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

import React from 'react'
import theme from '../../theme/defaultTheme'
import { 
  NotificationHeader, 
  NotificationWrapper, 
  MyIconButton, 
  MyCloseIcon, 
  NotificationBody, 
  NotificationInfor,
  NotificationInforTop,
  NotificationInforBottom,
  NotificationStatusWrapper
} from './styles'

NotificationInfor.defaultProps = {
  theme: {
    border: `${theme.grey_iconc}`,
    background: `linear-gradient(180deg, #FAFCFF 0%, #FFFFFF 100%)`
  }
}

const theme1 = {
  border: `${theme.green}`,
  background: `#F4FFFA`
}

const theme2 = {
  border: `${theme.orange}`,
  background: `#FDF7F4`
}

const theme3 = {
  border: `${theme.red}`,
  background: `#FFF6F5`
}

export default function LastNotification() {
  return (
    <NotificationWrapper>
        <NotificationHeader>
            <h4>Last notifications</h4>
            <MyIconButton>
              <MyCloseIcon/>
            </MyIconButton>
        </NotificationHeader>
        <NotificationBody>

          <Notifications1/>
          <Notifications2/>
          <Notifications3/>
          <Notifications4/>
          <Notifications5/>

          <Notifications1/>
          <Notifications2/>
          <Notifications3/>
          <Notifications4/>
          <Notifications5/>

          <Notifications1/>
          <Notifications2/>
          <Notifications3/>
          <Notifications4/>
          <Notifications5/>

          <Notifications1/>
          <Notifications2/>
          <Notifications3/>
          <Notifications4/>
          <Notifications5/>

        </NotificationBody>
    </NotificationWrapper>
  )
}


const Notifications1 = () => {
  return (
    <NotificationInfor theme={theme1}>
      <NotificationInforTop>
        <h5>To’dirilgan forma nomi</h5>
        <img src={require('./../../images/icons/icon/delete/normal.png')} alt="delete"/>
      </NotificationInforTop>
      <NotificationInforBottom>
        <span>Siz to'ldirgan shaxsga doir forma qabul qilindi</span>
        <div>
          <img src={require('./../../images/icons/icon/check.png')} alt="check"/>
          <span></span>
        </div>
      </NotificationInforBottom>
    </NotificationInfor>
  )
}

const Notifications2 = () => {
  return (
    <NotificationInfor theme={theme2}>
      <NotificationInforTop>
        <h5>To’dirilgan forma nomi</h5>
        <span>2 kun minut oldin</span>
      </NotificationInforTop>
      <NotificationInforBottom>
        <span>Siz to'ldirgan shaxsga doir forma qabul qilindi</span>
        <NotificationStatusWrapper theme={theme2}>
          <img src={require('./../../images/icons/icon/waiting.png')} alt="check"/>
          <span>Cancle</span>
        </NotificationStatusWrapper>
      </NotificationInforBottom>
    </NotificationInfor>
  )
}

const Notifications3 = () => {
  return (
    <NotificationInfor>
      <NotificationInforTop>
        <h5>To’dirilgan forma nomi</h5>
        <span>2 kun minut oldin</span>
      </NotificationInforTop>
      <NotificationInforBottom>
        <span>Siz to'ldirgan shaxsga doir forma qabul qilindi</span>
        <NotificationStatusWrapper>
          <img src={require('./../../images/icons/icon/info/normal.png')} alt="check"/>
          <span>Cancle</span>
        </NotificationStatusWrapper>
      </NotificationInforBottom>
    </NotificationInfor>
  )
}

const Notifications4 = () => {
  return (
    <NotificationInfor theme={theme3}>
      <NotificationInforTop>
        <h5>To’dirilgan forma nomi</h5>
        <span>2 kun minut oldin</span>
      </NotificationInforTop>
      <NotificationInforBottom>
        <span>Siz to'ldirgan shaxsga doir forma qabul qilindi</span>
        <NotificationStatusWrapper theme={theme3}>
          <img src={require('./../../images/icons/icon/cancel.png')} alt="check"/>
          <span>Cancle</span>
        </NotificationStatusWrapper>
      </NotificationInforBottom>
    </NotificationInfor>
  )
}

const Notifications5 = () => {
  return (
    <NotificationInfor theme={theme1}>
      <NotificationInforTop>
        <h5>To’dirilgan forma nomi</h5>
        <span>2 kun minut oldin</span>
      </NotificationInforTop>
      <NotificationInforBottom>
        <span>Siz to'ldirgan shaxsga doir forma qabul qilindi</span>
        <NotificationStatusWrapper theme={theme1}>
          <img src={require('./../../images/icons/icon/check.png')} alt="check"/>
          <span>Tasdiqlandi</span>
        </NotificationStatusWrapper>
      </NotificationInforBottom>
    </NotificationInfor>
  )
}
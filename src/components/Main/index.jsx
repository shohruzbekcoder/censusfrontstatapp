import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom'
import Header from '../Header';
import LastNotification from '../LastNotification';
import { MainWrapper } from './styles';

function ResponsiveDrawer(props) {
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Sidebar/>
      <Box
        component="main"
        sx={{ width: '100%', marginLeft: '329px'}}
      >
        <Header/>
        <MainWrapper takeViewportHeight>
          <Outlet/>
          {/* <LastNotification/> */}
        </MainWrapper>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../../images/hootstory-logo.png'
import './Header.css'


const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar id="app-bar" position="static" style={{backgroundColor: "#242526"}}>
                <Toolbar variant="dense">
                    <img src={logo} alt="" style={{margin: "auto", padding: "2px 0px"}} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
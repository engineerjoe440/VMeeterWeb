/*******************************************************************************
 * AppBar.js
 * 
 * Application bar (header-bar) to provide selection options for the various
 * "things" that should be accessible in the application.
 ******************************************************************************/
 import * as React from 'react';
 import AppBar from '@mui/material/AppBar';
 import Box from '@mui/material/Box';
 import Toolbar from '@mui/material/Toolbar';
 import Typography from '@mui/material/Typography';
 import IconButton from '@mui/material/IconButton';
 import MenuIcon from '@mui/icons-material/Menu';
 import Menu from '@mui/material/Menu';
 import MenuItem from '@mui/material/MenuItem';
 import Fade from '@mui/material/Fade';
 
 export default function VoiceMeeterAppBar() {
 
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleMenuClick = (event) => {
     setAnchorEl(event.currentTarget);
   };

   const handleMenuClose = () => {
     setAnchorEl(null);
   };
 
   return (
     <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
         <Toolbar>
           <IconButton
             id="menu-button"
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
             aria-controls={open ? 'fade-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleMenuClick}
           >
             <MenuIcon />
           </IconButton>
           <Menu
             id="fade-menu"
             MenuListProps={{
               'aria-labelledby': 'fade-button',
             }}
             anchorEl={anchorEl}
             open={open}
             onClose={handleMenuClose}
             TransitionComponent={Fade}
           >
             <MenuItem>Placeholder</MenuItem>
           </Menu>
           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
             <img alt="VoiceMeeter" src="/static/react/vb-audio-voicemeeter-logo.png" width="200" />
             Web
           </Typography>
         </Toolbar>
       </AppBar>
     </Box>
   );
 }
 
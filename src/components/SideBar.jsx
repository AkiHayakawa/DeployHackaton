import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import GameSideBar from './GameSideBar';
import FilterGame from './FilterGame'
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    
    left: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box 
    
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
     
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
<GameSideBar/>
      </List>
      <Divider />
      <List>
        <FilterGame/>
      </List>
    </Box>
  );

  return (
    <div >
      <Toolbar disableGutters>
      {['left'].map((anchor) => (
        <div className='SideBar'>
           <React.Fragment key={anchor} >
           <Typography 
           variant="h6"
          noWrap
          component="a"
          href='#'
          onClick={toggleDrawer(anchor, true)}
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
SideBar
        </Typography>
      
          <SwipeableDrawer
          style={{color:'red'}}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
            <Button variant="outlined"  onClick={toggleDrawer(anchor, false)}>Close</Button>
          </SwipeableDrawer>
        </React.Fragment>
        </div>
       
      ))}
    </Toolbar>
    </div>
  );
}
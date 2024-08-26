import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const iconPicker = (i) => {
    for (let index ; index < 3; index++) {
    if (index == 0) {
      return <FontAwesomeIcon icon={faCompactDisc} />
    }
    else if (index== 1) {
      return <FontAwesomeIcon icon={faHeadphones} />
    }
    else if (index== 2) { 
      return <FontAwesomeIcon icon={faPerson} />
    }
    else {
      return <FontAwesomeIcon icon={faMicrophone} />

    }
  }}

  const DrawerList = (
    <Box sx={{ width: "250", background:"black", color:"white" }} role="presentation" onClick={toggleDrawer(false)}>
      <h1>My library</h1>
      <List>
        {[{name: 'Albums', icon: faCompactDisc }, 
        {name: 'Playlists', icon: faHeadphones }, 
        {name: 'Artists', icon: faPerson}, 
        {name:'Podcasts', icon: faMicrophone}].map((album, index) => (
          <ListItem key={album} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={album.icon} size="lg" style={{color: "white"}}></FontAwesomeIcon>
              </ListItemIcon>
              <ListItemText primary={album.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <h1>I am feeling lucky</h1>
      <List>
        {['Albums', 'Playlists', 'Artists', 'Podcasts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {index % 2 === 0 ? <FontAwesomeIcon icon={faDice} size="lg" /> : <FontAwesomeIcon icon={faDice} size="lg" />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="NavBar">
      <Button className="nav-btn" style={{color: "black"}} onClick={toggleDrawer(true)}><FontAwesomeIcon icon={faAngleDown} style={{color: 'black', padding: "10 5 10 0"}} size="lg"/>I want to listen to...</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';

import data from '../data/data';

export const SideMenu = ({open, infoOpen, toggleDrawer, toggleAbsences, toggleMessages, toggleInfo}) => {
  return (
    <Drawer open={open} onClose={toggleDrawer}>
      <div
        tabIndex={0}
        role='button'
        onKeyDown={toggleDrawer}
      >
        <List component='nav'>
          <ListItem>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={data.info[0].value} />
          </ListItem>
        </List>
        <Divider />
        <List component='nav'>
          <ListItem button onClick={toggleInfo} className='expandable'>
            <ListItemText primary='Employee Info' />
            {infoOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={infoOpen} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {data.info.map(item => <ListSubheader key={item.key}>{item.key + ': ' + item.value}</ListSubheader>)}
            </List>
          </Collapse>
          <ListItem button onClick={toggleMessages}>
            <ListItemText primary='Messages' />
          </ListItem>
          <ListItem button onClick={toggleAbsences}>
            <ListItemText primary='Future Absence/Travel Planning' />
          </ListItem>
          <ListItem button component='a' href='https://tolconnected.bah.com/help/help.html' target='_blank'>
            <ListItemText primary='Help' />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

SideMenu.propTypes = {
  open: PropTypes.bool,
  infoOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  toggleAbsences: PropTypes.func,
  toggleMessages: PropTypes.func,
  toggleInfo: PropTypes.func
};

export default SideMenu;
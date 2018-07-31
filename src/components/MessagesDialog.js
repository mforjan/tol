import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

// import data from '../data/data';

const MessagesDialog = ({open, toggleDialog, data, deleteMessage}) => {
  const handleDeleteMessage = (id) => {
    if (window.confirm('Delete message?')) return deleteMessage(id);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={toggleDialog}
        fullWidth={true}
        maxWidth='md'
      >
        <DialogTitle>Messages</DialogTitle>
        <DialogContent>
          <List component="nav">
            {data.length > 0 ? data.map(message => {
              return (<ListItem key={message.id} button>
                <ListItemText className='message' primary={message.text} secondary={message.date} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleDeleteMessage(message.id)} aria-label="Comments">
                    <ClearIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>);
            }) : (
              <ListItem button>
                <ListItemText className='message' primary='No messages' />
              </ListItem>)}
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
};

MessagesDialog.propTypes = {
  open: PropTypes.bool,
  toggleDialog: PropTypes.func,
  data: PropTypes.array,
  deleteMessage: PropTypes.func
};

export default MessagesDialog;
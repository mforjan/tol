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
import { fetchMessages } from '../actions/actions';

export class MessagesDialog extends React.Component {
  handleDeleteMessage = (id) => {
    if (window.confirm('Delete message?')) return this.props.deleteMessage(id);
  };

  componentDidMount() {
    fetchMessages()
      .then(results => {
        if (results.type === 'SET_ERROR') {
          this.props.setError();
        } else {
          this.props.resetError();
          this.props.setMessages(results);
        }
      });
  }

  render() {
    const {open, toggleDialog, data} = this.props;
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
                return (<ListItem key={message._id} button>
                  <ListItemText className='message' primary={message.text} secondary={(new Date(message.date)).toDateString()} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => this.handleDeleteMessage(message._id)} aria-label="Comments">
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
  }
}

MessagesDialog.propTypes = {
  open: PropTypes.bool,
  toggleDialog: PropTypes.func,
  data: PropTypes.array,
  setMessages: PropTypes.func,
  deleteMessage: PropTypes.func,
  setError: PropTypes.func,
  resetError: PropTypes.func
};

export default MessagesDialog;
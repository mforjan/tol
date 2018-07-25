import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Snackbar from '@material-ui/core/Snackbar';

import TimeReport from './TimeReport';
import SideMenu from './SideMenu';
import AbsencesDialog from './AbsencesDialog';
import MessagesDialog from './MessagesDialog';
import * as actionCreators from '../actions/actions';

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <AppBar position='static' color='default'>
          <Toolbar>
            <IconButton color='inherit' aria-label='Menu'>
              <MenuIcon onClick={this.props.actions.toggleDrawer} />
            </IconButton>
            <Typography variant='title' color='inherit'>
              Time Online
            </Typography>
          </Toolbar>
        </AppBar>
        <SideMenu 
          open={this.props.drawerOpen} 
          infoOpen={this.props.infoOpen}
          toggleDrawer={this.props.actions.toggleDrawer} 
          toggleMessages={this.props.actions.toggleMessages} 
          toggleAbsences={this.props.actions.toggleAbsences}
          toggleInfo={this.props.actions.toggleInfo}
        />
        <MessagesDialog 
          data={this.props.messages}
          open={this.props.messagesOpen} 
          toggleDialog={this.props.actions.toggleMessages} 
          deleteMessage={this.props.actions.deleteMessage}
        />
        <AbsencesDialog />
        <TimeReport 
          time={this.props.time}
          open={this.props.timeDialogOpen}
          checked={this.props.checked}
          toggleDialog={this.props.actions.toggleTime}
          addTime={this.props.actions.addTime}
          changeTime={this.props.actions.changeTime}
          deleteRow={this.props.actions.deleteRow}
          toggleCheck={this.props.actions.toggleCheck}
        />
        <Snackbar
          open={this.props.snackbarOpen}
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          message={<span>Absence Added!</span>}
          onClose={this.props.actions.toggleSnackbar}
          autoHideDuration={1000}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.timeReport,
    messages: state.messages,
    absences: state.absences,
    drawerOpen: state.dialogs.drawerOpen,
    timeDialogOpen: state.dialogs.timeDialog.open,
    messagesOpen: state.dialogs.messagesDialogOpen,
    absencesOpen: state.dialogs.absencesDialog.open,
    infoOpen: state.dialogs.infoOpen,
    checked: state.dialogs.timeDialog.checked,
    snackbarOpen: state.dialogs.snackbarOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Divider from '@material-ui/core/Divider';

import data from '../data/data';
import * as actionCreators from '../actions/actions';

class AbsencesDialog extends React.Component {
  handleChangeStartDate = (e) => {
    this.props.actions.changeStartDate(e.target.value);
  }

  handleChangeEndDate = (e) => {
    this.props.actions.changeEndDate(e.target.value);
  }

  handleChangeAbsenceReason = (e) => {
    this.props.actions.changeAbsenceReason(e.target.value);
  }

  handleChangeTravelReason = (e) => {
    this.props.actions.changeTravelReason(e.target.value);
  }

  handleSubmitAbsence = (e) => {
    e.preventDefault();
    if (!this.props.startDate || !this.props.endDate) {
      alert('Please enter a start date and an end date.');
      return;
    } else if (!this.props.absenceReason && !this.props.travelReason) {
      alert('Please choose an absence reason or enter a travel reason.');
      return;
    }
    this.props.actions.toggleAbsences();
    this.props.actions.addAbsence(this.props.startDate, this.props.endDate, this.props.absenceReason, this.props.travelReason);
    this.props.actions.changeStartDate('');
    this.props.actions.changeEndDate('');
    this.props.actions.changeAbsenceReason('');
    this.props.actions.changeTravelReason('');
    this.props.actions.toggleSnackbar();
  }

  createAbsenceList = (data) => {
    return data.map(absence => (
      <ListItem key={absence.startDate}>
        <ListItemText 
          primary={absence.startDate.toDateString() + ' to ' + absence.endDate.toDateString()} 
          secondary={absence.absenceReason ? absence.absenceReason : absence.travelReason} 
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => this.props.actions.deleteAbsence(absence.startDate, absence.endDate)} aria-label="Comments">
            <ClearIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  }

  render() {
    const absenceList = this.createAbsenceList(this.props.data);
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.actions.toggleAbsences}
          maxWidth='md'
        >
          <form onSubmit={this.props.actions.addAbsence}>
            <DialogTitle>Future Absences/Travel Planning</DialogTitle>
            <div style={{display: 'flex', maxHeight: '300px'}}>
              <DialogContent style={{flex: 3}}>
                <TextField
                  label='From'
                  margin='dense'
                  type='date'
                  id='start'
                  inputRef={x => this.from = x}
                  InputLabelProps={{shrink: true}}
                  onChange={this.handleChangeStartDate}
                />
                <TextField
                  label='To'
                  margin='dense'
                  type='date'
                  id='end'
                  inputRef={x => this.to = x}
                  InputLabelProps={{shrink: true}}
                  onChange={this.handleChangeEndDate}
                />
                <p style={{marginTop: 20, marginBottom: 0}}>Please select reason for travel or absence:</p>
                <TextField
                  style={{marginTop: 5}}
                  id='absence'
                  select
                  label='Absence Reason'
                  value={this.props.absenceReason}
                  onChange={this.handleChangeAbsenceReason}
                  SelectProps={{native: true}}
                  margin='normal'
                >
                  <option value=''></option>
                  {data.absenceReasons.map(reason => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </TextField>
                <TextField
                  label='Travel Reason'
                  margin='dense'
                  id='travel'
                  inputRef={x => this.travel = x}
                  value={this.props.travelReason}
                  onChange={this.handleChangeTravelReason}
                />
              </DialogContent>
              <div style={{flex: 3, overflow: 'auto'}}>
                <List csubheader={<li />}>
                  <ul>
                    <ListSubheader style={{backgroundColor: 'white'}}>{'Future Absences'}</ListSubheader>
                    {this.props.data.length ? absenceList : <ListItem><ListItemText primary='None' /></ListItem>}
                    <Divider style={{marginRight: 20}} />
                    <ListSubheader style={{backgroundColor: 'white'}}>{'2018 Booz Allen Holidays'}</ListSubheader>
                    {data.holidays.map(holiday => (
                      <ListItem key={holiday.date}>
                        <ListItemText primary={holiday.name} secondary={holiday.date.toDateString()} />
                      </ListItem>
                    ))}
                  </ul>
                </List>
              </div>
            </div>
            <DialogActions>
              <Button onClick={this.props.actions.toggleAbsences}>
                Cancel
              </Button>
              <Button type='submit' onClick={this.handleSubmitAbsence} color='primary'>
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

AbsencesDialog.propTypes = {
  actions: PropTypes.object,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  absenceReason: PropTypes.string,
  travelReason: PropTypes.string,
  data: PropTypes.array,
  open: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    open: state.dialogs.absencesDialog.open,
    startDate: state.dialogs.absencesDialog.startDate,
    endDate: state.dialogs.absencesDialog.endDate,
    absenceReason: state.dialogs.absencesDialog.absenceReason,
    travelReason: state.dialogs.absencesDialog.travelReason,
    data: state.absences,
    snackbarOpen: state.dialogs.snackbarOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbsencesDialog);
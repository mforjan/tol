import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { fetchTime } from '../actions/actions';

export const Form = ({changeChargeNumber, changeLocation, toggleCheck, toggleDialog, chargeNumber, location, checked, addTime}) => {
  return (
    <form>
      <DialogTitle>Enter Time</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='chargeNumber'
          label='Charge Number'
          onChange={(e) => changeChargeNumber(e.target.value)}
          fullWidth
        />
        <TextField
          autoFocus
          margin='dense'
          id='location'
          label='Location'
          onChange={(e) => changeLocation(e.target.value)}
          fullWidth
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={toggleCheck}
                value='checked'
                color='primary'
              />
            }
            label='Telework?'
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={() => {
            if (checked) toggleCheck();
            toggleDialog();
          }}
          color='primary'
          className='cancel'
        >
          Cancel
        </Button>
        <Button type='submit' onClick={(e) => {
          e.preventDefault();
          if (!chargeNumber || !location) {
            alert('Please enter a charge number and location');
            return;
          }
          fetchTime().then((time) => {
            let previousEntry = true;
            for (let i = 0; i < time.length; i++) {
              if (time[i].chargeNumber === chargeNumber && time[i].location === location && time[i].telework === checked) {
                alert('You have a previous entry matching this one.');
                previousEntry = false;
              }
            }
            if (previousEntry) addTime(chargeNumber, location, checked);
            if (checked) toggleCheck();
            changeChargeNumber('');
            changeLocation('');
            toggleDialog();
          });
        }}>
          Enter
        </Button>
      </DialogActions>
    </form>
  );
};

export const FormDialog = ({open, toggleDialog, changeChargeNumber, changeLocation, toggleCheck, addTime, chargeNumber, location, checked}) => {
  return (
    <div>
      <Button 
        onClick={toggleDialog} 
        variant='contained' 
        color='primary' 
        className='add-time'
        style={{margin: 10}}
      >
        Add Time
      </Button>
      <Dialog
        open={open}
        onClose={toggleDialog}
      >
        <Form 
          addTime={addTime}
          changeChargeNumber={changeChargeNumber}
          changeLocation={changeLocation} 
          toggleCheck={toggleCheck}
          chargeNumber={chargeNumber}
          location={location}
          checked={checked} 
          toggleDialog={toggleDialog}
        />
      </Dialog>
    </div>
  );
};

FormDialog.propTypes = {
  open: PropTypes.bool,
  chargeNumber: PropTypes.string,
  location: PropTypes.string,
  toggleDialog: PropTypes.func,
  toggleCheck: PropTypes.func,
  addTime: PropTypes.func,
  changeChargeNumber: PropTypes.func,
  changeLocation: PropTypes.func,
  checked: PropTypes.bool,
};

Form.propTypes = {
  toggleDialog: PropTypes.func,
  changeChargeNumber: PropTypes.func,
  changeLocation: PropTypes.func,
  toggleCheck: PropTypes.func,
  addTime: PropTypes.func,
  handleCancel: PropTypes.func,
  chargeNumber: PropTypes.string,
  location: PropTypes.string,
  checked: PropTypes.bool,
};

export default FormDialog;
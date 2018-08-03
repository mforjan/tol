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

export const Form = ({toggleCheck, toggleDialog, checked, addTime, handleCancel}) => {
  return (
    <form>
      <DialogTitle>Enter Time</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='chargeNumber'
          label='Charge Number'
          inputRef={x => this.chargeNumber = x}
          fullWidth
        />
        <TextField
          autoFocus
          margin='dense'
          id='location'
          label='Location'
          inputRef={x => this.location = x}
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
          onClick={handleCancel}
          color='primary'
          className='cancel'
        >
          Cancel
        </Button>
        <Button type='submit' className='submit' onClick={(e) => {
          e.preventDefault();
          if (!this.chargeNumber.value || !this.location.value) {
            alert('Please enter a charge number and location');
            return;
          }
          addTime(this.chargeNumber.value, this.location.value, checked);
          if (checked) toggleCheck();
          toggleDialog();
        }}>
          Enter
        </Button>
      </DialogActions>
    </form>
  );
};

export const FormDialog = ({open, toggleDialog, toggleCheck, addTime, checked}) => {
  const handleCancel = () => {
    if (checked) toggleCheck();
    toggleDialog();
  };
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
          toggleCheck={toggleCheck}
          checked={checked} 
          toggleDialog={toggleDialog}
          handleCancel={handleCancel}
        />
      </Dialog>
    </div>
  );
};

FormDialog.propTypes = {
  open: PropTypes.bool,
  toggleDialog: PropTypes.func,
  toggleCheck: PropTypes.func,
  addTime: PropTypes.func,
  checked: PropTypes.bool,
};

Form.propTypes = {
  toggleDialog: PropTypes.func,
  toggleCheck: PropTypes.func,
  addTime: PropTypes.func,
  handleCancel: PropTypes.func,
  checked: PropTypes.bool,
};

export default FormDialog;
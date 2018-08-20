import {
  TOGGLE_DRAWER,
  TOGGLE_TIME_DIALOG,
  TOGGLE_MESSAGES_DIALOG,
  TOGGLE_ABSENCES_DIALOG,
  TOGGLE_INFO,
  TOGGLE_CHECKED,
  CHANGE_CHARGE_NUMBER,
  CHANGE_LOCATION,
  TOGGLE_SNACKBAR,
  CHANGE_START_DATE,
  CHANGE_END_DATE,
  CHANGE_ABSENCE_REASON,
  CHANGE_TRAVEL_REASON
} from '../actions/constants';

const initialState = {
  drawerOpen: false,
  timeDialog: {
    open: false,
    checked: false,
    chargeNumber: '',
    location: '',
  },
  messagesDialogOpen: false,
  absencesDialog: {
    open: false,
    startDate: '',
    endDate: '',
    reason: '',
  },
  snackbarOpen: false,
  infoOpen: false,
};

const dialogs = (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_DRAWER: {
    return state.drawerOpen === true ? {...state, drawerOpen: false} : {...state, drawerOpen: true};
  }
  case TOGGLE_TIME_DIALOG: {
    let newTimeDialog = state.timeDialog;
    newTimeDialog = newTimeDialog.open === true ? {...newTimeDialog, open: false} : {...newTimeDialog, open: true};
    return {...state, timeDialog: newTimeDialog};
  }
  case TOGGLE_MESSAGES_DIALOG:  {
    return state.messagesDialogOpen === true ? {...state, messagesDialogOpen: false} : {...state, messagesDialogOpen: true};
  }
  case TOGGLE_ABSENCES_DIALOG: {
    let newAbsencesDialog = state.absencesDialog;
    newAbsencesDialog = newAbsencesDialog.open === true ? {...newAbsencesDialog, open: false} : {...newAbsencesDialog, open: true};
    return {...state, absencesDialog: newAbsencesDialog};
  }
  case TOGGLE_INFO: {
    return state.infoOpen === true ? {...state, infoOpen: false} : {...state, infoOpen: true};
  }
  case TOGGLE_CHECKED: {
    let newTimeDialog2 = state.timeDialog;
    newTimeDialog2 = newTimeDialog2.checked === true ? {...newTimeDialog2, checked: false} : {...newTimeDialog2, checked: true};
    return {...state, timeDialog: newTimeDialog2};
  }
  case CHANGE_CHARGE_NUMBER: {
    let newTimeDialog3 = state.timeDialog;
    newTimeDialog3.chargeNumber = action.chargeNumber;
    return {...state, timeDialog: newTimeDialog3};
  }
  case CHANGE_LOCATION: {
    let newTimeDialog4 = state.timeDialog;
    newTimeDialog4.location = action.location;
    return {...state, timeDialog: newTimeDialog4};
  }
  case TOGGLE_SNACKBAR: {
    return state.snackbarOpen === true ? {...state, snackbarOpen: false} : {...state, snackbarOpen: true};
  }
  case CHANGE_START_DATE: {
    let newAbsencesDialog2 = state.absencesDialog;
    let startDate;
    if (action.date) {
      action.date = action.date.split('-').join(',');
      startDate = new Date(action.date);
    }
    newAbsencesDialog2.startDate = startDate;
    return {...state, absencesDialog: newAbsencesDialog2};
  }
  case CHANGE_END_DATE: {
    let newAbsencesDialog3 = state.absencesDialog;
    let endDate;
    if (action.date) {
      action.date = action.date.split('-').join(',');
      endDate = new Date(action.date);
    }
    newAbsencesDialog3.endDate = endDate;
    return {...state, absencesDialog: newAbsencesDialog3};
  }
  case CHANGE_ABSENCE_REASON: {
    let newAbsencesDialog4 = state.absencesDialog;
    newAbsencesDialog4.absenceReason = action.reason;
    return {...state, absencesDialog: newAbsencesDialog4};
  }
  case CHANGE_TRAVEL_REASON: {
    let newAbsencesDialog5 = state.absencesDialog;
    newAbsencesDialog5.travelReason = action.reason;
    return {...state, absencesDialog: newAbsencesDialog5};
  }
  default: {
    return state;
  }
  }
};

export default dialogs;
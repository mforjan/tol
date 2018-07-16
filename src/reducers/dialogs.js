const initialState = {
  drawerOpen: false,
  timeDialog: {
    open: false,
    checked: false,
  },
  messagesDialogOpen: false,
  absencesDialog: {
    open: false,
    startDate: '',
    endDate: '',
    reason: '',
  },
  snackbarOpen: false,
}

const dialogs = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return state.drawerOpen === true ? {...state, drawerOpen: false} : {...state, drawerOpen: true};
    case 'TOGGLE_TIME_DIALOG':
      let newTimeDialog = state.timeDialog
      newTimeDialog = newTimeDialog.open === true ? {...newTimeDialog, open: false} : {...newTimeDialog, open: true}
      return {...state, timeDialog: newTimeDialog}
    case 'TOGGLE_MESSAGES_DIALOG':
      return state.messagesDialogOpen === true ? {...state, messagesDialogOpen: false} : {...state, messagesDialogOpen: true};
    case 'TOGGLE_ABSENCES_DIALOG':
      let newAbsencesDialog = state.absencesDialog
      newAbsencesDialog = newAbsencesDialog.open === true ? {...newAbsencesDialog, open: false} : {...newAbsencesDialog, open: true}
      return {...state, absencesDialog: newAbsencesDialog}
    case 'TOGGLE_INFO':
      return state.infoOpen === true ? {...state, infoOpen: false} : {...state, infoOpen: true};
    case 'TOGGLE_CHECKED':
      let newTimeDialog2 = state.timeDialog
      newTimeDialog2 = newTimeDialog2.checked === true ? {...newTimeDialog2, checked: false} : {...newTimeDialog2, checked: true}
      return {...state, timeDialog: newTimeDialog2}
    case 'TOGGLE_SNACKBAR':
      return state.snackbarOpen === true ? {...state, snackbarOpen: false} : {...state, snackbarOpen: true}
    case 'CHANGE_START_DATE':
      let newAbsencesDialog2 = state.absencesDialog;
      let startDate = new Date(action.date)
      startDate.setDate(startDate.getDate() + 1)
      newAbsencesDialog2.startDate = action.date ? startDate : '';
      return {...state, absencesDialog: newAbsencesDialog2};
    case 'CHANGE_END_DATE':
      let newAbsencesDialog3 = state.absencesDialog;
      let endDate = new Date(action.date)
      endDate.setDate(endDate.getDate() + 1)
      newAbsencesDialog3.endDate = action.date ? endDate : '';
      return {...state, absencesDialog: newAbsencesDialog3};
    case 'CHANGE_ABSENCE_REASON':
      let newAbsencesDialog4 = state.absencesDialog;
      newAbsencesDialog4.absenceReason = action.reason;
      return {...state, absencesDialog: newAbsencesDialog4};
    case 'CHANGE_TRAVEL_REASON':
      let newAbsencesDialog5 = state.absencesDialog;
      newAbsencesDialog5.travelReason = action.reason;
      return {...state, absencesDialog: newAbsencesDialog5};
    default:
      return state;
  }
}

export default dialogs;
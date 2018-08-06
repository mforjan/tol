import { createStore } from 'redux';
import data from './data/data';
import rootReducer from './reducers/index';

const initialState = {
  timeReport: data.rows,
  messages: data.messages,
  absences: data.absences,
  dialogs: {
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
      absenceReason: '',
      travelReason: '',
    },
    infoOpen: false,
    snackbarOpen: false,
  }
};

const store = createStore(rootReducer, initialState);

export default store;
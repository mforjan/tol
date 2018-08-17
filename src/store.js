import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import data from './data/data';
import rootReducer from './reducers/index';

const url = 'http://localhost:4000/';

const fetchTime = () => {
  return fetch(url + 'time').then(res => res.json()).then(timeReport => this.timeReport = timeReport);
};
const fetchMessages = () => {
  return fetch(url + 'messages').then(res => res.json()).then(messages => this.messages = messages);
};
const fetchAbsences = () => {
  return fetch(url + 'absences').then(res => res.json()).then(absences => this.absences = absences);
};

const fetchTimeAsync = () => {
  return dispatch => {
    return dispatch(fetchTime()).then(time => this.timeReport = time);
  };
};
const fetchMessagesAsync = () => {
  return dispatch => {
    return dispatch(fetchMessages()).then(messages => this.messages = messages);
  };
};
const fetchAbsencesAsync = () => {
  return dispatch => {
    return dispatch(fetchAbsences()).then(absences => this.absences = absences);
  };
};

const initialState = {
  timeReport: [],
  messages: [],
  absences: [],
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

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

store.dispatch(fetchTimeAsync);
store.dispatch(fetchMessagesAsync);
store.dispatch(fetchAbsencesAsync);

export default store;

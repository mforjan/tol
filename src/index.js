import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './components/Main';
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
}

const store = createStore(rootReducer, initialState)

ReactDOM.render(<Provider store={store}>
  <Main />
</Provider>, document.getElementById('root'));
registerServiceWorker();


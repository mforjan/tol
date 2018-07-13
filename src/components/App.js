import { createStore } from 'redux';

import data from '../data/data';
import rootReducer from '../reducers/index';

const initialState = {
  time: data.rows,
  messages: data.messages,
  absences: data.absences,
}

const store = createStore(rootReducer, initialState)

export default App;

import { combineReducers } from 'redux';

import timeReport from './timeReport';
import messages from './messages';
import absences from './absences';
import dialogs from './dialogs';
import errors from './errors';

const rootReducer = combineReducers({
  timeReport,
  absences,
  messages,
  dialogs,
  errors,
});

export default rootReducer;

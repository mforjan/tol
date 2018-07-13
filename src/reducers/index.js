import { combineReducers } from 'redux';

import timeReport from './timeReport';
import messages from './messages';
import absences from './absences';
import dialogs from './dialogs';

const rootReducer = combineReducers({
  timeReport,
  absences,
  messages,
  dialogs,
})

export default rootReducer;

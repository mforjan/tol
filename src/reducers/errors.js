import { SET_ERROR, RESET_ERROR } from '../actions/constants';

const errors = (state = null, action) => {
  switch (action.type) {
  case SET_ERROR: {
    return 'Error: could not connect to database. You may need to reload the page.';
  }
  case RESET_ERROR: {
    return null;
  }
  default: {
    return state;
  }
  }
};

export default errors;
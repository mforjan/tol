const messages = (state = [], action) => {
  switch (action.type) {
  case 'SET_MESSAGES': {
    return action.messages;
  }
  case 'DELETE_MESSAGE': {
    return state.filter(message => message._id !== action.id);
  }
  default: {
    return state;
  }
  }
};

export default messages;
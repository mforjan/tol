import data from '../data/data';

const messages = (state = data.messages, action) => {
  switch (action.type) {
  case 'DELETE_MESSAGE': {
    return state.filter(message => message.id !== action.id);
  }
  default: {
    return state;
  }
  }
};

export default messages;
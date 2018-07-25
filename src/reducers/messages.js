import data from '../data/data';

const messages = (state = data.messages, action) => {
  switch (action.type) {
  case 'DELETE_MESSAGE': {
    const stateCopy = [...state];
    return window.confirm('Delete message?') ? stateCopy.filter(message => message.id !== action.id) : state;
  }
  default: {
    return state;
  }
  }
};

export default messages;
import data from '../data/data';

const messages = (state = data.messages, action) => {
  switch (action.type) {
    case 'DELETE_MESSAGE':
      const stateCopy = [...state];
      return stateCopy.filter(message => message.id !== action.id);
    default:
      return state;
  }
}

export default messages;
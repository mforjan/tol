import data from '../data/data';

const timeReport = (state = [], action) => {
  switch (action.type) {
  case 'SET_TIME': {
    return action.time;
  }
  case 'ADD_TIME': {
    const newState = [...state];
    newState.push({
      chargeNumber: action.chargeNumber,
      chargeNumberDescription: data.chargeNumbers[action.chargeNumber],
      location: action.location,
      telework: action.telework,
      hours: {
        day0: 0,
        day1: 0,
        day2: 0,
        day3: 0,
        day4: 0,
        day5: 0,
        day6: 0,
        day7: 0,
        day8: 0,
        day9: 0,
        day10: 0,
        day11: 0,
        day12: 0,
        day13: 0,
      }
    });
    return newState;
  }
  case 'CHANGE_TIME': {
    const newState2 = [...state];
    const row = newState2.find(row => row._id === action.id);
    row.hours[action.day] = parseFloat(action.newHours);
    return newState2;
  }
  case 'DELETE_ROW': {
    const stateCopy = [...state];
    const newState3 = stateCopy.filter(row => row._id !== action.id);
    return newState3;
  }
  default: {
    return state;
  }
  }
};

export default timeReport;

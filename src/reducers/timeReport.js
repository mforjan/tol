import data from '../data/data';

const timeReport = (state = data.rows, action) => {
  switch (action.type) {
  case 'ADD_TIME': {
    const newState = [...state];
    for (let i = 0; i < newState.length; i++) {
      if (newState[i].chargeNumber === action.chargeNumber 
        && newState[i].location === action.location 
        && newState[i].telework === action.telework) {
        alert('You have a previous entry matching this one');
        return state;
      }
    }
    const newRow = {
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
    };
    newState.push(newRow);
    return newState;
  }
  case 'CHANGE_TIME': {
    const newState2 = [...state];
    console.log(newState2)
    const row = newState2.find(row => row.chargeNumber + row.location + row.telework === action.rowId);
    row.hours[action.day] = parseFloat(action.newHours);
    return newState2;
  }
  case 'DELETE_ROW': {
    const stateCopy = [...state];
    if (!window.confirm('Are you sure you want to delete this row?')) return state;
    const newState3 = stateCopy.filter(row => row.chargeNumber + row.location + row.telework !== action.rowId);
    return newState3;
  }
  default: {
    return state;
  }
  }
};

export default timeReport;

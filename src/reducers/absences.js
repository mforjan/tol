import data from '../data/data';

const absences = (state = data.absences, action) => {
  switch (action.type) {
  case 'ADD_ABSENCE': {
    const newState = [...state];
    newState.push({
      startDate: action.startDate,
      endDate: action.endDate,
      absenceReason: action.absenceReason,
      travelReason: action.travelReason,
    });
    return newState;
  }
  case 'DELETE_ABSENCE': {
    const newState = state.filter(absence => (absence.startDate.getTime() !== action.startDate.getTime()));
    return newState
  }
  default: {
    return state;
  }
  }
};

export default absences;
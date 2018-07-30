import data from '../data/data';

const addAbsence = (state = data.absences, action) => {
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
    return state.filter(absence => (absence.startDate.getTime() !== action.startDate.getTime()) || (absence.endDate.getTime() !== action.endDate.getTime()));
  }
  default: {
    return state;
  }
  }
};

export default addAbsence;
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
    if (!window.confirm('Are you sure you want to delete this absence?')) return state;
    return state.filter(absence => (absence.startDate !== action.startDate) || (absence.endDate !== action.endDate));
  }
  default: {
    return state;
  }
  }
};

export default addAbsence;
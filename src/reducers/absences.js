const absences = (state = [], action) => {
  switch (action.type) {
  case 'SET_ABSENCES': {
    return action.absences;
  }
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
    return state.filter(absence => (absence._id !== action.id));
  }
  default: {
    return state;
  }
  }
};

export default absences;
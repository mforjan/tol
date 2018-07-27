export const addTime = (chargeNumber, location, telework) => {
  return {
    type: 'ADD_TIME',
    chargeNumber,
    location,
    telework,
  };
};

export const changeTime = (chargeNumber, location, telework, day) => {
  return {
    type: 'CHANGE_TIME',
    rowId: chargeNumber + location + telework,
    day
  };
};

export const deleteRow = (rowId) => {
  return {
    type: 'DELETE_ROW',
    rowId,
  };
};

export const deleteMessage = (id) => {
  return {
    type: 'DELETE_MESSAGE',
    id,
  };
};

export const addAbsence = (startDate, endDate, absenceReason, travelReason) => {
  return {
    type: 'ADD_ABSENCE',
    startDate,
    endDate,
    absenceReason,
    travelReason,
  };
};

export const deleteAbsence = (startDate, endDate) => {
  return {
    type: 'DELETE_ABSENCE',
    startDate,
    endDate,
  };
};

export const toggleDrawer = () => {
  return {
    type: 'TOGGLE_DRAWER',
  };
};

export const toggleTime = () => {
  return {
    type: 'TOGGLE_TIME_DIALOG',
  };
};

export const toggleMessages = () => {
  return {
    type: 'TOGGLE_MESSAGES_DIALOG',
  };
};

export const toggleAbsences = () => {
  return {
    type: 'TOGGLE_ABSENCES_DIALOG',
  };
};

export const toggleInfo = () => {
  return {
    type: 'TOGGLE_INFO',
  };
};

export const toggleCheck = () => {
  return {
    type: 'TOGGLE_CHECKED',
  };
};

export const toggleSnackbar = () => {
  return {
    type: 'TOGGLE_SNACKBAR',
  };
};

export const changeStartDate = (date) => {
  return {
    type: 'CHANGE_START_DATE',
    date,
  };
};

export const changeEndDate = (date) => {
  return {
    type: 'CHANGE_END_DATE',
    date,
  };
};

export const changeAbsenceReason = (reason) => {
  return {
    type: 'CHANGE_ABSENCE_REASON',
    reason,
  };
};

export const changeTravelReason = (reason) => {
  return {
    type: 'CHANGE_TRAVEL_REASON',
    reason,
  };
};
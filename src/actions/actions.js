import data from '../data/data';
const url = 'http://localhost:4000/';

// TIME REPORT
export const addTime = (chargeNumber, location, telework) => {
  return dispatch => {
    const request = new Request(url + 'time', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chargeNumber,
        chargeNumberDescription: data.chargeNumbers[chargeNumber],
        location,
        telework,
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
      })
    });
    fetch(request)
      .then(res => res.json())
      .then(response => dispatch({
        type: 'ADD_TIME',
        chargeNumber: response.chargeNumber,
        location: response.location,
        telework: response.telework
      }));
  };
};

export const changeTime = (row, day, newHours) => {
  row.hours[day] = newHours;
  return dispatch => {
    const request = new Request(url + 'time/' + row._id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hours: row.hours
      })
    });
    fetch(request)
      .then(res => res.json())
      .then(response => dispatch({
        type: 'CHANGE_TIME',
        id: response._id,
        day,
        newHours
      }));
  };
};

export const deleteRow = (id) => {
  return dispatch => {
    fetch(url + 'time/' + id, {method: 'DELETE'})
      .then(res => res.json())
      .then(response => dispatch({
        type: 'DELETE_ROW',
        id: response._id
      }));
  };
};

export const setTime = (time) => {
  return {
    type: 'SET_TIME',
    time,
  };
};

// MESSAGES
export const deleteMessage = (id) => {
  return dispatch => {
    fetch(url + 'messages/' + id, {method: 'DELETE'})
      .then(res => res.json())
      .then(response => dispatch({
        type: 'DELETE_MESSAGE',
        id: response._id,
      }));
  };
};

export const setMessages = (messages) => {
  return {
    type: 'SET_MESSAGES',
    messages,
  };
};

// ABSENCES
export const addAbsence = (startDate, endDate, absenceReason, travelReason) => {
  return dispatch => {
    const request = new Request(url + 'absences/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        startDate,
        endDate,
        absenceReason,
        travelReason
      })
    });
    fetch(request)
      .then(res => res.json())
      .then(response => dispatch({
        type: 'ADD_ABSENCE',
        startDate: response.startDate,
        endDate: response.endDate,
        absenceReason: response.absenceReason,
        travelReason: response.travelReason
      }));
  };
};

export const deleteAbsence = (id) => {
  return dispatch => {
    fetch(url + 'absences/' + id, {method: 'DELETE'})
      .then(res => res.json())
      .then(response => dispatch({
        type: 'DELETE_ABSENCE',
        id: response._id,
      }));
  };
};

export const setAbsences = (absences) => {
  return {
    type: 'SET_ABSENCES',
    absences,
  };
};

// DIALOGS
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

export const changeChargeNumber = (chargeNumber) => {
  return {
    type: 'CHANGE_CHARGE_NUMBER',
    chargeNumber
  };
};

export const changeLocation = (location) => {
  return {
    type: 'CHANGE_LOCATION',
    location
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

// DATABASE
export const fetchTime = () => {
  return (fetch(url + 'time')).then(res => res.json());
};

export const fetchMessages = () => {
  return fetch(url + 'messages').then(res => res.json());
};

export const fetchAbsences = () => {
  return fetch(url + 'absences').then(res => res.json());
};

export const postTime = (action) => {
  return dispatch => {
    fetch(url + 'time', {
      method: 'POST',
      body: {
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
      }
    })
      .then((res) => res.json())
      .then(response => {
        console.log(response);
        dispatch({
          type: 'ADD_TIME',
          chargeNumber: response.chargeNumber,
          location: response.location,
          telework: response.telework
        });
      });
  };
};


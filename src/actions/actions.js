import data from '../data/data';
import * as actionTypes from './constants';
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
        type: actionTypes.ADD_TIME,
        chargeNumber: response.chargeNumber,
        location: response.location,
        telework: response.telework
      }))
      .catch(error => dispatch({
        type: actionTypes.ADD_TIME_ERROR,
        error
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
        type: actionTypes.CHANGE_TIME,
        id: response._id,
        day,
        newHours
      }))
      .catch(error => dispatch({
        type: actionTypes.CHANGE_TIME_ERROR,
        error
      }));
  };
};

export const deleteRow = (id) => {
  return dispatch => {
    fetch(url + 'time/' + id, {method: 'DELETE'})
      .then(res => res.json())
      .then(response => dispatch({
        type: actionTypes.DELETE_ROW,
        id: response._id
      }))
      .catch(error => dispatch({
        type: actionTypes.DELETE_ROW_ERROR,
        error
      }));
  };
};

export const setTime = (time) => {
  return {
    type: actionTypes.SET_TIME,
    time,
  };
};

// MESSAGES
export const deleteMessage = (id) => {
  return dispatch => {
    fetch(url + 'messages/' + id, {method: 'DELETE'})
      .then(res => res.json())
      .then(response => dispatch({
        type: actionTypes.DELETE_MESSAGE,
        id: response._id,
      }))
      .catch(error => dispatch({
        type: actionTypes.DELETE_MESSAGE_ERROR,
        error
      }));
  };
};

export const setMessages = (messages) => {
  return {
    type: actionTypes.SET_MESSAGES,
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
        type: actionTypes.ADD_ABSENCE,
        startDate: response.startDate,
        endDate: response.endDate,
        absenceReason: response.absenceReason,
        travelReason: response.travelReason
      }))
      .catch(error => dispatch({
        type: actionTypes.ADD_ABSENCE_ERROR,
        error
      }));
  };
};

export const deleteAbsence = (id) => {
  return dispatch => {
    fetch(url + 'absences/' + id, {method: 'DELETE'})
      .then(res => res.json())
      .then(response => dispatch({
        type: actionTypes.DELETE_ABSENCE,
        id: response._id,
      }))
      .catch(error => dispatch({
        type: actionTypes.DELETE_ABSENCE_ERROR,
        error
      }));
  };
};

export const setAbsences = (absences) => {
  return {
    type: actionTypes.SET_ABSENCES,
    absences,
  };
};

// DIALOGS
export const toggleDrawer = () => {
  return {
    type: actionTypes.TOGGLE_DRAWER,
  };
};

export const toggleTime = () => {
  return {
    type: actionTypes.TOGGLE_TIME_DIALOG,
  };
};

export const toggleMessages = () => {
  return {
    type: actionTypes.TOGGLE_MESSAGES_DIALOG,
  };
};

export const toggleAbsences = () => {
  return {
    type: actionTypes.TOGGLE_ABSENCES_DIALOG,
  };
};

export const toggleInfo = () => {
  return {
    type: actionTypes.TOGGLE_INFO,
  };
};

export const changeChargeNumber = (chargeNumber) => {
  return {
    type: actionTypes.CHANGE_CHARGE_NUMBER,
    chargeNumber
  };
};

export const changeLocation = (location) => {
  return {
    type: actionTypes.CHANGE_LOCATION,
    location
  };
};

export const toggleCheck = () => {
  return {
    type: actionTypes.TOGGLE_CHECKED,
  };
};

export const toggleSnackbar = () => {
  return {
    type: actionTypes.TOGGLE_SNACKBAR,
  };
};

export const changeStartDate = (date) => {
  return {
    type: actionTypes.CHANGE_START_DATE,
    date,
  };
};

export const changeEndDate = (date) => {
  return {
    type: actionTypes.CHANGE_END_DATE,
    date,
  };
};

export const changeAbsenceReason = (reason) => {
  return {
    type: actionTypes.CHANGE_ABSENCE_REASON,
    reason,
  };
};

export const changeTravelReason = (reason) => {
  return {
    type: actionTypes.CHANGE_TRAVEL_REASON,
    reason,
  };
};

// DATABASE
export const fetchTime = () => {
  return fetch(url + 'time').then(res => res.json());
};

export const fetchMessages = () => {
  return fetch(url + 'messages').then(res => res.json());
};

export const fetchAbsences = () => {
  return fetch(url + 'absences').then(res => res.json());
};

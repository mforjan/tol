import * as actions from '../../actions/actions.js';

describe('actions', () => {

  it('should create an action to add time', () => {
    expect(actions.addTime('F00000000000000000000', 'VAHN', false)).toEqual({
      type: 'ADD_TIME',
      chargeNumber: 'F00000000000000000000',
      location: 'VAHN',
      telework: false
    });
  });

  it('should create an action to change time', () => {
    expect(actions.changeTime('F00000000000000000000', 'VAHN', false, 'day0')).toEqual({
      type: 'CHANGE_TIME',
      rowId: 'F00000000000000000000VAHNfalse',
      day: 'day0'
    });
  });

  it('should create an action to delete a row', () => {
    expect(actions.deleteRow('F00000000000000000000VAHNfalse')).toEqual({
      type: 'DELETE_ROW',
      rowId: 'F00000000000000000000VAHNfalse',
    });
  });

  it('should create an action to change time', () => {
    expect(actions.deleteMessage(1)).toEqual({
      type: 'DELETE_MESSAGE',
      id: 1,
    });
  });

  it('should create an action to add an absence', () => {
    expect(actions.addAbsence('12/26/18', '12/28/18', 'Paid Time Off')).toEqual({
      type: 'ADD_ABSENCE',
      startDate: '12/26/18',
      endDate: '12/28/18',
      absenceReason: 'Paid Time Off',
      travelReason: undefined
    });
  });

  it('should create an action to delete an absence', () => {
    expect(actions.deleteAbsence('12/26/18', '12/28/18')).toEqual({
      type: 'DELETE_ABSENCE',
      startDate: '12/26/18',
      endDate: '12/28/18'
    });
  });

  it('should create an action to toggle the side menu', () => {
    expect(actions.toggleDrawer()).toEqual({
      type: 'TOGGLE_DRAWER'
    });
  });

  it('should create an action to toggle the time entry dialog', () => {
    expect(actions.toggleTime()).toEqual({
      type: 'TOGGLE_TIME_DIALOG'
    });
  });

  it('should create an action to toggle the messages dialog', () => {
    expect(actions.toggleMessages()).toEqual({
      type: 'TOGGLE_MESSAGES_DIALOG'
    });
  });

  it('should create an action to toggle the absences dialog', () => {
    expect(actions.toggleAbsences()).toEqual({
      type: 'TOGGLE_ABSENCES_DIALOG'
    });
  });

  it('should create an action to toggle the employee info section', () => {
    expect(actions.toggleInfo()).toEqual({
      type: 'TOGGLE_INFO'
    });
  });

  it('should create an action to change the charge number', () => {
    expect(actions.changeChargeNumber('test')).toEqual({
      type: 'CHANGE_CHARGE_NUMBER',
      chargeNumber: 'test'
    });
  });

  it('should create an action to change the location', () => {
    expect(actions.changeLocation('test')).toEqual({
      type: 'CHANGE_LOCATION',
      location: 'test'
    });
  });

  it('should create an action to toggle the telework checkbox', () => {
    expect(actions.toggleCheck()).toEqual({
      type: 'TOGGLE_CHECKED'
    });
  });

  it('should create an action to toggle the snackbar', () => {
    expect(actions.toggleSnackbar()).toEqual({
      type: 'TOGGLE_SNACKBAR'
    });
  });

  it('should create an action to change the start date in the absences dialog', () => {
    expect(actions.changeStartDate('12/26/18')).toEqual({
      type: 'CHANGE_START_DATE',
      date: '12/26/18'
    });
  });

  it('should create an action to change the end date in the absences dialog', () => {
    expect(actions.changeEndDate('12/26/18')).toEqual({
      type: 'CHANGE_END_DATE',
      date: '12/26/18'
    });
  });

  it('should create an action to change the absence reason in the absences dialog', () => {
    expect(actions.changeAbsenceReason('Paid Time Off')).toEqual({
      type: 'CHANGE_ABSENCE_REASON',
      reason: 'Paid Time Off'
    });
  });

  it('should create an action to change the travel reason in the absences dialog', () => {
    expect(actions.changeTravelReason('Vacation')).toEqual({
      type: 'CHANGE_TRAVEL_REASON',
      reason: 'Vacation'
    });
  });

});
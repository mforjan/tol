import dialogs from '../../reducers/dialogs';
import data from '../../data/data';

const defaultState = {
  drawerOpen: false,
  timeDialog: {
    open: false,
    checked: false,
  },
  messagesDialogOpen: false,
  absencesDialog: {
    open: false,
    startDate: '',
    endDate: '',
    reason: '',
  },
  snackbarOpen: false,
  infoOpen: false,
};

const defaultState2 = {
  drawerOpen: true,
  timeDialog: {
    open: true,
    checked: true,
  },
  messagesDialogOpen: true,
  absencesDialog: {
    open: true,
    startDate: '',
    endDate: '',
    reason: '',
  },
  snackbarOpen: true,
  infoOpen: true,
};

describe('dialogs', () => {

  it('has an initial state', () => {
    expect(dialogs(undefined, { type: 'N/A' })).toEqual(defaultState)
  });

  it('opens the side menu', () => {
    expect(dialogs(defaultState, {
      type: 'TOGGLE_DRAWER'
    })).toEqual({
      ...defaultState,
      drawerOpen: true
    })
  });

  it('closes the side menu', () => {
    expect(dialogs(defaultState2, {
      type: 'TOGGLE_DRAWER'
    })).toEqual({
      ...defaultState2,
      drawerOpen: false
    })
  });

  it('opens the time dialog', () => {
    expect(dialogs(defaultState, {
      type: 'TOGGLE_TIME_DIALOG'
    })).toEqual({
      ...defaultState,
      timeDialog: {
        open: true,
        checked: false
      }
    })
  });

  it('closes the time dialog', () => {
    expect(dialogs(defaultState2, {
      type: 'TOGGLE_TIME_DIALOG'
    })).toEqual({
      ...defaultState2,
      timeDialog: {
        open: false,
        checked: true
      }
    })
  });

  it('opens the messages dialog', () => {
    expect(dialogs(defaultState, {
      type: 'TOGGLE_MESSAGES_DIALOG'
    })).toEqual({
      ...defaultState,
      messagesDialogOpen: true
    })
  });

  it('closes the messages dialog', () => {
    expect(dialogs(defaultState2, {
      type: 'TOGGLE_MESSAGES_DIALOG'
    })).toEqual({
      ...defaultState2,
      messagesDialogOpen: false
    })
  });

  it('opens the absences dialog', () => {
    expect(dialogs(defaultState, {
      type: 'TOGGLE_ABSENCES_DIALOG'
    })).toEqual({
      ...defaultState,
      absencesDialog: {
        open: true,
        startDate: '',
        endDate: '',
        reason: ''
      }
    })
  });

  it('closes the absences dialog', () => {
    expect(dialogs(defaultState2, {
      type: 'TOGGLE_ABSENCES_DIALOG'
    })).toEqual({
      ...defaultState2,
      absencesDialog: {
        open: false,
        startDate: '',
        endDate: '',
        reason: ''
      }
    })
  });

  it('opens the employee info section', () => {
    expect(dialogs(defaultState, {
      type: 'TOGGLE_INFO'
    })).toEqual({
      ...defaultState,
      infoOpen: true
    })
  });

  it('closes the employee info section', () => {
    expect(dialogs(defaultState2, {
      type: 'TOGGLE_INFO'
    })).toEqual({
      ...defaultState2,
      infoOpen: false
    })
  });

  it('checks the checkbox on the time dialog', () => {
    expect(dialogs(defaultState, {
      type: 'TOGGLE_CHECKED'
    })).toEqual({
      ...defaultState,
      timeDialog: {
        open: false,
        checked: true
      }
    })
  });

  it('unchecks the checkbox on the time dialog', () => {
    expect(dialogs(defaultState2, {
      type: 'TOGGLE_CHECKED'
    })).toEqual({
      ...defaultState2,
      timeDialog: {
        open: true,
        checked: false
      }
    })
  });

  it('opens the snackbar', () => {
    expect(dialogs(defaultState, {
      type: 'TOGGLE_SNACKBAR'
    })).toEqual({
      ...defaultState,
      snackbarOpen: true
    })
  });

  it('closes the snackbar', () => {
    expect(dialogs(defaultState2, {
      type: 'TOGGLE_SNACKBAR'
    })).toEqual({
      ...defaultState2,
      snackbarOpen: false
    })
  });

  it('changes the start date', () => {
    expect(dialogs(defaultState, {
      type: 'CHANGE_START_DATE',
      date: '12/26/18'
    })).toEqual({
      ...defaultState,
      absencesDialog: {
        open: false,
        startDate: new Date('12/26/18'),
        endDate: '',
        reason: '',
      },
    })
  });

  it('sets the start date as undefined when not given a date', () => {
    expect(dialogs(defaultState, {
      type: 'CHANGE_START_DATE',
      date: ''
    })).toEqual({
      ...defaultState,
      absencesDialog: {
        open: false,
        startDate: undefined,
        endDate: '',
        reason: '',
      },
    })
  });

  it('changes the end date', () => {
    const date = '12/26/18';
    const newAbsencesDialog = defaultState.absencesDialog;
    newAbsencesDialog.endDate = new Date(date);
    expect(dialogs(defaultState, {
      type: 'CHANGE_END_DATE',
      date
    })).toEqual({
      ...defaultState,
      absencesDialog: newAbsencesDialog,
    })
  });

  it('changes the end date', () => {
    const date = '';
    const newAbsencesDialog = defaultState.absencesDialog;
    newAbsencesDialog.endDate = undefined;
    expect(dialogs(defaultState, {
      type: 'CHANGE_END_DATE',
      date
    })).toEqual({
      ...defaultState,
      absencesDialog: newAbsencesDialog,
    })
  });

  it('changes the absence reason', () => {
    const reason = 'Paid Time Off'
    const newAbsencesDialog = defaultState.absencesDialog
    newAbsencesDialog.reason = reason
    expect(dialogs(defaultState, {
      type: 'CHANGE_ABSENCE_REASON',
      reason
    })).toEqual({
      ...defaultState,
      absencesDialog: newAbsencesDialog,
    })
  });

  it('changes the travel reason', () => {
    const reason = 'Vacation'
    const newAbsencesDialog = defaultState.absencesDialog
    newAbsencesDialog.reason = reason
    expect(dialogs(defaultState, {
      type: 'CHANGE_TRAVEL_REASON',
      reason
    })).toEqual({
      ...defaultState,
      absencesDialog: newAbsencesDialog,
    })
  });

});
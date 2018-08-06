import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Main, mapStateToProps, mapDispatchToProps } from '../../components/Main';
import data from '../../data/data';
import * as actions from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import AppBar from '@material-ui/core/AppBar';
import SideMenu from '../../components/SideMenu';
import MessagesDialog from '../../components/MessagesDialog';
import AbsencesDialog from '../../components/AbsencesDialog';
import TimeReport from '../../components/TimeReport';
import Snackbar from '../../components/AbsencesDialog';

Enzyme.configure({ adapter: new Adapter() });

describe('Main', () => {

  const mockStore = configureMockStore()

  const initialState = {
    timeReport: data.rows,
    messages: data.messages,
    absences: data.absences,
    dialogs: {
      drawerOpen: false,
      timeDialog: {
        open: false,
        checked: false,
        chargeNumber: '',
        location: '',
      },
      messagesDialogOpen: false,
      absencesDialog: {
        open: false,
        startDate: null,
        endDate: null,
        absenceReason: '',
        travelReason: '',
      },
      infoOpen: false,
      snackbarOpen: false,
    }
  };

  let store;
  let wrapper;

  beforeEach(() => {
    const props = {
      time: data.rows,
      messages: data.messages,
      absences: data.absences,
      drawerOpen: false,
      timeDialogOpen: false,
      messagesOpen: false,
      absencesOpen: false,
      infoOpen: false,
      chargeNumber: '',
      location: '',
      checked: false,
      snackbarOpen: false,
      actions 
    };

    store = mockStore(initialState);

    wrapper = mount(
      <Provider store={store}>
        <Main {...props} />
      </Provider>
    );

  });

  it('should render itself and child components', () => {
    expect(wrapper.find(AppBar).length).toBe(1);
    expect(wrapper.find(SideMenu).length).toBe(1);
    expect(wrapper.find(MessagesDialog).length).toBe(1);
    expect(wrapper.find(AbsencesDialog).length).toBe(1);
    expect(wrapper.find(TimeReport).length).toBe(1);
    expect(wrapper.find(Snackbar).length).toBe(1);
  });

  it('should show correct props from state', () => {
    expect(wrapper.props().children.props).toEqual({
      time: data.rows,
      messages: data.messages,
      absences: data.absences,
      drawerOpen: initialState.dialogs.drawerOpen,
      timeDialogOpen: initialState.dialogs.timeDialog.open,
      messagesOpen: initialState.dialogs.messagesDialogOpen,
      absencesOpen: initialState.dialogs.absencesDialog.open,
      infoOpen: initialState.dialogs.infoOpen,
      chargeNumber: initialState.dialogs.timeDialog.chargeNumber,
      location: initialState.dialogs.timeDialog.location,
      checked: initialState.dialogs.timeDialog.checked,
      snackbarOpen: initialState.dialogs.snackbarOpen,
      actions
    });
  });

});
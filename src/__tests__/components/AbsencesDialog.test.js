import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AbsencesDialog } from '../../components/AbsencesDialog';
import data from '../../data/data';
import * as actions from '../../actions/actions';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, List, Button, ListItem, ListItemText, IconButton } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('AbsencesDialog', () => {

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      open: false,
      startDate: new Date(null),
      endDate: new Date(null),
      absenceReason: '',
      travelReason: '',
      data: data.absences,
      snackbarOpen: false,
      actions: {
        toggleAbsences: jest.fn(() => 'toggleAbsences'),
        deleteAbsence: jest.fn(() => 'deleteAbsence'),
        addAbsence: jest.fn(() => 'addAbsence'),
        changeStartDate: jest.fn(() => 'changeStartDate'),
        changeEndDate: jest.fn(() => 'changeEndDate'),
        changeAbsenceReason: jest.fn(() => 'changeAbsenceReason'),
        changeTravelReason: jest.fn(() => 'changeTravelReason'),
        toggleSnackbar: jest.fn(() => 'toggleSnackbar'),
      }
    }

    wrapper = shallow(<AbsencesDialog {...props} />)
  });

  it('renders all the elements properly', () => {
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find(Dialog).length).toBe(1);
    expect(wrapper.find(DialogTitle).length).toBe(1);
    expect(wrapper.find(DialogContent).length).toBe(1);
    expect(wrapper.find(DialogActions).length).toBe(1);
    expect(wrapper.find(TextField).length).toBe(4);
    expect(wrapper.find(Dialog).length).toBe(1);
    expect(wrapper.find(List).length).toBe(1);
    expect(wrapper.find(Dialog).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(2);
  });

  it('should render an empty list when there are no future absences', () => {
    props.data = [];
    wrapper = shallow(<AbsencesDialog {...props} />)
    expect(wrapper.find(ListItem).length).toBe(data.holidays.length + 1)
  })

  it('should give a travel reason if it is used in place of an absences reason', () => {
    props.data = [
      {
        startDate: new Date('December 26, 2018'),
        endDate: new Date('December 28, 2018'),
        absenceReason: '',
        travelReason: 'Vacation',
      },
    ];
    wrapper = shallow(<AbsencesDialog {...props} />);
    expect(wrapper.find('[secondary="Vacation"]').length).toBe(1)
  });

  it('should not add an absence if the startDate or endDate are not defined', () => {
    props.data = [
      {
        startDate: new Date(null),
        endDate: new Date(null),
        absenceReason: '',
        travelReason: 'Vacation',
      },
    ];
    wrapper = shallow(<AbsencesDialog {...props} />);
  });

  it('should call the changeStartDate function when the start date text field is changed', () => {
    const textField = wrapper.find('#start')
    textField.simulate('change', { target: { value: 'test'}});
    expect(props.actions.changeStartDate).toBeCalledWith('test')
  });

  it('should call the changeEndDate function when the end date text field is changed', () => {
    const textField = wrapper.find('#end')
    textField.simulate('change', { target: { value: 'test'}});
    expect(props.actions.changeEndDate).toBeCalledWith('test')
  });

  it('should call the changeAbsenceReason function when the absence reason select menu is changed', () => {
    const textField = wrapper.find('#absence')
    textField.simulate('change', { target: { value: 'test'}});
    expect(props.actions.changeAbsenceReason).toBeCalledWith('test')
  });

  it('should call the changeTravelReason function when the travel reason text field is changed', () => {
    const textField = wrapper.find('#travel')
    textField.simulate('change', { target: { value: 'test'}});
    expect(props.actions.changeTravelReason).toBeCalledWith('test')
  });

  it('should call the deleteAbsence function when the delete icon is clicked', () => {
    window.confirm = () => true;
    const button = wrapper.find(IconButton);
    button.simulate('click');
    expect(props.actions.deleteAbsence).toBeCalled();
  });

  it('should not call the deleteAbsence function if the user does not confirm it', () => {
    window.confirm = () => false;
    const button = wrapper.find(IconButton);
    button.simulate('click');
    expect(props.actions.deleteAbsence).not.toBeCalled();
  });

  it('should call all the functions in the handleSubmitAbsence function when the Submit button is clicked', () => {
    props.startDate = new Date('December 26, 2018');
    props.endDate = new Date('December 28, 2018');
    props.travelReason = 'Vacation'
    const wrapper = shallow(<AbsencesDialog {...props} />);
    const button = wrapper.find('[type="submit"]');
    button.simulate('click', {
      preventDefault: () => {}
    });
    expect(props.actions.toggleAbsences).toBeCalled();
    expect(props.actions.addAbsence).toBeCalledWith(props.startDate, props.endDate, '', 'Vacation');
    expect(props.actions.changeStartDate).toBeCalledWith(null);
    expect(props.actions.changeEndDate).toBeCalledWith(null);
    expect(props.actions.changeAbsenceReason).toBeCalledWith('');
    expect(props.actions.changeTravelReason).toBeCalledWith('');
    expect(props.actions.toggleSnackbar).toBeCalled();
  });

  it('should not call the functions in handleSubmitAbsence if a start date, end date, or either an absence reason or travel reason is missing', () => {
    props.startDate = new Date(null);
    props.endDate = new Date('December 28, 2018');
    props.travelReason = 'Vacation'
    let wrapper = shallow(<AbsencesDialog {...props} />);
    let button = wrapper.find('[type="submit"]');
    button.simulate('click', {
      preventDefault: () => {}
    });
    expect(props.actions.toggleAbsences).not.toBeCalled();
    expect(props.actions.addAbsence).not.toBeCalled();
    expect(props.actions.changeStartDate).not.toBeCalled();
    expect(props.actions.changeEndDate).not.toBeCalled();
    expect(props.actions.changeAbsenceReason).not.toBeCalled();
    expect(props.actions.changeTravelReason).not.toBeCalled();
    expect(props.actions.toggleSnackbar).not.toBeCalled();

    props.startDate = new Date('December 26, 2018');
    props.endDate = new Date(null);
    props.travelReason = 'Vacation'
    wrapper = shallow(<AbsencesDialog {...props} />);
    button = wrapper.find('[type="submit"]');
    button.simulate('click', {
      preventDefault: () => {}
    });
    expect(props.actions.toggleAbsences).not.toBeCalled();
    expect(props.actions.addAbsence).not.toBeCalled();
    expect(props.actions.changeStartDate).not.toBeCalled();
    expect(props.actions.changeEndDate).not.toBeCalled();
    expect(props.actions.changeAbsenceReason).not.toBeCalled();
    expect(props.actions.changeTravelReason).not.toBeCalled();
    expect(props.actions.toggleSnackbar).not.toBeCalled();

    props.startDate = new Date('December 26, 2018');
    props.endDate = new Date('December 28, 2018');
    props.travelReason = '';
    wrapper = shallow(<AbsencesDialog {...props} />);
    button = wrapper.find('[type="submit"]');
    button.simulate('click', {
      preventDefault: () => {}
    });
    expect(props.actions.toggleAbsences).not.toBeCalled();
    expect(props.actions.addAbsence).not.toBeCalled();
    expect(props.actions.changeStartDate).not.toBeCalled();
    expect(props.actions.changeEndDate).not.toBeCalled();
    expect(props.actions.changeAbsenceReason).not.toBeCalled();
    expect(props.actions.changeTravelReason).not.toBeCalled();
    expect(props.actions.toggleSnackbar).not.toBeCalled();
  })

});
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TimeReport } from '../../components/TimeReport';
import data from '../../data/data';
import Dialog from '@material-ui/core/Dialog';
import { Table, TableHead, TableBody, TableFooter, Button, IconButton } from '@material-ui/core';
import { FormDialog } from '../../components/FormDialog';

Enzyme.configure({ adapter: new Adapter() });

const initialTime = [
  {
    chargeNumber: 'test',
    chargeNumberDescription: 'test',
    location: 'test',
    telework: false,
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
];

describe('TimeReport', () => {

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      time: initialTime,
      open: false,
      toggleDialog: jest.fn(() => 'toggleDialog'),
      addTime: jest.fn(() => 'addTime'),
      changeTime: jest.fn(() => 'changeTime'),
      deleteRow: jest.fn(() => 'deleteRow'),
      checked: false,
      toggleCheck: jest.fn(() => 'toggleCheck'),
    }

    wrapper = shallow(<TimeReport {...props} />)
  });

  it('renders all the elements properly', () => {
    expect(wrapper.find('div').length).toBe(1 + data.dates.length + data.rows.length)
    expect(wrapper.find(Table).length).toBe(1);
    expect(wrapper.find(TableHead).length).toBe(1);
    expect(wrapper.find(TableBody).length).toBe(1);
    expect(wrapper.find(TableFooter).length).toBe(1);
    expect(wrapper.find(FormDialog).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('calls the changeTime function when a cell is clicked', () => {
    window.prompt = () => 5;
    const cell = wrapper.find('.time-cell').first();
    cell.simulate('click');
    expect(props.changeTime).toBeCalled();
  });

  it('calls the changeTime function with newHours = 0 when the user enters nothing', () => {
    window.prompt = () => '';
    const cell = wrapper.find('.time-cell').first();
    cell.simulate('click');
    expect(props.changeTime).toBeCalledWith('test', 'test', false, 'day0', 0);
  });

  it('does not call the changeTime function when the user does not enter time in quarter-hour increments', () => {
    window.prompt = () => 5.1;
    const cell = wrapper.find('.time-cell').first();
    cell.simulate('click');
    expect(props.changeTime).not.toBeCalled();
  });

  it('does not call the changeTime function when the user does not enter a number between 0 and 24', () => {
    window.prompt = () => 25;
    const cell = wrapper.find('.time-cell').first();
    cell.simulate('click');
    expect(props.changeTime).not.toBeCalled();
  });

  it('does not call the changeTime function when the user cancels the entry', () => {
    window.prompt = () => null;
    const cell = wrapper.find('.time-cell').first();
    cell.simulate('click');
    expect(props.changeTime).not.toBeCalled();
  });

  it('calls the deleteRow function when the button is clicked', () => {
    window.confirm = () => true;
    const button = wrapper.find(IconButton);
    button.simulate('click');
    expect(props.deleteRow).toBeCalled();
  });

  it('does not call the deleteRow function when the user fails to confirm', () => {
    window.confirm = () => false;
    const button = wrapper.find(IconButton);
    button.simulate('click');
    expect(props.deleteRow).not.toBeCalled();
  });

});
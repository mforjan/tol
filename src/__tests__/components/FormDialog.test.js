import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Form, FormDialog } from '../../components/FormDialog';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

Enzyme.configure({ adapter: new Adapter() });

describe('FormDialog', () => {

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      open: false,
      checked: false,
      toggleDialog: jest.fn(),
      changeChargeNumber: jest.fn(),
      changeLocation: jest.fn(),
      toggleCheck: jest.fn(),
      addTime: jest.fn(),
    }
    wrapper = shallow(<FormDialog {...props} />)
  })

  it('renders all the elements properly', () => {
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(Dialog).length).toBe(1);
    expect(wrapper.find(Form).length).toBe(1);
  });

  it('calls the toggle dialog function when the add time button is clicked', () => {
    const button = wrapper.find('.add-time');
    button.simulate('click');
    expect(button.props().onClick).toBeCalled();
  });

})

describe('Form', () => {

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      chargeNumber: '',
      location: '',
      checked: false,
      toggleDialog: jest.fn(),
      changeChargeNumber: jest.fn(),
      changeLocation: jest.fn(),
      toggleCheck: jest.fn(),
      addTime: jest.fn(),
      handleCancel: jest.fn()
    }
    wrapper = shallow(<Form {...props} />);
  });

  it('renders all the elements properly', () => {
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find(DialogTitle).length).toBe(1);
    expect(wrapper.find(DialogContent).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(2);
    expect(wrapper.find(TextField).length).toBe(2);
    expect(wrapper.find(FormGroup).length).toBe(1);
    expect(wrapper.find(FormControlLabel).length).toBe(1);
    expect(wrapper.find(DialogActions).length).toBe(1);
  })

  it('calls the toggle dialog function when the cancel button is clicked', () => {
    let button = wrapper.find('.cancel');
    button.simulate('click');
    expect(props.toggleDialog).toBeCalled();
  });

  it('calls the changeChargeNumber function with the value the user enters in the text field', () => {
    const textField = wrapper.find('#chargeNumber')
    textField.simulate('change', { target: { value: 'test' }});
    expect(props.changeChargeNumber).toBeCalledWith('test');
  });

  it('calls the changeLocation function with the value the user enters in the text field', () => {
    const textField = wrapper.find('#location')
    textField.simulate('change', { target: { value: 'test' }});
    expect(props.changeLocation).toBeCalledWith('test');
  });

  it('adds the row to the time sheet', () => {
    props.chargeNumber = 'test';
    props.location = 'test';
    wrapper = shallow(<Form {...props} />);
    const button = wrapper.find('[type="submit"]');
    button.simulate('click', {
      preventDefault: () => {}
    });
    expect(props.addTime).toBeCalledWith('test', 'test', false);
    expect(props.toggleCheck).not.toBeCalled();
    expect(props.changeChargeNumber).toBeCalledWith('');
    expect(props.changeLocation).toBeCalledWith('');
    expect(props.toggleDialog).toBeCalled();
  });

  it('calls the toggleCheck function only if checked is true', () => {
    let button = wrapper.find('.cancel');
    button.simulate('click');
    expect(props.toggleCheck).not.toBeCalled();

    props.checked = true;
    wrapper = shallow(<Form {...props} />);
    button = wrapper.find('.cancel');
    button.simulate('click');
    expect(props.toggleCheck).toBeCalled();

    button = wrapper.find('[type="submit"]');
    button.simulate('click', {
      preventDefault: () => {}
    });
    expect(props.toggleCheck).toBeCalled();
  });

  it('does not add the row to the time sheet if there is a missing charge number or location', () => {
    props.chargeNumber = ''
    props.location = 'test'
    wrapper = shallow(<Form {...props} />)
    let button = wrapper.find('[type="submit"]');
    button.simulate('click', {
      preventDefault: () => {}
    });
    expect(props.addTime).not.toBeCalled();

    props.chargeNumber = 'test'
    props.location = ''
    wrapper = shallow(<Form {...props} />)
    button = wrapper.find('[type="submit"]');
    button.simulate('click', {
      preventDefault: () => {}
    });
    expect(props.addTime).not.toBeCalled();
  })

})
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MessagesDialog } from '../../components/MessagesDialog';
import Dialog from '@material-ui/core/Dialog';
import { IconButton } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('MessagesDialog', () => {

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      open: false,
      toggleDialog: jest.fn(),
      data: [
        {
          id: 0,
          date: '6/19',
          text: 'Test',
        }
      ],
      deleteMessage: jest.fn(() => 'deleteMessage')
    }

    window.confirm = () => true;

    wrapper = shallow(<MessagesDialog {...props} />)
  })

  it('renders a div', () => {
    expect(wrapper.find('div').length).toBe(1);
  })

  it('displays "No messages" when there are no messages', () => {
    props.data = []
    wrapper = shallow(<MessagesDialog {...props} />);
    expect(wrapper.find('[primary="No messages"]').length).toBe(1)
  })

  it('calls the deleteMessage function when the icon button is clicked', () => {
    const button = wrapper.find(IconButton);
    button.simulate('click');
    expect(props.deleteMessage).toBeCalled();
  })

  it('does not call the deleteMessage function when the user fails to confirm', () => {
    window.confirm = () => false;
    const button = wrapper.find(IconButton);
    button.simulate('click');
    expect(props.deleteMessage).not.toBeCalled();
  })

});
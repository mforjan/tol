import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SideMenu } from '../../components/SideMenu';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Divider, Drawer } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';


Enzyme.configure({ adapter: new Adapter() });

describe('SideMenu', () => {

  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      open: false,
      infoOpen: false,
      toggleDrawer: jest.fn(),
      toggleAbsences: jest.fn(),
      toggleMessages: jest.fn(),
      toggleInfo: jest.fn()
    }

    wrapper = shallow(<SideMenu {...props} />)
  })

  it('should render the correct elements', () => {
    expect(wrapper.find(Drawer).length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find(List).length).toBe(3);
    expect(wrapper.find(Divider).length).toBe(1);
    expect(wrapper.find(ListItem).length).toBe(5);
    expect(wrapper.find(ListItemIcon).length).toBe(1);
    expect(wrapper.find(ListItemText).length).toBe(5);
    expect(wrapper.find(Collapse).length).toBe(1);
    expect(wrapper.find(ExpandMore).length).toBe(1);
  });
  
  it('should expand when the info section is open', () => {
    const button = wrapper.find('.expandable');
    button.simulate('click');
    expect(button.props().onClick).toBeCalled();
  })

  it('should find an ExpandLess element when infoOpen is true', () => {
    props.infoOpen = true;
    wrapper = shallow(<SideMenu {...props} />);
    expect(wrapper.find(ExpandLess).length).toBe(1);
  });

});
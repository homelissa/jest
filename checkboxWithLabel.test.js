import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from './checkboxWithLabel.js';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('CheckboxWithLabel', () => {
  test('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    Enzyme.configure({ adapter: new Adapter() })
    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');
  });
});

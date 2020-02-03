import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('expect to render Card component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increments counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual('red');
});

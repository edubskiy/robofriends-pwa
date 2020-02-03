import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render Card component', () => {
  const robotsMock = [
    {
      id: 1, 
      name: 'John Snow',
      user: 'John',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={robotsMock} />)).toMatchSnapshot();
})

import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

it('expect to render App component', () => {
  const mockStore = {
    getState: () => {},
    robots: [],
    searchField: ''
  }
  expect(shallow(<MainPage store={mockStore} />)).toMatchSnapshot();
});

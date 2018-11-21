import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('ClockComponent', () => {
    var MockDate = require('mockdate');

    beforeEach(() => {
        var MockDate = require('mockdate');
        MockDate.set('2018/1/1 00:00:00')
    });

    afterEach(() => {
        MockDate.reset();
    });

    test('renders current time when initialize', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.text()).toBe('00:00:00RGB(0, 0, 0)')
    })
});
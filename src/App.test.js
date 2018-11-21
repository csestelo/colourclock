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
        MockDate.set('2018/1/1 00:00:00');
        jest.useFakeTimers();
    });

    afterEach(() => {
        MockDate.reset();
        jest.clearAllTimers()
    });

    test('renders current time and colour when initialize', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.text()).toBe('00:00:00RGB(0, 0, 0)')
    });

    test('passed 60 seconds increments minute and set colour', () => {
        jest.advanceTimersByTime(60000);
        const wrapper = shallow(<App/>);
        expect(wrapper.text()).toBe('00:00:00RGB(0, 0, 0)')
    })
});
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactTestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// https://revelry.co/react-testing-with-jasmine/
describe('MyComponent', function() {
  var Utils = ReactTestUtils;

  it('can render without error', function() {
    var component, element;
    // First we create an element, which is a description of the component we
    // would like to render (It has no methods, see:
    // https://facebook.github.io/react/docs/glossary.html so it isn't useful
    // for testing by itself)
    element = React.createElement(
      App, // component class
      {} // props go here
      // You can also add children here as the last argument
    );

    // Render into a document fragment and return the full component instance.
    // You'll generally be testing `component`'s behavior in the rest of your
    // test.
    expect(function() {
      component = Utils.renderIntoDocument(element);
    }).not.toThrow();
  });
});
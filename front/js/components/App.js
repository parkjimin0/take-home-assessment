/**
 * @file App component.
 */

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hello JIMINN's World!</h1>
    </div>
  );
};

const renderApp = (selector) => {
  document.querySelectorAll(selector).forEach((el) => {
    ReactDOM.render(<App {...el.dataset} />, el);
  });
};

export default renderApp
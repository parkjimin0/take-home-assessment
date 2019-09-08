/**
 * @file Timestamp component.
 */

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import useTimestampProvider from '../hooks/use-timestamp-provider';

const Timestamp = () => {
  const [timestamp, fetchTimestamp] = useTimestampProvider();

  useEffect(() => {
    fetchTimestamp();
  }, []);

  return (
    <>
      <p>Timestamp: {timestamp}</p>
      <button type="submit" onClick={fetchTimestamp}>
        Reload Timestamp
      </button>
    </>
  );
};

const renderTime = (selector) => {
  document.querySelectorAll(selector).forEach((el) => {
    ReactDOM.render(<Timestamp {...el.dataset} />, el);
  });
};

export default renderTime;

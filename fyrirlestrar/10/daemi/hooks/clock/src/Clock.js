import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  const { timeZone } = props;
  const time = date.toLocaleString('is-IS', { timeZone });

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

Clock.propTypes = {
  timeZone: PropTypes.string,
};

Clock.defaultProps = {
  timeZone: 'Atlantic/Reykjavik',
}

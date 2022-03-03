import './ProgressCircle.css';

import React from 'react';
import Circle from './Circle';

const ProgressCircle = (props) => {
  const { progress } = props;

  return (
    <div className='ProgressCircle'>
      <svg
        style={{
          width: 288,
          height: 288,
        }}
      >
        <Circle color='black'></Circle>
        <Circle
          color={progress === 0 ? 'black' : 'red'}
          progress={progress}
        ></Circle>
      </svg>
    </div>
  );
};

export default ProgressCircle;

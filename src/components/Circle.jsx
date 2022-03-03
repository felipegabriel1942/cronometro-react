import React from 'react';

const Circle = (props) => {
  const radius = 90;
  const circumference = radius * 2 * Math.PI;
  const progress = props.progress || 1;

  const style = {
    strokeDasharray: [circumference, circumference],
    strokeDashoffset: circumference - progress * circumference,
  };

  return (
    <circle
      style={style}
      stroke={props.color || 'black'}
      strokeWidth='10'
      fill='transparent'
      r={radius}
      cx={135}
      cy={145}
    />
  );
};

export default Circle;

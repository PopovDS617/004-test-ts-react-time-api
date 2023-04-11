import React from 'react';
import { ApiResponse } from '../models/api-response';
import { timeFormatter } from '../utils/timeFormatter';

type Props = {
  data: ApiResponse | null;
};

export const Clock = (props: Props) => {
  const currentTime = props.data?.unixtime ?? new Date().getTime() / 1000;
  const time = new Date(currentTime * 1000);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondsPosition = {
    transform: `rotate(${seconds * 6}deg)`,
  };

  const minutesPosition = {
    transform: `rotate(${minutes * 6}deg)`,
  };
  const hoursPosition = {
    transform: `rotate(${hours * 30}deg)`,
  };

  return (
    <div className={'clock'}>
      <div className={'analog-clock'}>
        <div className={'dial sec'} style={secondsPosition} />
        <div className={'dial min'} style={minutesPosition} />
        <div className={'dial hr'} style={hoursPosition} />
      </div>
      <div className={'digital-clock'}>
        {timeFormatter(hours, minutes, seconds)}
      </div>
    </div>
  );
};

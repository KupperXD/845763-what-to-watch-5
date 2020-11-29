const HOUR = 60;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const isDouble = (n) => n > 10 ? n : `0${n}`;

export const getElapsedTime = (duration, progress) => {
  const minutesElapsed = Math.floor((duration - progress) / HOUR);
  const secondsElapsed = Math.floor((duration - progress) % HOUR);
  const timeElapsed = `${isDouble(minutesElapsed)}:${isDouble(secondsElapsed)}`;

  return timeElapsed;
};

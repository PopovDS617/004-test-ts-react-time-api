export const timeFormatter = (
  hours: number,
  minutes: number,
  seconds: number
) => {
  const formatted =
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0');

  return formatted;
};

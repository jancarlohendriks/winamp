const millisecondsToMinutes = (durationInMilliseconds: number): string => {
  const millisecondsInMinute = 60 * 1000; // 60 seconds * 1000 milliseconds
  const durationInMinutes = durationInMilliseconds / millisecondsInMinute;
  const formattedMinutes = durationInMinutes.toFixed(2);

  const parts = formattedMinutes.split(".");
  const minutePart = parts[0];
  const secondPart = parts[1];

  if (parseInt(minutePart) < 10) {
    return `0${minutePart}:${secondPart}m`;
  } else {
    return `${minutePart}:${secondPart}m`;
  }
};

export default millisecondsToMinutes;

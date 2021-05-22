export const timeFormatter = (count) => {
  let minutes = Math.floor(count / 60); // the lower rounded value of the division
  let seconds = count % 60; // the modulus calculates the remaining seoconds after all minutes (60 minutes) have been evenly divided

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return `${minutes}:${seconds}`;
};

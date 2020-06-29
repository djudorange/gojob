/**
 * returns the closest number to zero
 *
 * @param array integers
 * @returns integer
 */
function closestToZero(integers) {
  if (!integers || !Array.isArray(integers) || integers.length === 0) {
    return 0;
  }

  const { value: closestValue } = integers.reduce((closest, value) => {
    const abs = Math.abs(value);

    if (
      !closest.value ||
      abs < closest.abs ||
      (abs === closest.abs && value > 0)
    ) {
      return { value, abs };
    }

    return closest;
  }, {});

  return closestValue;
}

module.exports = closestToZero;

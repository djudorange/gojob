/**
 * returns the closest number to zero
 *
 * @param array integers
 * @returns integer
 */
function closestToZero(integers) {
  if (!integers || Array.isArray(integers) || integers.length === 0) {
    return 0;
  }

  return integers.reduce((closest, value) => {
    if (!closest) {
      return value;
    }
    const absValue = Math.abs(value);
    const absClosest = Math.abs(closest);

    if (absValue < absClosest) {
      return value;
    }

    if (absValue === absClosest && value > 0) {
      return value;
    }

    return closest;
  }, undefined);
}

module.exports = closestToZero;

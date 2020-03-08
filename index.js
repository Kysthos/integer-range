function intRange(bits, signed = false) {
  if (!Number.isInteger(bits))
    throw new TypeError(`${bits} is not an integer.`)

  let bi = false;
  const n = num => bi ? BigInt(num) : num;
  const getMin = bits => signed ? -(n(2) ** n(bits - 1)) : n(0);
  const getMax = bits => signed ? n(2) ** n(bits - 1) - n(1) : n(2) ** n(bits) - n(1)

  let min = getMin(bits)
  let max = getMax(bits)

  if (
    !Number.isSafeInteger(min) ||
    !Number.isSafeInteger(max)
  ) {
    bi = true;
    min = getMin(bits)
    max = getMax(bits)
  };

  return {
    min,
    max,
    safe: !bi,
    signed,
    bits
  }
}

module.exports = intRange;

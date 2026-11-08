const multiplyValue = (value: number, multiplier?: number) => {
  if (value && multiplier) {
    return value * multiplier;
  }

  return value * 2;
};

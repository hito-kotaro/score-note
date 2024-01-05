export const isInvalidValueCheck = (value: string) => {
  const numericValue = parseInt(value, 10);
  if (numericValue >= 1 && numericValue <= 999) {
    return false;
  }
  return true;
};

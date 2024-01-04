export const isInvalidValueCheck = (value: string) => {
  const numericValue = parseInt(value, 10);
  if (numericValue >= 1 && numericValue <= 999) {
    console.log("false");
    return false;
  }
  console.log("true");
  return true;
};

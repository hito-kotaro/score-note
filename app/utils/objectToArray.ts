interface Data {
  [key: string]: string;
}
export const objectToArray = (data: Data) => {
  return Object.values(data);
};

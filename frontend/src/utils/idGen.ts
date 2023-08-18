export const keyGen = () => {
  return (
    Math.random().toString(12).substring(2, 8) +
    Math.random().toString(12).substring(2, 8)
  );
};

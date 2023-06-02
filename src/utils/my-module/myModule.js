export const add = (a, b) => a + b;

export const myFunction = (a, b) => {
  const sum = add(a, b);
  return sum >= 10 ? "Big" : "Small";
};

import React from "react";
import { computeSomethingExpensive } from "../../utils/utils";

const ExpensiveComponent = () => {
  const result = computeSomethingExpensive();

  return <div>{result}</div>;
};

export default ExpensiveComponent;

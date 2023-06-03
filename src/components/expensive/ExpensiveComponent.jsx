import React from "react";
import { computeSomethingExpensive } from "../../utils/utils";

const ExpensiveComponent = () => {
  const result = computeSomethingExpensive();

  return <div data-testid="expensive-node">{result}</div>;
};

export default ExpensiveComponent;

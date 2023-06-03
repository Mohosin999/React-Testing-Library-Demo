import React from "react";

const List = ({ data = [] }) => {
  return (
    <div>
      <h3 data-testid="list-header">List Items</h3>
      <ul data-testid="list-container">
        {data.map((item) => (
          <li key={item} data-testid="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

import React from "react";

const List = ({ data = [] }) => {
  return (
    <div>
      <h3>List Items</h3>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;

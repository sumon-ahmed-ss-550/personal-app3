import React from "react";

const List = ({ data }) => {
  return (
    <div>
      <li>
        <a href="#">{data.name}</a>
      </li>
    </div>
  );
};

export default List;

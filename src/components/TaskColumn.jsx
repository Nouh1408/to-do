import React from "react";

export default function TaskColumn(props) {
  return (
    <div>
      <h2 className="d-flex">
        {" "}
        <img className="w-25 ms-2" src={Todo} alt="" />{props.title}
      </h2>
    </div>
  );
}

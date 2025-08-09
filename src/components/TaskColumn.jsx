import React from "react";

export default function TaskColumn({icon,title}) {
    
  return (
    <div>
      <h2 className="d-flex">
        <img className="w-25 ms-2" src={icon} alt="" />{title}
      </h2>
    </div>
  );
}

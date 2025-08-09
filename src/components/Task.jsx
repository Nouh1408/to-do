import React from "react";
import "./Task.css";
import Tag from "./Tag.jsx";
export default function Task() {
  return (
    <div>
      <header className="header">
        <form>
          <input type="text" className="U-Input" placeholder="Enter Task" />
          <div>
            <div className="task-form ">
              <div className=" d-flex flex-wrap gap-1">
                <Tag name="HTML" />
                <Tag name="CSS" />
                <Tag name="JavaScript"/>
                <Tag name="Node.JS"/>
              </div>

              <div className=" d-flex">
                <select className="status me-2">
                  <option value="todo">To do</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
                <button type="submit" className=" btn btn-danger">
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

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
            <div className="task-form">
              <div>
                <Tag />
                <Tag />
                <Tag />
                <Tag />
              </div>

              <div>
                <select className="status">
                  <option value="todo">To do</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
                <button type="submit" className="add-task">
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

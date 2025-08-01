import React from "react";
import './Task.css'; 
export default function Task() {
  return (
    <div>
      <header className="header">
        <form >
          <input type="text" className="U-Input" placeholder="Enter Task" />
          <div>
            <div className="task-form">
             <div>
               <button className="tag">HTML</button>
              <button className="tag">CSS</button>
              <button className="tag">JAVASCRIPT</button>
              <button className="tag">REACT</button>
             </div>

              <div>
                <select className="status">
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
                <button type="submit" className="add-task">Add Task</button>
              </div>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

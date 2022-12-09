import React from "react";

function Task({ tasks, keyId, deleteHandler }) {
  return (
    <div className="task">
      <div className="label">{tasks.category}</div>
      <div className="text">{tasks.text}</div>
      <button 
        id = {keyId} 
        className="delete" 
        onClick={()=>deleteHandler(tasks)}
      >X</button>
    </div>
  );
}

export default Task;

import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTaskArr, categorySelect, selectedCategories }) {


  function deleteHandler(e){
    const newArr = tasks.filter(t=>{
      return t.text !== e.text
    })
    setTaskArr(newArr);
  }

  const tasksToDisplay = selectedCategories.map((task, index)=>{
    return <div>
      <Task keyId={index} tasks = {task} deleteHandler= {deleteHandler}/>
    </div>
  })


  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;

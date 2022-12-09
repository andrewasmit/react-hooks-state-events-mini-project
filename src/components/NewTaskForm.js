import React from "react";

function NewTaskForm({ 
    categories, 
    newTask, 
    setNewTask, 
    optCat, 
    setOptCat,
    onTaskFormSubmit
}) {

  const options = categories.map(opt=>{
    return opt==="All" ?  null : 
    <option>{opt}</option>
  })

  function optChangeHandler(e){
    setOptCat(e.target.value)
  }


  function handleNewTaskChange(e){
    setNewTask(e.target.value)
  }

  return (
    <form 
        className="new-task-form" 
        onSubmit={ onTaskFormSubmit }
    >
      <label>
        Details
        <input 
            type="text"
            name="text" 
            value = { newTask }
            onChange = { handleNewTaskChange }
        />
      </label>
      <label>
        Category
        <select 
            onChange={optChangeHandler} 
            name="category"
            value = {optCat}
        >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

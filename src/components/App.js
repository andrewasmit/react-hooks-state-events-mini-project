import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [taskArr, setTaskArr] = useState(TASKS);
  const [categorySelect, setCategorySelect] = useState("All");
  const [newTask, setNewTask] = useState("")
  const [optCat, setOptCat] = useState("Code")

  console.log(taskArr)

  function onTaskFormSubmit(e){
    e.preventDefault();
    const newTaskForm = {
      text: newTask,
      category: optCat
    }
    setTaskArr([...taskArr, newTaskForm]);
  }


  const selectedCategories = taskArr.filter(t=>{
    return categorySelect === "All" ? true : t.category === categorySelect 
    })

  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
          catBtnArr = { CATEGORIES } 
          categorySelect={ categorySelect } 
          setCategorySelect= { setCategorySelect }
          tasks = { taskArr } 
          setTaskArr={ setTaskArr }
      />
      <NewTaskForm
          categories = { CATEGORIES }
          newTask = { newTask }
          setNewTask= { setNewTask }
          optCat={ optCat }
          setOptCat={ setOptCat }
          onTaskFormSubmit={ onTaskFormSubmit }
      />
      <TaskList 
          tasks = { taskArr } 
          setTaskArr={ setTaskArr } 
          categorySelect={ categorySelect } 
          selectedCategories={ selectedCategories }
      />
    </div>
  );
}

export default App;

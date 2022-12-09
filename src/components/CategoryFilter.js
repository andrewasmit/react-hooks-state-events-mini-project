import React from "react";

function CategoryFilter({ 
    tasks, 
    setTaskArr, 
    categorySelect, 
    setCategorySelect, 
    catBtnArr
}) {

  const catBtns = catBtnArr.map(cat=>{
    const classSelect = cat === categorySelect ? "selected" : "";
    return <button className = {classSelect} onClick= {()=>setCategorySelect(cat)}>{cat}</button>
  })



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBtns}
    </div>
  );
}

export default CategoryFilter;

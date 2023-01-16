import React from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  function handleSubmit(e){
    e.preventDefault()
    let task_name = document.getElementById('new_task').value
    let category_name = document.getElementById('new_category').value;
    console.log([task_name,category_name])
    onTaskFormSubmit({
      text: task_name,
      category: category_name,
    });
    document.getElementById('new_task').value = "";
    document.getElementById('new_category').value="";
  }
 
  
  return (
    <form  onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" id="new_task"/>
      </label>
      <label>
        Category
        <select name="category" id="new_category">
          <option></option>
          {categories.filter((category) => category !== "All").map((category,name)=>(
            <option key={name}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

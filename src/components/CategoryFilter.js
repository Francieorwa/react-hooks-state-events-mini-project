import React from "react";

function CategoryFilter({categories,tasks,handleChange}) {

  function setCategory(category){
    let filtered_tasks = [];
    if(category === "All"){
      filtered_tasks = tasks;
    } else{
      filtered_tasks = tasks.filter((task)=>{
        return task.category === category;
      })
    }

    //console.log(filtered_tasks)
    handleChange(filtered_tasks)

    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(button){
      button.classList.remove("selected");
    }); 

    let selected_button = document.querySelector("button#"+category);
    selected_button.classList.add("selected");

    
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category,name)=> {
        return (<button id={category} onClick={() => setCategory(category)}  key={name}>  {category}   </button>)
            
      }
      )}
    </div>
  );
    }

export default CategoryFilter;

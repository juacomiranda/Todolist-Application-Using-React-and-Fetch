import { element } from "prop-types";
import React, { useEffect, useState, useContext } from "react";

export function Lista () {
    const [list, setList] = useState ([])
    const [task, setTask] = useState ([])

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
         e.preventDefault();
         if (task.trim()) {
            setList ([...list, task]);
            setTask ('');
         }
    };

    const handleDelete = (taskToDelete) => {
        setList(list.filter(task => task !== taskToDelete));
        };
   

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={task} 
                onChange={handleChange} 
                className="form-control" 
                placeholder="Ingrese una tarea y precione Enter" />
        </form>
       <ul>
        {list.map((task, index) => (
            <li key={index}> 
            {task}
            <button onClick={() => handleDelete(task)}>
            <i className="fas fa-trash-alt" />
          </button>
          </li>
        ))}
        </ul>
        </>
    );
}

  


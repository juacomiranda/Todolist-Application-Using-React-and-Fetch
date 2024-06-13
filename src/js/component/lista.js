import React, { useEffect, useState } from "react";

export function Lista() {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);


    useEffect(() => {
        fetch('https://playground.4geeks.com/todo/users/juacomiranda')
            .then(data => data.json())
            .then(response => setList(response.todos))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            const newTask = {
                label: task,
                is_done: false
            };
    
            fetch('https://playground.4geeks.com/todo/todos/juacomiranda', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            })
            .then(data => data.json())
            .then(response => {
                setList([...list, response]);
                setTask(''); 
            })
            .catch(error => console.error('Error:', error));
        }
    };
    

    const handleDelete = (id) => {
        fetch(`https://playground.4geeks.com/todo/todos/${id}`, 
            { method: 'DELETE' })
        .then(() => setList(list.filter(task => task.id !== id)));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={task} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Ingrese una tarea y precione Enter" 
                />
            </form>
            <ul>
                {list.map((task) => (
                    <li key={task.id}> 
                        {task.label}
                        <button onClick={() => handleDelete(task.id)}>
                            <i className="fas fa-trash-alt" />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

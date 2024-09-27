import React, {useState} from "react";

function ToDoList() {   
    const [tasks, setTask] = useState(["Eat", "Shower", "Feed Tiger"]);
    const [newTask, setNewTask] = useState("");

    function handleInputTask(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== "") {
            console.log(newTask);
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        setTask(tasks.filter((_, i) => i !== index))
    }

    function laudTask(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    function hootTask(index) {
        if(index < tasks.length) {
            const updatedTasks = [...tasks];
            [updatedTasks[index+1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index+1]];
            setTask(updatedTasks);
        }
    }

    return(
        <div className="app-area">
            <div className="todo-add">
                <h1>Your Todos</h1>
                <input type="text" placeholder="Enter your task..."
                    onChange={handleInputTask} value={newTask}/>
                <button onClick={addTask} className="add-button">Add</button>
            </div>

            <div className="todo-list">
                <ol>
                    {tasks.map((task, index) => {
                        return (
                            <li key={index}>
                                <span className="todo-text">{task}</span>
                                <button className="delete-todo" onClick={() => deleteTask(index)}>❌</button>
                                <button className="laud-todo" onClick={() => laudTask(index)}>👍</button>
                                <button className="hoot-todo" onClick={() => hootTask(index)}>👎</button>
                            </li>
                        )
                    }
                    )}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>To-Do List Application</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
       <ul>
  {tasks.map((item, index) => (
    <li key={index}>
      {item}
      <button
        onClick={() => deleteTask(index)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  ))}
</ul>
      </ul>
    </div>
  );
}

export default TodoList;
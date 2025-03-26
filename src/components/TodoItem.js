import React from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) { 
  function handleChange() {
    toggleCompleted(task.id);  // Ensure this function is correctly passed from TodoList
  }

  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={handleChange} // Fixed typo
      />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default TodoItem;

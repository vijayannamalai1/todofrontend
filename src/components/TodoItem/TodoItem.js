import React from 'react';
import axios from 'axios';
import './TodoItem.css'; 

const TodoItem = ({ todo, refreshTodos }) => {
    const toggleCompletion = async () => {
        try {
            await axios.put(`https://todoappmysql.onrender.com/todos/${todo.id}`, {
                ...todo,
                completed: !todo.completed,
            });
            refreshTodos();
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const deleteTodo = async () => {
        try {
            await axios.delete(`https://todoappmysql.onrender.com/todos/${todo.id}`);
            refreshTodos();  
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={toggleCompletion}
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.title}
            </span>
            <button className="todo-delete-button" onClick={deleteTodo}>Delete</button>
        </div>
    );
};

export default TodoItem;

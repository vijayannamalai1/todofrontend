import React, { useState } from 'react';
import axios from 'axios';
import './TodoForm.css'; // Import the CSS file

const TodoForm = ({ refreshTodos }) => {
    const [title, setTitle] = useState('');

    const addTodo = async () => {
        if (title === '') return; 
        try {
            await axios.post('https://todoappmysql.onrender.com/todos', { title, completed: false });
            setTitle('');  
            refreshTodos(); 
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className="todo-form">
            <input
                type="text"
                className="todo-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyPress} 
                placeholder="New Todo"
            />
            <button className="todo-button" onClick={addTodo}>Add</button>
        </div>
    );
};

export default TodoForm;

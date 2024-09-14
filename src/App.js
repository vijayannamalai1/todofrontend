import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

const App = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const res = await axios.get('https://todoappmysql.onrender.com/todos');
            setTodos(res.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const refreshTodos = () => {
        fetchTodos();  
    };

    useEffect(() => {
        fetchTodos();  
    }, []);

    return (
        <div>
          <h1 style={{textAlign: 'center'}}>Todo App</h1>
      
            <TodoForm refreshTodos={refreshTodos} />
            <TodoList todos={todos} refreshTodos={refreshTodos} />

            <p style={{textAlign: 'center'}} ><strong>Note:</strong> In this todo app I used MySql as a database in the backend</p>
        </div>
    );
};

export default App;

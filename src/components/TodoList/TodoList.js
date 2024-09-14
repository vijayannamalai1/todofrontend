import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'; 

const TodoList = ({ todos, refreshTodos }) => {
    return (
        <div className="todo-list">
            <h2 className="todo-list-header">Todo List</h2>
            {todos.length > 0 ? (
                <ul className="todo-list-items">
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} refreshTodos={refreshTodos} />
                    ))}
                </ul>
            ) : (
                <p className="todo-list-empty">No todos available</p>
            )}
        </div>
    );
};

export default TodoList;
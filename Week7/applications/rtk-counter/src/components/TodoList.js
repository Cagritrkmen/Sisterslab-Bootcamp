import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  completeTodo,
  getTodos,
  removeAllTodos,
  removeTodo,
} from '@/store/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (!todoText.trim()) return;
    dispatch(addTodo(todoText ));
    setTodoText('');
  };

  const handleRemove = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const handleRemoveAllTodos = () => {
    dispatch(removeAllTodos());
  };
  const handleCheckboxChange = (todoId) => {
    dispatch(completeTodo(todoId)); 
  };  
  return (
    <div>
      <input
        type="text"
        placeholder="Add New Todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleRemoveAllTodos}>Delete All Todos</button>
      <ul style={{listStyle: "none"}}>
        {todos.map((todo) => (
           
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
             <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            {todo.text+"  "} 
            <button onClick={() => handleRemove(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

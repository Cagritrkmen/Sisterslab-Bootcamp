import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  todos:[],
  loading: false,
  error: null,
};



export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodos: (state) => {
      state.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    addTodo:(state,action) =>{
      const newTodo = {
        id:Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos",JSON.stringify(state.todos));
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeAllTodos: (state) => {
      state.todos = [];
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    
  },
  
});

export const { getTodos,addTodo, removeTodo, completeTodo, removeAllTodos } =
  todoSlice.actions;

export default todoSlice.reducer;

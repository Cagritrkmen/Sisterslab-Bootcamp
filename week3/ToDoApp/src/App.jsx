import './App.css';
import Form from '../src/components/Form/form';
import List from './components/List/list';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    
    <div className="todoapp">
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <List todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
     <TodoInput />
     <TodoList />
    </div>
  );
}

export default App;

import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";
function App()
{
  return <center class="todo-coontainer">
    <AppName></AppName>
    <div className="table">
      <AppTodo></AppTodo>
      <div className="item-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </div>
  </center>
}
export default App;
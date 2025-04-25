import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello Add your Todo", complete: false },
  ]);
  const [selectedTabs, setSelectedTabs] = useState("Open");

  ///add new todo
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  //done button function
  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleDelete(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }
  useEffect(() => {
    if (!localStorage || localStorage.getItem("todo-app")) {
      return;
    }
  
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTabs={selectedTabs}
        setSelectedTabs={setSelectedTabs}
        todos={todos}
      />
      <TodoList
        handleDelete={handleDelete}
        handleCompleteTodo={handleCompleteTodo}
        todos={todos}
        selectedTabs={selectedTabs}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;

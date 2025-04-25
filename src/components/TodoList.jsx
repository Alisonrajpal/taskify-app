import TodoCard from "../components/TodoCard";

function TodoList(props) {
  const { todos, selectedTabs } = props;

  const filterTodoList =
    selectedTabs === "All"
      ? todos
      : selectedTabs === "Complete"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            {...props}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            todo={todo}
          />
        );
      })}
    </>
  );
}

export default TodoList;

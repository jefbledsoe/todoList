function App() {
  //initial to do list
  const [todos, setTodos] = React.useState([
    {
      text: "C - Create todo list",
      isCompleted: false,
    },
    {
      text: "R - Read todo list",
      isCompleted: false,
    },
    {
      text: "U - Update todo list",
      isCompleted: false,
    },
    {
      text: "D - Delete todo list",
      isCompleted: false,
    },
  ]);
  // add to do item
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };
  // remove to do item
  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  //return render to do list
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo index={i} id={i} todo={todo} remove={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

// render to React DOM
ReactDOM.render(<App />, document.getElementById("root"));

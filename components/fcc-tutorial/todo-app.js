import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <p>{todo.text}</p>
      <div>
        <button onClick={() => completeTodo(index)}>
          {todo.isCompleted ? "Reset" : "Complete"}
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-button-area">
        <Input
          size="sm"
          width={"80%"}
          type="text"
          className="text-white"
          placeholder="Add an item here"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button onClick={handleSubmit} size="sm">
          Add
        </Button>
      </div>
    </form>
  );
}

let initialObject = [
  {
    text: "Learn React",
    isCompleted: false,
  },
  {
    text: "Meet new friends",
    isCompleted: false,
  },
  {
    text: "Build cool apps",
    isCompleted: false,
  },
];

function SimpleTodoApp() {
  const [todos, setTodos] = useState(initialObject);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="todo-list m-auto">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <div>
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default SimpleTodoApp;

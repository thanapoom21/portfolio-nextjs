import { useState } from 'react';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <p>{todo.text}</p>
      <div>
        <button onClick={() => completeTodo(index)}>{todo.isCompleted ? "Not Completed" : "Complete"}</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

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
      <label>
        Type a todo list item down here:
        <input
          type="text"
          className="todo-input"
          value={value}
          onChange={e => setValue(e.target.value)}
          />
      </label>
    </form>
  );
}

let initialObject = [
  {
    text: "Learn about React",
    isCompleted: false
  },
  {
    text: "Meet friend for lunch",
    isCompleted: false
  },
  {
    text: "Build really cool todo app",
    isCompleted: false
  }
];

function TodoApp() {
  const [todos, setTodos] = useState(initialObject);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

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
    <div className="todo-app">
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

export default TodoApp;

import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTodo from "./EditTodo";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    toast.success("Todo added successfully");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    const deletedTodo = todos.find((todo) => todo.id === id);
    if (!deletedTodo) {
      toast.error("Todo not found!");
      return;
    }
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success("Todo deleted successfully");
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit && !todoToEdit.completed) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        )
      );
    } else {
      toast.warning("Editing completed tasks is not allowed.");
    }
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const cancelEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="mt-16 p-10 rounded-md bg-[#1a1a40]">
      <h1 className="capitalize">What do you want to do?</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, i) =>
        todo.isEditing ? (
          <EditTodo
            editTodo={editTask}
            cancelEdit={cancelEdit}
            task={todo}
            key={todo.id}
          />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
      <ToastContainer />
    </div>
  );
};

export default TodoWrapper;

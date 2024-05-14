import { useState, useEffect } from "react";

const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(task.task);
  }, [task.task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="w-full mb-13" onSubmit={handleSubmit}>
      <input
        required
        value={value}
        type="text"
        className="todo-input"
        placeholder="update our task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodo;

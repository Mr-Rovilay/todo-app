import { useState, useEffect } from "react";

const EditTodo = ({ editTodo, cancelEdit, task }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(task.task);
  }, [task.task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  const handleCancel = () => {
    cancelEdit(task.id);
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
      <button type="submit" className="todo-btn mr-1">
        Update
      </button>
      <button type="button" onClick={handleCancel} className="todo-btn">
        Cancel
      </button>
    </form>
  );
};

export default EditTodo;

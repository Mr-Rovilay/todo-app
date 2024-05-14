const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <div
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""} capitalize flex gap-4`}
      >
        <input type="checkbox" name="" id="" />
        <p>{task.task}</p>
      </div>
      <div className="flex gap-2">
        <div className="border rounded-md p-2 border-dark-green bg-dark-green">
          <i
            className="fi fi-rr-edit font-bold text-2xl cursor-pointer"
            onClick={() => editTodo(task.id)}
          ></i>
        </div>
        <div className="border rounded-md p-2 border-dark-green bg-dark-green">
          <i
            className="fi fi-rs-trash font-bold text-2xl cursor-pointer"
            onClick={() => deleteTodo(task.id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Todo;

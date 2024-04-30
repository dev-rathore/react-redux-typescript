import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todo.actions";

const AddTodo: React.FC = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText));
      setNewTodoText("");
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodoText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
};

export default AddTodo;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../actions/todoActions";
import { TodoState } from "../types/todoTypes";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: TodoState) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? <p>Todo List is empty</p> : null}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

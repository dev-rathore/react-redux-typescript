import { TodoAction, TodoActionType } from "../types/todoTypes";

// Whenever we call an action, reducer executes and gives us the desired result

export const addTodo = (text: string): TodoAction => ({
  type: TodoActionType.ADD_TODO,
  payload: text,
});

export const fetchTodos = (): TodoAction => ({
  type: TodoActionType.FETCH_TODOS,
  payload: [],
});

export const toggleTodo = (id: number): TodoAction => ({
  type: TodoActionType.TOGGLE_TODO,
  payload: id,
});

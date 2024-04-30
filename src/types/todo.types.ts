export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  FETCH_TODOS = "FETCH_TODOS",
  TOGGLE_TODO = "TOGGLE_TODO",
}

export interface AddTodoAction {
  type: TodoActionType.ADD_TODO;
  payload: string;
}

export interface FetchTodosAction {
  type: TodoActionType.FETCH_TODOS;
  payload: Todo[];
}

export interface ToggleTodoAction {
  type: TodoActionType.TOGGLE_TODO;
  payload: number;
}

export type TodoAction = AddTodoAction | ToggleTodoAction | FetchTodosAction;

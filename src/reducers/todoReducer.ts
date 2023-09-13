import { TodoState, TodoAction, TodoActionType } from "../types/todoTypes";

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (prevState = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      const newTodo = {
        id: prevState.todos.length + 1,
        text: action.payload,
        completed: false,
      };
      return {
        ...prevState,
        todos: [...prevState.todos, newTodo],
      };

    case TodoActionType.FETCH_TODOS:
      return {
        ...prevState,
        todos: action.payload,
      };

    case TodoActionType.TOGGLE_TODO:
      return {
        ...prevState,
        todos: prevState.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return prevState;
  }
};

export default todoReducer;

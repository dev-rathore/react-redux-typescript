import { createStore } from "redux";
import todoReducer from "../reducers/todo.reducer";

const store = createStore(todoReducer);

export default store;

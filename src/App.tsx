import React from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import {
  AddTodo,
  TodoList,
} from "./components";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>TodoList Web App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;

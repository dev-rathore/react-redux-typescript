import React from "react";
import { Provider } from "react-redux";
import store from "./store/configure-store";
import {
  AddTodo,
  TodoList,
} from "./components";

const App: React.FC = () => {
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

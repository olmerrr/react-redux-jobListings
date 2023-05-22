import {NewTodo} from "./features/Todos/NewTodo";
import {Filters} from "./features/Filters/Filters";
import {ResetFilters} from "./features/Filters/ResetFilters";
import {TodoList} from "./features/Todos/TodoList";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <div className="controls">
        <ResetFilters/>
        <Filters />
      </div>
        <TodoList />
    </div>
  );
}

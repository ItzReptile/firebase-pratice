import CreateTodo from "../Components/CreateTodo";
import TodoList from "../Components/TodoList";

export default function Home() {
  return (
    <>
    <div className="container">
    <TodoList/>
    <CreateTodo/>
    </div>
    
    </>
  );
}

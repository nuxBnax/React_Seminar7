import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
    const todo = useSelector((state)=> state.todo); // - 
    return (
        <ul>
            {todo.items.map(item =>
                <li key={item.id}>
                    <TodoItem {...item} />
                </li>)}
        </ul>
    );
}

export default TodoList;
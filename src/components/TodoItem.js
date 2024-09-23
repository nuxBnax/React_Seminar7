import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteTodo } from "../redux/slices/todoSlice";

function TodoItem({ id, text }) {
    const dispatch = useDispatch();
    const deleteItem = () => {
        // if (window.confirm('Вы уверены что хотите удалить?')) {
            
        // }
        dispatch(deleteTodo(id))    
    }

    return (
        <div>
            <p>{text}</p>
            <Button handlerClick={deleteItem}>Удалить</Button>
        </div>
    );
}

export default TodoItem;
import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

function Form() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handlerOnChange = ({ target }) => {
        setValue(target.value)
    }
    
    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(value)) // попадает в payload, addTodo экшонКриэйтор
        console.log();
        setValue('');
    }
    return (
        <form onSubmit={handlerSubmit}>
            <input onChange={handlerOnChange} value={value} />
            <Button>Добавить</Button>
        </form>
    );
}

export default Form;
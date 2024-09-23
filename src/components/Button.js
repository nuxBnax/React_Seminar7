
function Button({ children, handlerClick = () => { } }) { // если нет функции то будет просто пустое значение
    return (
        <button onClick={handlerClick}>{children}</button>
    );
}

export default Button;